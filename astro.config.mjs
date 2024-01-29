import { defineConfig } from "astro/config"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import icon from "astro-icon"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), tailwind(), icon(), mdx()],
  site: "https://gocongress.unitymath.io",
  base: "/",
  vite: {
    ssr: {
      noExternal: ["swiper"],
    },
  },
})
