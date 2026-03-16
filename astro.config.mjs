import {defineConfig} from 'astro/config';
import browserslist from "browserslist";
import {browserslistToTargets} from "lightningcss";

export default defineConfig({
   vite: {
      css: {
         transformer: 'lightningcss',
         lightningcss: {
            cssModules: true,
            drafts: {
               customMedia: true, // Enable custom media queries
            },
            targets: browserslistToTargets(browserslist('defaults')),
         },
      },
      build: {
         cssMinify: 'lightningcss',
      },
   },
});
