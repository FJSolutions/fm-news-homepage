import {defineConfig} from 'astro/config';
import preact from '@astrojs/preact';
import browserslist from "browserslist";
import {browserslistToTargets} from "lightningcss";

export default defineConfig({
   integrations: [preact()],
   vite: {
      css: {
         transformer: 'lightningcss',
         lightningcss: {
            targets: browserslistToTargets(browserslist('defaults')),
            cssModules: true,
         },
      },
      build: {
         cssMinify: 'lightningcss',
      },
   },
});