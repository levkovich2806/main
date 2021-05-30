import React from 'react';
import Head from 'next/head';

import styles from './index.module.scss';
import SectionTitle from "../components/titles/section";
import Project from "../components/project";

function Home() {
  return (
    <>
      <Head>
        <title>Sergey Levkovich</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.header__text}>
          <h1 className={styles.header__text_main}>
            <span className={styles.name}>Sergey</span> <span className={styles.surname}>Levkovich</span>
          </h1>
          <h2 className={styles.header__text_description}>
            <span className={styles.text}>Frontend Developer</span>
          </h2>
          <div className={styles.header__social}>
            <a href={'https://github.com/levkovich2806'} target={'_blank'} rel='noreferrer'>
              <img src={'icons/gh.svg'} alt={'github'}/>
            </a>
            <a href={'https://www.linkedin.com/in/sergey-levkovich-28a80184/'} target={'_blank'} rel='noreferrer'>
              <img src={'icons/linkedin.svg'} alt={'linkedin'}/>
            </a>
          </div>

        </div>
        <div className={styles.header__arrow}>
          <a href={"#projects"}><img src={'images/arrow.gif'} alt={'Arrow down'}/></a>
        </div>
      </header>

      <section className={styles.projects} id={"projects"}>
        <SectionTitle title={'My pet projects'}/>
        <div className={styles.projects__cards}>
          <Project type={'wow'}/>
          <Project type={'mine'}/>
        </div>
      </section>
    </>
  )
}

export default Home;
