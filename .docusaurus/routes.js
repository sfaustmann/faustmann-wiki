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
    component: ComponentCreator('/faustmann-wiki/docs', '6e6'),
    routes: [
      {
        path: '/faustmann-wiki/docs',
        component: ComponentCreator('/faustmann-wiki/docs', 'c57'),
        routes: [
          {
            path: '/faustmann-wiki/docs',
            component: ComponentCreator('/faustmann-wiki/docs', '77b'),
            routes: [
              {
                path: '/faustmann-wiki/docs/Allgemeine Hilfen/markdown',
                component: ComponentCreator('/faustmann-wiki/docs/Allgemeine Hilfen/markdown', '796'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/200+ beste Befehle für Spracherkennung',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/200+ beste Befehle für Spracherkennung', 'fb2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/Anleitung für cloudbasierte Nuance-Spracherkennung',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/Anleitung für cloudbasierte Nuance-Spracherkennung', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/Dragon-Browser-Erweiterungen',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/Dragon-Browser-Erweiterungen', '7fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/intro',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/intro', '686'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/Kurzanleitung zur Bedienung von DMO DPA DLA',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/Kurzanleitung zur Bedienung von DMO DPA DLA', '010'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/Profi-Tipps für besseres Diktieren mit Spracherkennung',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/Profi-Tipps für besseres Diktieren mit Spracherkennung', 'ec7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Dragon Schulung/Web-Befehle für Dragon-Browser-Erweiterungen',
                component: ComponentCreator('/faustmann-wiki/docs/Dragon Schulung/Web-Befehle für Dragon-Browser-Erweiterungen', '385'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Releasenotes/Programmänderungen Findentity 2025',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Releasenotes/Programmänderungen Findentity 2025', '3d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/Findentity/Releasenotes/Programmänderungen Findentity 2026',
                component: ComponentCreator('/faustmann-wiki/docs/Findentity/Releasenotes/Programmänderungen Findentity 2026', 'b37'),
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
