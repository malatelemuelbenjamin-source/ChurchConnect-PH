import { defineConfig } from 'vite';

// Relative base keeps the production build working on any static host,
// including subfolder deployments such as project pages.
export default defineConfig({
  base: './',
});
