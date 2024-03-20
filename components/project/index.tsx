import React, {memo} from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import Link from "next/link";

interface ProjectProps {
  type: Projects
}

type Projects =
  | "wow"
  | "mine"
  | "allRandom"
  | "flyBoxHunting"
  | "paint"
  | "yefl"

type Technologies =
  'React'
  | "NextJs"
  | 'Jest'
  | 'NodeJs'
  | 'MongoDB'
  | 'BlizzardAPI'
  | 'Storybook'
  | 'Redux'
  | 'ReduxSaga'
  | 'WebSocket'
  | 'ReactNative'
  | 'ReactNavigation'
  | 'ReactNativeElements'
  | 'HTML5Canvas'
  | 'RxJs'
  | 'NestJs'
  | 'Mysql'

type Languages = "JavaScript" | 'TypeScript'

interface ProjectParams {
  title: string
  description: string
  technologies: Array<Technologies>
  languages: Array<Languages>
  mainImage: string
  url: string
  underConstruction?: boolean
}

interface Skill {
  image: string,
  name: string
  url?: string
}

const TECHNOLOGIES: Record<Technologies, Skill> = {
  NextJs: {
    image: "images/next-js.svg",
    url: 'https://nextjs.org/',
    name: "NextJs",
  },
  BlizzardAPI: {
    image: 'images/blizzard.png',
    url: 'https://develop.battle.net/',
    name: "Blizzard API"
  },
  React: {
    image: 'images/react.webp',
    url: 'https://ru.reactjs.org/',
    name: "React"
  },
  Redux: {
    image: 'images/redux.webp',
    url: 'https://redux.js.org/',
    name: 'Redux'
  },
  ReduxSaga: {
    image: 'images/Redux-Saga-Logo.png',
    url: 'https://redux-saga.js.org/',
    name: 'Redux-Saga'
  },
  Jest: {
    image: 'images/jest.png',
    url: 'https://jestjs.io/ru/',
    name: 'Jest'
  },
  MongoDB: {
    image: 'images/mongo.svg',
    url: 'https://www.mongodb.com/',
    name: 'MongoDB'
  },
  NodeJs: {
    image: 'images/node.webp',
    url: 'https://nodejs.org/',
    name: 'NodeJs'
  },
  Storybook: {
    image: "images/storybook.png",
    url: 'https://storybook.js.org/',
    name: 'Storybook'
  },
  WebSocket: {
    image: 'images/websocket.svg',
    url: 'https://web-creator.ru/technologies/webdev/websockets',
    name: 'WebSocket'
  },
  ReactNative: {
    image: 'images/react-native.png',
    url: 'https://reactnative.dev/',
    name: 'React Native'
  },
  ReactNavigation: {
    image: 'images/react-navigation.svg',
    url: 'https://reactnavigation.org/',
    name: 'React Navigation'
  },
  ReactNativeElements: {
    image: 'images/react-native-elements.png',
    url: 'https://reactnativeelements.com/',
    name: 'React Native Elements'
  },
  HTML5Canvas: {
    image: 'images/html5-canvas.png',
    url: 'https://www.w3schools.com/html/html5_canvas.asp',
    name: 'HTML5 Canvas'
  },
  RxJs: {
    image: 'images/rxjs.png',
    url: 'https://rxjs.dev/',
    name: 'RxJs'
  },
  NestJs: {
    image: 'images/nestjs.svg',
    url: 'https://nestjs.com/',
    name: 'NestJs'
  },
  Mysql: {
    image: 'images/mysql-logo.svg',
    url: 'https://www.mysql.com/',
    name: 'Mysql'
  }
}

const LANGUAGES: Record<Languages, Skill> = {
  JavaScript: {
    image: 'images/JavaScript-logo.png',
    url: 'https://learn.javascript.ru/',
    name: 'JavaScript'
  },
  TypeScript: {
    image: 'images/typescript.webp',
    url: 'https://www.typescriptlang.org/',
    name: ' TypeScript'
  }
}

const PROJECTS: Record<Projects, ProjectParams> = {
  wow: {
    title: "World of Warcraft data",
    description: "The site is dedicated to data on classes, races, etc. the legendary game World of Warcraft. All pages are static (NextJs + SSG). The data is pulled from its own server on which MongoDB is deployed, which contains the data received from the Blizzard API. The server is written in NodeJS + Express + MongoDB",
    languages: ['TypeScript'],
    technologies: ['NextJs', 'Jest', 'Storybook', 'NodeJs', 'MongoDB', 'BlizzardAPI'],
    mainImage: "images/logo-wow-small-round-sl.webp",
    url: 'https://wow.levkovich.dev',
    underConstruction: true
  },
  mine: {
    title: '"Minesweeper"',
    description: 'The classic game "Minesweeper". Data from the server comes via WebSocket. There are 4 levels of difficulty',
    languages: ['TypeScript'],
    technologies: ['React', 'Redux', 'ReduxSaga', 'WebSocket', 'Jest'],
    mainImage: 'images/mine.png',
    url: 'https://mine.levkovich.dev',
  },
  allRandom: {
    title: '"All Random"',
    description: 'Android application written in React Native.\r\nGet random values for different categories',
    languages: ['TypeScript'],
    technologies: ['ReactNative', 'ReactNavigation', 'ReactNativeElements', 'Jest'],
    mainImage: 'images/allRandom.webp',
    url: 'https://play.google.com/store/apps/details?id=com.allrandom&hl=en_IN&gl=US',
  },
  flyBoxHunting: {
    title: "Fly box hunting",
    description: 'HTML5 canvas game.',
    languages: ['JavaScript'],
    technologies: ['HTML5Canvas'],
    mainImage: 'images/fly-box.png',
    url: 'https://fly-box-game.levkovich.dev/',
  },
  paint: {
    title: "Draw whatever you want",
    description: 'A simple drawing application.',
    languages: ['JavaScript'],
    technologies: ['HTML5Canvas', 'RxJs'],
    mainImage: 'images/paint.png',
    url: 'https://paint.levkovich.dev',
  },
  yefl: {
    title: "Amateur Football Leagues of Yerevan",
    description: "Yefl.am - Source of Information on Amateur Football Leagues in Yerevan. Detailed match and round reports will help understand what transpired on the field and in which areas need to work on your game. Latest news about amateur football in Yerevan",
    languages: ['TypeScript'],
    technologies: ['NextJs', 'NestJs', 'Mysql'],
    mainImage: 'images/yefl_logo_big.png',
    url: 'https://www.yefl.am/'
  }
}

const getImage = ({image, url, name}: Skill) => {
  const imageComponent = <img src={image} alt={name} loading={'lazy'}/>
  return url ?
    <Link key={name} href={url} title={name} target={"_blank"} rel='noreferrer'>{imageComponent}</Link> : imageComponent
}

function instanceOfTechnologies(key: string): key is Technologies {
  return Object(TECHNOLOGIES).hasOwnProperty(key)
}

const getListItem = (itemName: Languages | Technologies) => {
  const {name} = instanceOfTechnologies(itemName) ? TECHNOLOGIES[itemName] : LANGUAGES[itemName]
  return (
    <li key={name}>{name}</li>
  )
}

const Project = memo(({type}: ProjectProps) => {
  if (!PROJECTS[type]) {
    return null
  }

  const {title, url, description, languages, technologies, mainImage, underConstruction} = PROJECTS[type]

  return (
    <div className={styles.project}>
      <div className={styles.project__imageContainer}>
        <div className={styles.project__image}>
          <Image
            alt={title}
            src={`/${mainImage}`}
            fill
          />
        </div>
      </div>
      <div className={styles.project__description}>
        <div>
          <div className={styles.project__description_title}>
            {title}
          </div>
          <div className={styles.project__description_description}>
            {description}
          </div>
        </div>
        <div>
          <div className={styles.project__description_languages}>
            Languages:
            <ul>
              {(languages || []).map((lang: Languages) => getListItem(lang))}
            </ul>
            <div className={styles.images}>
              {(languages || []).map((lang: Languages) => getImage(LANGUAGES[lang]))}
            </div>
          </div>
          <div className={styles.project__description_technologies}>
            Technologies:
            <ul>
              {(technologies || []).map((tech: Technologies) => getListItem(tech))}
            </ul>
            <div className={styles.images}>
              {(technologies || []).map((tech: Technologies) => getImage(TECHNOLOGIES[tech]))}
            </div>
          </div>
          <div className={styles.project__description_url}>
            <Link id={title.replace(/\s/g, '')} href={url} target={"_blank"} rel='noreferrer'>{url}</Link>
          </div>
          {underConstruction && (
            <div className={styles.underConstruction}>
              In developing
            </div>
          )}
        </div>
      </div>
    </div>
  )
})

export default Project
