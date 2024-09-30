// latte / frappe / macchiato / mocha
const palette = macchiato;

const default_config = {
  crypto: {
    coin: 'ETH',
    currency: 'EUR',
    refreshIn: 10
  },
  overrideStorage: true,
  temperature: {
    location: "Pineto",
    scale: "C",
  },
  clock: {
    format: "d/N/Y - h:i:s",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "news",
          links: [
            {
              name: "manifesto",
              url: "https://ilmanifesto.it/",
              icon: "news",
              icon_color: palette.red,
            },
            {
              name: 'guardian',
              url: 'https://theguardian.com/europe/',
              icon: 'brand-guardian',
              icon_color: palette.blue,
            },
            {
              name: 'repubblica',
              url: 'https://repubblica.it/',
              icon: 'book',
              icon_color: palette.sapphire,
            },
            {
              name: 'gt',
              url: 'https://globaltimes.cn/',
              icon: 'affiliate',
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: 'mail',
              url: 'https://mail.proton.me/u/0/inbox/',
              icon: 'mail',
              icon_color: palette.lavender,
            },
            {
              name: 'calendar',
              url: 'https://calendar.proton.me/u/0',
              icon: 'calendar-filled',
              icon_color: palette.peach,
            },
            {
              name: 'drive',
              url: 'https://drive.proton.me/u/0',
              icon: 'server-2',
              icon_color: palette.red,
            },
            {
              name: "outlook",
              url: "https://outlook.office.com/mail/",
              icon: "mail-opened",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: 'scientific american',
              url: 'https://scientificamerican.com/',
              icon: 'license',
              icon_color: palette.sapphire,

            },
            {
              name: 'quanta magazine',
              url: 'https://quantamagazine.org/',
              icon: 'atom',
              icon_color: palette.mauve,
            },
            {
              name: 'le scienze',
              url: 'https://lescienze.it/',
              icon: 'test-pipe',
              icon_color: palette.red,
            },
            {
              name: 'table',
              url: 'https://tavolaperiodica.zanichelli.it/en',
              icon: 'flask',
              icon_color: palette.blue,
            },
            {
              name: 'metalitalia',
              url: 'https://metalitalia.com/',
              icon: 'meteor',
              icon_color: palette.green,
            },
            {
              name: 'metallum',
              url: 'https://metal-archives.com/',
              icon: 'radioactive',
              icon_color: palette.peach,
            },
          ]
        },
      ],
    },
    {
      name: 'study',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'unimi',
          links: [
            {
              url: 'https://unimia.unimi.it/',
              icon: 'notebook',
              icon_color: palette.lavender,
              name: 'unimia',
            },
            {
              url: 'https://ariel.unimi.it/',
              icon: 'school',
              icon_color: palette.green,
              name: 'ariel',
            },
            {
              url: 'https://minerva.unimi.it/',
              icon: 'book',
              icon_color: palette.peach,
              name: 'minerva',
            },
            {
              url: 'https://easystaff.divsi.unimi.it/PortaleStudenti/',
              icon: 'list search',
              icon_color: palette.mauve,
              name: 'agenda',
            },
            {
              url: 'https://outlook.office.com/mail/',
              icon: 'mail',
              icon_color: palette.blue,
              name: 'mail',
            },
          ]
        },
        {
          name: 'corsi',
          links: [
            {
              name: '/quantistica/',
              url: 'https://pcforte.mi.infn.it/mq/index.html',
              icon: 'brand-elastic',
              icon_color: palette.green,
            },
            {
              name: '/relatività/',
              url: 'https://myariel.unimi.it/course/view.php?id=5082',
              icon: 'diabolo',
              icon_color: palette.red,
            },
            {
              name: '/nucleare/',
              url: 'https://www0.mi.infn.it/~sleoni/Istituzioni-FISNUC.html',
              icon: 'radioactive',
              icon_color: palette.peach,
            },
            {
              name: '/geo & gruppi/',
              url: 'https://drive.google.com/drive/folders/1ZsMwLztSQsZEu7GBfX8Xo9ZHXpbviECY',
              icon: 'hexagon-3d',
              icon_color: palette.blue,
            },
            {
              name: '/astrofisica/',
              url: '',
              icon: 'north-star',
              icon_color: palette.yellow,
            },
            {
              name: '/struttura della materia/',
              url: 'https://myariel.unimi.it/course/view.php?id=3415',
              icon: 'atom',
              icon_color: palette.mauve,
            },
            {
              name: '/chimica/',
              url: '',
              icon: 'test-pipe',
              icon_color: palette.lavender,
            },
          ]
        },
        {
          name: 'journals',
          links: [
            {
              name: 'arXiv',
              url: 'https://arxiv.org',
              icon: 'vector-bezier-arc',
              icon_color: palette.lavender,
            },
            {
              name: 'nature',
              url: 'https://www-nature-com.pros1.lib.unimi.it/',
              icon: 'whirl',
              icon_color: palette.green,
            },
            {
              name: 'nat astron',
              url: 'https://www-nature-com.pros1.lib.unimi.it/natastron/',
              icon: 'planet',
              icon_color: palette.peach,
            },
            {
              name: 'science',
              url: 'https://www-science-org.pros1.lib.unimi.it/loi/science/',
              icon: 'brand-codepen',
              icon_color: palette.red,
            },
            {
              name: 'astro journal',
              url: 'https://iopscience-iop-org.pros1.lib.unimi.it/journal/0004-637X',
              icon: 'sparkles',
              icon_color: palette.yellow,
            },
          ]
        },
      ]
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: palette.lavender,
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com/",
              icon: "brand-stackoverflow",
              icon_color: palette.peach,
            },
            {
              name: "advent of code",
              url: "https://adventofcode.com",
              icon: "prompt",
              icon_color: palette.green,
            },
            {
              name: 'wolfram',
              url: 'https://wolframalpha.com/',
              icon: 'frame',
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "wikis",
          links: [
            {
              name: "arch",
              url: "https://wiki.archlinux.org",
              icon: "hierarchy-3",
              icon_color: palette.blue,
            },
            {
              name: "cppreference",
              url: "https://en.cppreference.com",
              icon: "cpu",
              icon_color: palette.sapphire,
            },
            {
              name: 'mistral',
              url: 'https://chat.mistral.ai/chat',
              icon: 'hexagons',
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "chi ll",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "whatsapp",
              url: "https://web.whatsapp.com/",
              icon: "brand-whatsapp",
              icon_color: palette.green,
            },
            {
              name: "facebook",
              url: "https://facebook.com/",
              icon: "brand-facebook",
              icon_color: palette.blue,
            },
            {
              name: "reddit",
              url: "https://reddit.com",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
            {
              name: 'instagram',
              url: 'https://instagram.com/',
              icon: 'brand-instagram',
              icon_color: palette.mauve,
            },
            {
              name: 'threads',
              url: 'https://threads.net/',
              icon: 'brand-threads',
              icon_color: palette.lavender,
            },
          ],
        },
        {
          name: "yu-gi-oh",
          links: [
            {
              name: 'database',
              url: 'https://www.db.yugioh-card.com/yugiohdb/',
              icon: 'database',
              icon_color: palette.red,
            },
            {
              name: 'cardmarket',
              url: 'https://cardmarket.com/it/YuGiOh/',
              icon: 'bookmarks',
              icon_color: palette.green,
            },
            {
              name: 'duellingbook',
              url: 'https://duelingbook.com/',
              icon: 'cards',
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "video",
          links: [
            {
              name: "youtube",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "netflix",
              url: "https://netflix.com",
              icon: "brand-netflix",
              icon_color: palette.red,
            },
            {
              name: "twitch",
              url: "https://twitch.tv",
              icon: "brand-twitch",
              icon_color: palette.mauve,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
