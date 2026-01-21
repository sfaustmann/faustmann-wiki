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
    component: ComponentCreator('/faustmann-wiki/docs', '1ef'),
    routes: [
      {
        path: '/faustmann-wiki/docs',
        component: ComponentCreator('/faustmann-wiki/docs', 'fa0'),
        routes: [
          {
            path: '/faustmann-wiki/docs',
            component: ComponentCreator('/faustmann-wiki/docs', '8f9'),
            routes: [
              {
                path: '/faustmann-wiki/docs/Findentity Büromanagement/Findentity Office/DMS',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity Büromanagement/Findentity Office/DMS', '03c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity Büromanagement/intro',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity Büromanagement/intro', '8ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity Büromanagement/transformed_doc/Kurzanleitung zur Bedienung von DMO DPA DLA',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity Büromanagement/transformed_doc/Kurzanleitung zur Bedienung von DMO DPA DLA', '470'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/intro/',
                component: ComponentCreator('/faustmann-wiki/docs/intro/', 'f42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/intro/markdown',
                component: ComponentCreator('/faustmann-wiki/docs/intro/markdown', 'cb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Test/Anleitung für cloudbasierte Nuance-Spracherkennung',
                component: ComponentCreator('/faustmann-wiki/docs/Test/Anleitung für cloudbasierte Nuance-Spracherkennung', '3b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Test/intro2',
                component: ComponentCreator('/faustmann-wiki/docs/Test/intro2', '6de'),
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
