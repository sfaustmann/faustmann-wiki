import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/faustmann-wiki/docs', 'c93'),
    routes: [
      {
        path: '/faustmann-wiki/docs',
        component: ComponentCreator('/faustmann-wiki/docs', 'b15'),
        routes: [
          {
            path: '/faustmann-wiki/docs',
            component: ComponentCreator('/faustmann-wiki/docs', '6e0'),
            routes: [
              {
                path: '/faustmann-wiki/docs/ecomofa2rent/Mikro',
                component: ComponentCreator('/faustmann-wiki/docs/ecomofa2rent/Mikro', '15a'),
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
                path: '/faustmann-wiki/docs/Findentity/intro',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/intro', '5e5'),
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
