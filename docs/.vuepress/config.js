const sidebar67 = require('../api/0.6.7/sidebar')
const sidebar73 = require('../api/0.7.3/sidebar')
const sidebar81 = require('../api/0.8.1/sidebar')
const sidebar98 = require('../api/0.9.8/sidebar')
const sidebar107 = require('../api/0.10.7/sidebar')
const glob = require('glob')

// function for loading all MD files in a directory
const getChildren = function(parent_path, dir) {
  return glob
    .sync(parent_path + '/' + dir + '/**/*.md')
    .map(path => {
      // remove "parent_path" and ".md"
      path = path.slice(parent_path.length + 1, -3)
      // remove README
      if (path.endsWith('README')) {
        path = path.slice(0, -6)
      }
      return path
    })
    .sort()
}

module.exports = {
  title: 'Prefect Legacy API Documentation',
  description: "Don't Panic.",
  head: [
    'link',
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-115585378-1'
      }
    ],
    ["vuepress-plugin-code-copy", true],
    'vuepress-plugin-element-tabs',
    [
    'vuepress-plugin-selected-text-popup',
      {
        github: true,
        githubOwner: 'prefecthq',
        githubRepo: 'prefect',
        githubIssueTitle: 'Docs Issue',
        githubTooltipContent: 'Problem with the docs? Create a GitHub Issue!',
        githubLabels: ['docs'],
        twitter: true
      }
    ]
  ],
  themeConfig: {
    // algolia: {
    //   apiKey: '553c75634e1d4f09c84f7a513f9cc4f9',
    //   indexName: 'prefect'
    // },
    repo: 'PrefectHQ/prefect',
    docsDir: 'docs',
    editLinks: true,
    // repoLabel: 'GitHub',
    logo: '/assets/logomark-color.svg',
    nav: [
      {
        text: 'API Reference',
        items: [
          { text: '0.10.7', link: '/api/0.10.7/' },
          { text: '0.9.8', link: '/api/0.9.8/' },
          { text: '0.8.1', link: '/api/0.8.1/' },
          { text: '0.7.3', link: '/api/0.7.3/' },
          { text: '0.6.7', link: '/api/0.6.7/' },
        ]
      }
    ],
    sidebar: {
      '/api/0.6.7/': sidebar67.sidebar,
      '/api/0.7.3/': sidebar73.sidebar,
      '/api/0.8.1/': sidebar81.sidebar,
      '/api/0.9.8/': sidebar98.sidebar,
      '/api/0.10.7/': sidebar107.sidebar,
    }
  },
  extendMarkdown(md) {
    md.use(require('markdown-it-attrs'))
    md.use(require('markdown-it-checkbox'))
  }
}
