import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/faustmann-wiki/__docusaurus/debug',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug', '46e'),
    exact: true
  },
  {
    path: '/faustmann-wiki/__docusaurus/debug/config',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug/config', '75c'),
    exact: true
  },
  {
    path: '/faustmann-wiki/__docusaurus/debug/content',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug/content', '2c9'),
    exact: true
  },
  {
    path: '/faustmann-wiki/__docusaurus/debug/globalData',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug/globalData', 'f07'),
    exact: true
  },
  {
    path: '/faustmann-wiki/__docusaurus/debug/metadata',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug/metadata', '858'),
    exact: true
  },
  {
    path: '/faustmann-wiki/__docusaurus/debug/registry',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug/registry', 'df9'),
    exact: true
  },
  {
    path: '/faustmann-wiki/__docusaurus/debug/routes',
    component: ComponentCreator('/faustmann-wiki/__docusaurus/debug/routes', '599'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog',
    component: ComponentCreator('/faustmann-wiki/blog', '9e9'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/archive',
    component: ComponentCreator('/faustmann-wiki/blog/archive', 'bd5'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/authors',
    component: ComponentCreator('/faustmann-wiki/blog/authors', 'c74'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/authors/sfaustmann',
    component: ComponentCreator('/faustmann-wiki/blog/authors/sfaustmann', '327'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/authors/tbartsch',
    component: ComponentCreator('/faustmann-wiki/blog/authors/tbartsch', '0ff'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/Mappei Profil in Findentity',
    component: ComponentCreator('/faustmann-wiki/blog/Mappei Profil in Findentity', '3cc'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags',
    component: ComponentCreator('/faustmann-wiki/blog/tags', '4fa'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags/findentity',
    component: ComponentCreator('/faustmann-wiki/blog/tags/findentity', 'e99'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags/mappei',
    component: ComponentCreator('/faustmann-wiki/blog/tags/mappei', 'fde'),
    exact: true
  },
  {
    path: '/faustmann-wiki/markdown-page',
    component: ComponentCreator('/faustmann-wiki/markdown-page', 'cc6'),
    exact: true
  },
  {
    path: '/faustmann-wiki/search',
    component: ComponentCreator('/faustmann-wiki/search', '758'),
    exact: true
  },
  {
    path: '/faustmann-wiki/docs',
    component: ComponentCreator('/faustmann-wiki/docs', 'ad5'),
    routes: [
      {
        path: '/faustmann-wiki/docs',
        component: ComponentCreator('/faustmann-wiki/docs', '9b7'),
        routes: [
          {
            path: '/faustmann-wiki/docs',
            component: ComponentCreator('/faustmann-wiki/docs', 'bc0'),
            routes: [
              {
                path: '/faustmann-wiki/docs/ecomofa2rent/Mikro',
                component: ComponentCreator('/faustmann-wiki/docs/ecomofa2rent/Mikro', '15a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/einführung',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/einführung', 'a67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Findentity Grundlagen/Findentity Module',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Findentity Grundlagen/Findentity Module', 'a9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Findentity Profile/Branchenübersicht',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Findentity Profile/Branchenübersicht', '4b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Findentity Profile/Gutachter',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Findentity Profile/Gutachter', 'a19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Findentity Profile/Kontakte',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Findentity Profile/Kontakte', '7c5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Findentity Profile/Mappei DMS',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Findentity Profile/Mappei DMS', '669'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Findentity Profile/Projektmanagement',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Findentity Profile/Projektmanagement', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/intro',
                component: ComponentCreator('/faustmann-wiki/docs/intro', 'b6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/markdown',
                component: ComponentCreator('/faustmann-wiki/docs/markdown', 'e77'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/faustmann-wiki/',
    component: ComponentCreator('/faustmann-wiki/', 'f7f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
