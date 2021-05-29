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

      <footer className={styles.footer}>
        <a href={"mailto:levkovich2806@gmail.com"}>levkovich2806@gmail.com</a>
        <a href={"https://github.com/levkovich2806"}>https://github.com/levkovich2806</a>
      </footer>
    </>
  )
}

export default Home;
