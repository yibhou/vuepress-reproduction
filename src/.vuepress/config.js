
/**
 * 配置文件
 */

const path = require('path')

const resolve = file => path.join(__dirname, file)

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      // 站点标题
      title: 'test demo',
      // 站点描述
      description: 'test description'
    }
  },
  // 永久链接
  permalink: '/:regular',
  // 主题
  // theme: '@vuepress/default',
  themeConfig: {

  },

  // 基础路径
  base: '/',
  // 编译目标路径
  dest: 'public',
  // devServer服务
  host: '0.0.0.0',
  // 端口
  port: '9090',
  // 额外监听文件
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ],

  // markdown配置
  markdown: {
    // 代码块是否显示行号
    lineNumbers: true,
    // 目录
    toc: {
      includeLevel: [1, 2, 3, 4],
      markerPattern: /^\[TOC\]/m
    },
    // 插件
    plugins: [
      'markdown-it-sup',
      'markdown-it-sub',
    ],
    extendMarkdown: md => {
      md
    //     .use(require('markdown-it-sup'))
    //     .use(require('markdown-it-sub'))
    }
  },
  // 插件
  plugins: [
    ['@vuepress/back-to-top', true],
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '',
      indexSuffix: '/',
      notFoundPath: '/404.html'
    }]
  ]
}
