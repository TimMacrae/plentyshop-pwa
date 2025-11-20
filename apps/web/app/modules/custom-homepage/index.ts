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
        name: 'produkte',
        path: '/produkte',
        file: resolve('./pages/produkte/index.vue'),
      });
      pages.push({
        name: 'produkte-himmi',
        path: '/produkte/himmi',
        file: resolve('./pages/produkte/himmi.vue'),
      });
      pages.push({
        name: 'produkte-korn',
        path: '/produkte/korn',
        file: resolve('./pages/produkte/korn.vue'),
      });
      pages.push({
        name: 'produkte-krauti',
        path: '/produkte/krauti',
        file: resolve('./pages/produkte/krauti.vue'),
      });
      pages.push({
        name: 'produkte-splitti',
        path: '/produkte/splitti',
        file: resolve('./pages/produkte/splitti.vue'),
      });
      pages.push({
        name: 'ueber-uns',
        path: '/ueber-uns',
        file: resolve('./pages/ueber-uns.vue'),
      });
      pages.push({
        name: 'kontakt',
        path: '/kontakt',
        file: resolve('./pages/kontakt.vue'),
      });
      pages.push({
        name: 'rezepte',
        path: '/rezepte',
        file: resolve('./pages/rezepte.vue'),
      });
    });
  },
});
