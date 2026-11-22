import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import site from "./src/config/site.json";

export default defineConfig({
  site: site.domain,
  trailingSlash: "never",
  integrations: [sitemap({ filter: (page) => !site.noindex && !page.includes("/404") })],
});
