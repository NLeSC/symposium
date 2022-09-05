import path from "path";
import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

import svg from "@poppanator/sveltekit-svg";

/** @type {import('@sveltejs/kit').Config} */
export default {
  extensions: [".svelte", ".svelte.md", ".md"],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess(),
    mdsvex({
      extensions: [".svelte.md", ".md"],
      // rehypePlugins: rehypePlugins,
      layout: {
        _: "src/routes/_markdown.svelte",
      },
    }),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({
      // fallback: "200.html",
    }),
    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },

    alias: {
      // these are the aliases and paths to them
      $api: path.resolve("./src/api"),
      $lib: path.resolve("./src/lib"),
      $components: path.resolve("./src/lib/components"),
      $assets: path.resolve("./src/assets"),
      $content: path.resolve("./src/content"),
    },
  },
};
