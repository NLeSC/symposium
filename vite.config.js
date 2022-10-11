import { sveltekit } from "@sveltejs/kit/vite";
import svg from "@poppanator/sveltekit-svg";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), svg({})],
  server: {
    watch: {
      ignored: ["!content/**"],
    },
  },
};

export default config;
