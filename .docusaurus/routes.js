import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/faustmann-wiki/blog',
    component: ComponentCreator('/faustmann-wiki/blog', 'dd3'),
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
    path: '/faustmann-wiki/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/faustmann-wiki/blog/authors/all-sebastien-lorber-articles', 'e5d'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/authors/yangshun',
    component: ComponentCreator('/faustmann-wiki/blog/authors/yangshun', '4e4'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/first-blog-post',
    component: ComponentCreator('/faustmann-wiki/blog/first-blog-post', '857'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/long-blog-post',
    component: ComponentCreator('/faustmann-wiki/blog/long-blog-post', '72c'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/mdx-blog-post',
    component: ComponentCreator('/faustmann-wiki/blog/mdx-blog-post', '52c'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags',
    component: ComponentCreator('/faustmann-wiki/blog/tags', '4fa'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags/docusaurus',
    component: ComponentCreator('/faustmann-wiki/blog/tags/docusaurus', '09a'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags/facebook',
    component: ComponentCreator('/faustmann-wiki/blog/tags/facebook', '36a'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags/hello',
    component: ComponentCreator('/faustmann-wiki/blog/tags/hello', 'de3'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/tags/hola',
    component: ComponentCreator('/faustmann-wiki/blog/tags/hola', '3fe'),
    exact: true
  },
  {
    path: '/faustmann-wiki/blog/welcome',
    component: ComponentCreator('/faustmann-wiki/blog/welcome', '266'),
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
    component: ComponentCreator('/faustmann-wiki/docs', '9ed'),
    routes: [
      {
        path: '/faustmann-wiki/docs',
        component: ComponentCreator('/faustmann-wiki/docs', '87f'),
        routes: [
          {
            path: '/faustmann-wiki/docs',
            component: ComponentCreator('/faustmann-wiki/docs', '2fc'),
            routes: [
              {
                path: '/faustmann-wiki/docs/category/tutorial---basics',
                component: ComponentCreator('/faustmann-wiki/docs/category/tutorial---basics', '7f5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/category/tutorial---extras',
                component: ComponentCreator('/faustmann-wiki/docs/category/tutorial---extras', '755'),
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
                path: '/faustmann-wiki/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-basics/congratulations', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-basics/create-a-blog-post', '827'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-basics/create-a-document', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-basics/create-a-page', 'a9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-basics/deploy-your-site', 'ac8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-basics/markdown-features', 'd36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-extras/manage-docs-versions', 'cd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/faustmann-wiki/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/faustmann-wiki/docs/tutorial-extras/translate-your-site', '62a'),
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
