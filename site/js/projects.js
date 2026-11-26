// Данные и рендер карточек проектов.
// Чтобы добавить проект: допишите запись в PROJECTS (порядок в массиве = порядок на странице),
// положите картинку в images/. Новые технологии — в TECHNOLOGIES.

const TECHNOLOGIES = {
  React: { name: 'React', image: 'images/react.svg', url: 'https://ru.reactjs.org/' },
  NextJs: { name: 'NextJs', image: 'images/next-js.svg', url: 'https://nextjs.org/' },
  NestJs: { name: 'NestJs', image: 'images/nestjs.svg', url: 'https://nestjs.com/' },
  Mysql: { name: 'Mysql', image: 'images/mysql-logo.svg', url: 'https://www.mysql.com/' },
  Redux: { name: 'Redux', image: 'images/redux.webp', url: 'https://redux.js.org/' },
  Jest: { name: 'Jest', image: 'images/jest.png', url: 'https://jestjs.io/ru/' },
  Storybook: { name: 'Storybook', image: 'images/storybook.png', url: 'https://storybook.js.org/' },
  ReactNative: { name: 'React Native', image: 'images/react-native.png', url: 'https://reactnative.dev/' },
  ReactNavigation: { name: 'React Navigation', image: 'images/react-navigation.svg', url: 'https://reactnavigation.org/' },
  ReactNativeElements: { name: 'React Native Elements', image: 'images/react-native-elements.png', url: 'https://reactnativeelements.com/' },
  ReactNativeSkia: { name: 'React Native Skia', image: 'images/react-native-skia.png', url: 'https://shopify.github.io/react-native-skia/' },
  HTML5Canvas: { name: 'HTML5 Canvas', image: 'images/html5-canvas.png', url: 'https://www.w3schools.com/html/html5_canvas.asp' },
};

const LANGUAGES = {
  JavaScript: { name: 'JavaScript', image: 'images/JavaScript-logo.png', url: 'https://learn.javascript.ru/' },
  TypeScript: { name: 'TypeScript', image: 'images/typescript.webp', url: 'https://www.typescriptlang.org/' },
};

const STORE_BADGES = {
  appStore: { image: 'images/Download_on_the_App_Store_Badge.svg', alt: 'Download on the App Store' },
  googlePlay: { image: 'images/Google_Play_Store_badge_EN.svg', alt: 'Get it on Google Play' },
};

const PROJECTS = [
  {
    title: 'Dots and Boxes. Dice rolling',
    description: 'Dice, Dots & Boxes — a modern take on the classic "Dots and Boxes" game, featuring a unique dice mode and an advanced AI opponent!',
    languages: ['TypeScript'],
    technologies: ['ReactNative', 'ReactNavigation', 'ReactNativeSkia', 'Redux'],
    mainImage: 'images/dbd512.png',
    stores: {
      appStore: 'https://apps.apple.com/us/app/dots-and-boxes-dice-rolling/id6753718457',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.gosuapps.dotsandboxesdice',
    },
    url: 'https://dotsandboxesdice.levkovich.dev/',
  },
  {
    title: 'Ultimate Random Generator',
    description: 'iOS and Android application written in React Native. Get random values for different categories',
    languages: ['TypeScript'],
    technologies: ['ReactNative', 'ReactNavigation', 'ReactNativeElements', 'Jest'],
    mainImage: 'images/ultimateRandomGenerator.webp',
    stores: {
      appStore: 'https://apps.apple.com/us/app/ultimate-random-generator/id6757863299',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.allrandom&hl=en_IN&gl=US',
    },
    url: 'https://ultimaterandomgenerator.levkovich.dev/',
  },
  {
    title: 'Fly box hunting',
    description: 'HTML5 canvas game.',
    languages: ['JavaScript'],
    technologies: ['HTML5Canvas'],
    mainImage: 'images/fly-box.png',
    url: 'https://fly-box-game.levkovich.dev/',
  },
  {
    title: 'Amateur Football Leagues of Yerevan',
    description: 'Yefl.am - Source of Information on Amateur Football Leagues in Yerevan. Detailed match and round reports will help understand what transpired on the field and in which areas need to work on your game. Latest news about amateur football in Yerevan',
    languages: ['TypeScript'],
    technologies: ['NextJs', 'NestJs', 'Mysql'],
    mainImage: 'images/yefl_logo_big.png',
    url: 'https://www.yefl.am/',
  },
  {
    title: 'Reminder',
    description: 'Chrome extension for easily saving websites and getting reminders to review them. Never forget to revisit an important website again. Manage your to-read list of websites, prioritize links, and receive timely notifications right in your browser. Quick save, set reminders, and organize links with customizable priority levels.',
    languages: ['TypeScript'],
    technologies: ['React'],
    mainImage: 'images/reminder.png',
    url: 'https://chromewebstore.google.com/detail/reminder/ffgdcddbibcjjdhbmdbclhagihkdhjdi',
  },
];

// Маленький хелпер для создания DOM-элементов: el('a', { href: '...' }, [child, 'text'])
function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (value === undefined || value === null || value === false) continue;
    if (key === 'class') node.className = value;
    else node.setAttribute(key, value);
  }
  for (const child of [].concat(children)) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child);
  }
  return node;
}

const externalLink = (href, attrs, children) =>
  el('a', { href, target: '_blank', rel: 'noreferrer', ...attrs }, children);

function skillBlock(label, keys, dict) {
  const skills = keys.map((key) => dict[key]).filter(Boolean);
  return el('div', { class: 'project__skills', 'data-label': label }, [
    el('ul', {}, skills.map((s) => el('li', {}, s.name))),
    el('div', { class: 'project__icons' }, skills.map((s) =>
      externalLink(s.url, { title: s.name }, el('img', { src: s.image, alt: s.name, loading: 'lazy' })),
    )),
  ]);
}

function renderProject(p) {
  const badges = p.stores
    ? el('div', { class: 'project__badges' }, Object.entries(p.stores).map(([store, href]) =>
        externalLink(href, {}, el('img', {
          src: STORE_BADGES[store].image, alt: STORE_BADGES[store].alt, width: 135, height: 40, loading: 'lazy',
        })),
      ))
    : null;

  return el('article', { class: 'project' }, [
    el('div', { class: 'project__imageContainer' }, [
      el('div', { class: 'project__image' }, el('img', { src: p.mainImage, alt: p.title, loading: 'lazy' })),
    ]),
    el('div', { class: 'project__description' }, [
      el('div', {}, [
        el('h3', { class: 'project__title' }, p.title),
        el('p', { class: 'project__text' }, p.description),
      ]),
      el('div', {}, [
        skillBlock('Languages', p.languages || [], LANGUAGES),
        skillBlock('Technologies', p.technologies || [], TECHNOLOGIES),
        el('div', { class: 'project__url' }, [
          badges,
          p.url ? externalLink(p.url, { id: p.title.replace(/\s/g, '') }, p.url) : null,
        ]),
        p.underConstruction ? el('div', { class: 'project__underConstruction' }, 'In developing') : null,
      ]),
    ]),
  ]);
}

document.getElementById('projects-list').append(...PROJECTS.map(renderProject));
