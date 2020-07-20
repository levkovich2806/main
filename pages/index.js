import React from 'react';
import Head from 'next/head';

import styles from './index.module.scss';

function Home() {
  return (
    <>
      <Head>
        <title>Sergey Levkovich</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.header__text}>
          <h1 className={styles.header__text_main}>
            <span className={styles.name}>Sergey</span> <span className={styles.surname}>Levkovic<span className={styles.surname__last}>h</span></span>
          </h1>
          <h2 className={styles.header__text_description}>
            <span className={styles.text}>Frontend Developer</span>
          </h2>
        </div>
      </header>
    </>
  )
}

export default Home;