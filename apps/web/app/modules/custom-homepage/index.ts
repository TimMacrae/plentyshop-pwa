import { defineNuxtModule, createResolver, addImports, extendPages } from '@nuxt/kit';

export default defineNuxtModule({
  meta: {
    name: 'custom-homepage',
    configKey: 'customHomepage',
  },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

    // Register components directory
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: resolve('./components'),
        prefix: 'Custom',
        pathPrefix: false,
      });
    });

    // Register composables
    nuxt.hook('imports:dirs', (dirs) => {
      dirs.push(resolve('./composables'));
    });

    // Register composables
    addImports({
      name: 'useCustomHomepage',
      as: 'useCustomHomepage',
      from: resolve('./composables/useCustomHomepage/useCustomHomepage'),
    });

    // Override homepage - this will take precedence over core
    nuxt.hook('pages:extend', (pages) => {
      const homepageIndex = pages.findIndex((page) => page.path === '/');
      if (homepageIndex !== -1) {
        pages.splice(homepageIndex, 1);
      }

      // Add custom homepage
      pages.push({
        name: 'index',
        path: '/',
        file: resolve('./pages/index.vue'),
      });
    });

    // Add additional custom routes
    extendPages((pages) => {
      pages.push({
        name: 'producktwelt',
        path: '/producktwelt',
        file: resolve('./pages/producktwelt/index.vue'),
      });
      pages.push({
        name: 'producktwelt-himmi',
        path: '/producktwelt/himmi',
        file: resolve('./pages/producktwelt/himmi.vue'),
      });
      pages.push({
        name: 'producktwelt-korn',
        path: '/producktwelt/korn',
        file: resolve('./pages/producktwelt/korn.vue'),
      });
      pages.push({
        name: 'producktwelt-krauti',
        path: '/producktwelt/krauti',
        file: resolve('./pages/producktwelt/krauti.vue'),
      });
      pages.push({
        name: 'producktwelt-splitti',
        path: '/producktwelt/splitti',
        file: resolve('./pages/producktwelt/splitti.vue'),
      });
    });
  },
});
