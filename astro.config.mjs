// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://dynamic-bonbon-3c3d44.netlify.app/",
  integrations: [preact()]
});