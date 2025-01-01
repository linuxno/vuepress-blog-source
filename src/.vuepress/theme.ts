import { hopeTheme } from 'vuepress-theme-hope';
import { enNavbar, zhNavbar } from './navbar/index.js';
import { enSidebar, zhSidebar } from './sidebar/index.js';
import { getDirname, path } from 'vuepress/utils';

import AppPackage from '../../package.json';
import manifest_json from './public/pwa/manifest.json';

const manifestJson: any = manifest_json;

const __dirname = getDirname(import.meta.url);

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
  <img src="//file.mo7.cc/static/img/beian.png">
  陕ICP备2022011574号
</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a class="footer-about" href="/about/website.html">关于本站</a>
`;

export default hopeTheme({
  hostname: 'https://arch.me',
  author: {
    name: '不如吃茶去',
    url: 'https://arch.me',
    email: 'admin@arch.me',
  },
  lastUpdated: true,
  darkmode: 'toggle',
  // editLink: true,
  contributors: true,
  fullscreen: true,
  license: AppPackage.license,
  navbarAutoHide: 'always',
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },
  sidebarSorter: ['order', 'readme', 'title', 'filename'],

  iconAssets: [
    '//at.alicdn.com/t/c/font_4775713_0is6ey3ewjvl.css',
    '//at.alicdn.com/t/c/font_3855310_x57nhnfssr7.css',
    '//at.alicdn.com/t/c/font_2922463_kweia6fbo9.css'
  ],
  logo: '/pwa/144.png',
  docsDir: 'src',
  blog: {
    name: '不如吃茶去',
    avatar: '/avatar.gif',
    description: '隔牖风惊竹，开窗雪满山',
    intro: 'https://arch.me/about/me.html',
    medias: {
      Email: 'mailto:admin@arch.me',
      GitHub: 'https://github.com/linuxno',
      Rss: '/atom.xml',
    },
  },

  footer: footerICP_HTML,
  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: '不如吃茶去',
        description: '隔牖风惊竹，开窗雪满山',
        intro: '/about/me.html',
        timeline: '隔牖风惊竹，开窗雪满山',
      },
    },

    '/en/': {
      navbar: enNavbar,
      sidebar: enSidebar,
      blog: {
        name: 'Linux No',
        description: 'Through the window, Snow Mountain.',
        intro: '/en/intro.html',
        timeline: 'Through the window, Snow Mountain.',
      },
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  markdown: {
    include: {
      resolvePath: (file) => {
        if (file.startsWith('@src')) {
          return file.replace('@src', path.resolve(__dirname, '..'));
        }
        return file;
      },
    },
    stylize: [
      {
        matcher: 'Recommended',
        replacer: ({ tag }) => {
          if (tag === 'em')
            return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: 'Recommended',
            };
        },
      },
    ],
    align: true,
    attrs: true,
    alert: true,
    tabs: true,
    component: true,
    spoiler: true,
    demo: true,
    echarts: true,
    imgMark: true,
    sub: true,
    sup: true,
    tasklist: true,
    vPre: true,
    breaks: true,
    linkify: true,
    footnote: true,
    mark: true,
    obsidianImgSize: true,
  },

  plugins: {
    blog: true,
    photoSwipe: false, // 这个插件难用的 一 B

    comment: {
      provider: 'Waline',
      serverURL: 'https://talk.mo7.cc',
      copyright: false,
      reaction: true,
    },

    components: {
      components: ['Badge', 'VPCard', 'BiliBili', 'PDF'],
    },

    copyright: false,

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/pwa/72.png',
      icon: '/pwa/512.png',
    },
    slimsearch: {
      indexContent: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      themeColor: '#af7ac5',
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      manifest: manifestJson,
    },
  },
});
