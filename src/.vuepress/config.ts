import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },

  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/',
  temp: '.cache/.vp-temp',
  cache: '.cache/.vp-cache',

  head: [
    // meta
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "不如吃茶去" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
            "Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发",
      },
    ],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    // 添加百度统计
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?5dd2e8c97962d57b7b8fea1737c01743";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '不如吃茶去',
      description: '不如吃茶去 - 隔牖风惊竹，开窗雪满山',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Linux No',
      description: 'Linux No - Through the window, Snow Mountain',
    },
  },

  theme,
  // Enable it with pwa
  shouldPrefetch: false,
});
