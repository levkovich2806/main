import React from 'react';
import Head from 'next/head';
import withAppLayout from '../layouts/main';
// import Character from '../components/animations/character';

import styles from './index.module.css';
import Social from "../components/Social";

function Home() {
  return (
    <>
      <Head>
        <title>Sergey Levkovich</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.skew}>
          <div className={styles.content}>
            Hello, I'm <span className={styles.author}>Sergey Levkovich</span><br/>
            I'm a web developer
            <div className={styles.social}>
              <Social/>
            </div>
          </div>
          {/*<Character/>*/}
        </div>
      </main>
    </>
  )
}

export default withAppLayout(Home);