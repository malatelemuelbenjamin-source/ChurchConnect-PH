export function LanguageSwitcher() {
  return `<div class="lang-switch" role="group" aria-label="Language" data-lang-switch data-active="en">
    <span class="lang-thumb" aria-hidden="true"></span>
    <button type="button" class="lang-option is-active" data-lang="en" aria-pressed="true" lang="en" aria-label="English">EN</button>
    <button type="button" class="lang-option" data-lang="fil" aria-pressed="false" lang="fil" aria-label="Filipino">FIL</button>
  </div>`;
}
