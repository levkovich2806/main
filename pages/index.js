import React from 'react';
import Head from 'next/head';
import withAppLayout from '../layouts/main';

import styles from './index.module.css';
import Menu from "../components/menu";

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Sergey Levkovich</title>
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <main className={styles.container}>
        <div className={styles.main}>
          Hello, I'm <span className={styles.author}>Sergey Levkovich</span>.<br/>
          I'm a web developer.
        </div>
      </main>
    </div>
  )
}

export default withAppLayout(Home);