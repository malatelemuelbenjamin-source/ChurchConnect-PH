import en from './locales/en.json';
import core from './locales/fil-core.json';
import solutions from './locales/fil-solutions.json';
import sections from './locales/fil-sections.json';
import closing from './locales/fil-closing.json';
import final from './locales/fil-final.json';
import showcase from './locales/fil-showcase.json';
import municipalities from './locales/fil-municipalities.json';

const STORAGE_KEY = 'connectchurch-language';
const SUPPORTED = ['en', 'fil'];

const dictionaries = [core, solutions, sections, closing, final, showcase, municipalities];
const filText = Object.assign({}, ...dictionaries.map((dict) => dict.text));
const filAttributes = Object.assign({}, ...dictionaries.map((dict) => dict.attributes || {}));

const normalize = (value) => value.replace(/\s+/g, ' ').trim();
const loose = (value) =>
  normalize(value)
    .replace(/[\u2018\u2019\u201A\u201B]/g, "'")
    .replace(/[\u201C\u201D\u201E]/g, '"')
    .replace(/[\u2013\u2014]/g, '-');

const buildIndex = (entries) => {
  const exact = new Map();
  const relaxed = new Map();
  for (const [key, value] of Object.entries(entries)) {
    exact.set(normalize(key), value);
    const relaxedKey = loose(key);
    if (!relaxed.has(relaxedKey)) relaxed.set(relaxedKey, value);
  }
  return { exact, relaxed };
};

const textIndex = buildIndex(filText);
const attributeIndex = buildIndex(filAttributes);

function lookup(index, source) {
  if (!source) return null;
  return index.exact.get(normalize(source)) ?? index.relaxed.get(loose(source)) ?? null;
}

/** Translate a single English source string to the active language. */
export function translate(source) {
  if (current === 'en') return source;
  return lookup(textIndex, source) ?? source;
}

/** Translate an accessible label / alt string to the active language. */
export function translateAttribute(source) {
  if (current === 'en') return source;
  return lookup(attributeIndex, source) ?? source;
}

const stored = (() => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(value) ? value : 'en';
  } catch {
    return 'en';
  }
})();

let current = stored;

if (typeof document !== 'undefined') {
  document.documentElement.lang = current === 'fil' ? 'fil' : 'en';
  document.documentElement.dataset.lang = current;
}

const textRecords = new Map();
const attributeRecords = new Map();
let announceRegion = null;

function splitWhitespace(value) {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  return { leading, trailing };
}

function applyTextNodes(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (parent.closest('script, style, noscript, [data-no-i18n]')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  let node = walker.nextNode();
  while (node) {
    const currentValue = node.nodeValue;
    const sourceText = normalize(currentValue);
    const record = textRecords.get(node);
    const unchanged = record && record.applied === sourceText;
    const source = unchanged ? record.source : sourceText;
    const target = language === 'fil' ? lookup(textIndex, source) : null;
    const nextValue = target === null || target === '' ? source : target;

    if (target === '' && language === 'fil') {
      // Deliberately empty translation (e.g. a filler word that has no Filipino equivalent).
      const { leading, trailing } = splitWhitespace(currentValue);
      node.nodeValue = `${leading}${trailing}`;
      textRecords.set(node, { source, applied: '', empty: true });
    } else {
      const { leading, trailing } = splitWhitespace(currentValue);
      const rendered = language === 'fil' ? nextValue : source;
      if (rendered !== sourceText) {
        node.nodeValue = `${leading}${rendered}${trailing}`;
      }
      textRecords.set(node, { source, applied: normalize(rendered), empty: false });
    }
    node = walker.nextNode();
  }
}

function applyAttributes(language) {
  document.querySelectorAll('[alt], [aria-label], [placeholder], [title]').forEach((element) => {
    if (element.closest('[data-no-i18n]')) return;
    ['alt', 'aria-label', 'placeholder', 'title'].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const currentValue = element.getAttribute(attribute);
      if (!currentValue || !currentValue.trim()) return;
      const sourceText = normalize(currentValue);
      let store = attributeRecords.get(element);
      if (!store) {
        store = {};
        attributeRecords.set(element, store);
      }
      const record = store[attribute];
      const unchanged = record && record.applied === sourceText;
      const source = unchanged ? record.source : sourceText;
      const target = language === 'fil' ? lookup(attributeIndex, source) : null;
      const rendered = target ?? source;
      if (rendered !== currentValue) element.setAttribute(attribute, rendered);
      store[attribute] = { source, applied: normalize(rendered) };
    });
  });
}

function applyMeta(language) {
  const meta = language === 'fil' ? closing.meta : en.meta;
  document.title = meta.title;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', meta.ogTitle);
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', meta.description);
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', meta.ogTitle);
  const twitterDescription = document.querySelector('meta[name="twitter:description"]');
  if (twitterDescription) twitterDescription.setAttribute('content', meta.description);
}

function updateSwitchers() {
  document.querySelectorAll('[data-lang-switch]').forEach((group) => {
    group.dataset.active = current;
    group.setAttribute('aria-label', current === 'fil' ? closing.ui.language : 'Language');
    group.querySelectorAll('[data-lang]').forEach((button) => {
      const active = button.dataset.lang === current;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('is-active', active);
      button.tabIndex = active ? 0 : -1;
    });
  });
}

function announce() {
  if (!announceRegion) return;
  announceRegion.textContent =
    current === 'fil' ? closing.ui.announceFilipino : closing.ui.announceEnglish;
}

function apply(language, { meta = true, live = true } = {}) {
  current = language;
  document.documentElement.lang = language === 'fil' ? 'fil' : 'en';
  document.documentElement.dataset.lang = language;
  applyTextNodes(language);
  applyAttributes(language);
  if (meta) applyMeta(language);
  updateSwitchers();
  if (live) announce();
}

export function getLanguage() {
  return current;
}

export function setLanguage(language, { animate = true } = {}) {
  if (!SUPPORTED.includes(language) || language === current) {
    if (language === current) updateSwitchers();
    return;
  }
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    /* storage can be unavailable in private modes — the session still switches */
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!animate || reduceMotion) {
    apply(language);
    return;
  }

  const root = document.documentElement;
  root.classList.add('is-switching-lang');
  window.setTimeout(() => {
    apply(language);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => root.classList.remove('is-switching-lang'));
    });
  }, 170);
}

/** Re-apply the active language after dynamic markup (labels, aria attributes) changes. */
export function refreshLanguage() {
  apply(current, { meta: false, live: false });
}

export function initI18n() {
  announceRegion = document.querySelector('[data-lang-announce]');
  apply(current);
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
  document.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    const button = event.target.closest?.('[data-lang]');
    if (!button) return;
    const group = button.closest('[data-lang-switch]');
    if (!group) return;
    const options = [...group.querySelectorAll('[data-lang]')];
    const nextIndex = (options.indexOf(button) + (event.key === 'ArrowRight' ? 1 : -1) + options.length) % options.length;
    event.preventDefault();
    options[nextIndex].focus();
    setLanguage(options[nextIndex].dataset.lang);
  });
}

if (import.meta.env.DEV) {
  const translatedValues = new Set(Object.values(filText).map(normalize));
  const properNoun = /^(ConnectChurch|BetterGo Marinduque|Marinduque|Boac|Mogpog|Gasan|Buenavista|Torrijos|Santa Cruz|EN|FIL|Mobile|Footer)$/;
  window.__connectChurchI18n = {
    audit() {
      const missing = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node = walker.nextNode();
      while (node) {
        const text = normalize(node.nodeValue || '');
        if (
          text &&
          /[A-Za-z]{3}/.test(text) &&
          !translatedValues.has(text) &&
          !properNoun.test(text)
        ) {
          const parent = node.parentElement;
          if (parent && !parent.closest('script, style, [data-no-i18n], .brand-name, .brand-mark')) {
            missing.push(text);
          }
        }
        node = walker.nextNode();
      }
      return [...new Set(missing)];
    },
    getLanguage,
    setLanguage: (language) => setLanguage(language, { animate: false }),
    refreshLanguage,
  };
}
