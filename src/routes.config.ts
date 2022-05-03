import Dashboard from './views/Dashboard';
import Posts from './views/Posts';
import Settings from './views/Settings';
import Global from './views/Global';

import Config from './routes.model';

export default {
  routes: [
    { path: '/', view: Dashboard },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings },
  ],

  global: {
    components: [Global],
  },

  head: {
    title: 'document',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Hitta din borttappade discgolf-disc' },
      { hid: 'keywords', name: 'keywords', content: 'discgolf, fiskadisc, disc, frisbee, ultimate, social' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' }],
  },
};

/* export default new Config({
  routes: [
    { path: '/', view: Dashboard, index: true },
    { path: '/posts', view: Posts },
    { path: '/settings', view: Settings },
  ],

  global: {
    components: [Global],
  },

  head: {
    title: 'document',
    meta: [
      { charset: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Test site for framework' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'testing, framework, javascript, frontend, SPA, Single Page Application',
      },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' }],
  },
});
 */
