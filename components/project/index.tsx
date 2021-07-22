import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'

interface ProjectProps {
  type: Projects
}

type Projects =
  "wow"
  | "mine"

type Technologies =
  "React"
  | "NextJs"
  | 'Jest'
  | 'NodeJs'
  | 'MongoDB'
  | 'BlizzardAPI'
  | 'Storybook'
  | 'Redux'
  | 'ReduxSaga'
  | 'WebSocket'

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
    underConstruction: true
  }
}

const getImage = ({image, url, name}: Skill) => {
  const imageComponent = <img src={image} alt={name} loading={'lazy'}/>
  return url ?
    <a key={name} href={url} title={name} target={"_blank"} rel='noreferrer'>{imageComponent}</a> : imageComponent
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

const Project = ({type}: ProjectProps) => {
  if (!PROJECTS[type]) {
    return null
  }

  const {title, url, description, languages, technologies, mainImage, underConstruction} = PROJECTS[type]

  return (
    <div className={styles.project}>
      <div className={styles.project__image}>
        <Image
          alt={title}
          src={`/${mainImage}`}
          width={200}
          height={200}
        />
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
              {languages.map((lang: Languages) => getListItem(lang))}
            </ul>
            <div className={styles.images}>
              {languages.map((lang: Languages) => getImage(LANGUAGES[lang]))}
            </div>
          </div>
          <div className={styles.project__description_technologies}>
            Technologies:
            <ul>
              {technologies.map((tech: Technologies) => getListItem(tech))}
            </ul>
            <div className={styles.images}>
              {technologies.map((tech: Technologies) => getImage(TECHNOLOGIES[tech]))}
            </div>
          </div>
          <div className={styles.project__description_url}>
            <a href={url} target={"_blank"} rel='noreferrer'>{url}</a>
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
}

export default Project
