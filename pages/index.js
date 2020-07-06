import React from 'react';
import Head from 'next/head';
import withAppLayout from '../layouts/main';
import Character from '../components/animations/character';

import styles from './index.module.css';

function Home() {
  return (
    <div>
      <Head>
        <title>Sergey Levkovich</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className={styles.container}>
        <div className={styles.skew}>
          <div className={styles.content}>
            Hello, I'm <span className={styles.author}>Sergey Levkovich</span><br/>
            I'm a web developer
          </div>
          {/*<Character/>*/}
        </div>
      </main>
    </div>
  )
}

export default withAppLayout(Home);