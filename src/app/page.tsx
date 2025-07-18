import React from 'react';

import styles from './index.module.scss';
import SectionTitle from "../../components/titles/section";
import Project from "../../components/project";
import Image from "next/image";
import Link from "next/link";
import {YuoTubeVideo} from "../../components/YuoTubeVideo";

function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          <h1 className={styles.header__text_main}>
            <span className={styles.name}>Sergey</span> <span className={styles.surname}>Levkovich</span>
          </h1>
          <h2 className={styles.header__text_description}>
            <span className={styles.text}>Software Developer</span>
          </h2>
          <div className={styles.header__social}>
            <Link href={'https://github.com/levkovich2806'} target={'_blank'} rel='noreferrer'>
              <Image src={'/icons/gh.svg'} alt='github' title='github' width={40} height={40}/>
            </Link>
            <Link href={'https://www.linkedin.com/in/sergey-levkovich/'} target={'_blank'} rel='noreferrer'>
              <Image src={'/icons/linkedin.svg'} alt='linkedin' width={40} height={40}/>
            </Link>
            <Link href={'https://t.me/gosuundeadghost'} target={'_blank'} rel='noreferrer'>
              <Image src={'/icons/telegram-black-icon.svg'} alt='telegram' width={40} height={40}/>
            </Link>
          </div>

        </div>
        <div className={styles.header__arrow}>
          <a href={"#projects"}><img src={'images/arrow_small.gif'} alt={'Arrow down'}/></a>
        </div>
      </header>

      <section className={styles.projects} id={"projects"}>
        <SectionTitle title={'My pet projects'}/>
        <div className={styles.projects__cards}>
          {/*<Project type={'wow'}/>*/}
          <Project type={'allRandom'}/>
          <Project type={'flyBoxHunting'}/>
          {/*<Project type={'mine'}/>*/}
          <Project type={'paint'}/>
          <Project type={'yefl'}/>
        </div>
      </section>

      <section className={styles.presentations} id={'speaker'}>
        <SectionTitle title={'My presentations'}/>
        <div className={styles.presentations__cards}>
          <YuoTubeVideo embedLink={'https://www.youtube.com/embed/qPCpRQAhvf0?si=-QAIAENYZ5nSuybm'} />
          <YuoTubeVideo embedLink={'https://www.youtube.com/embed/r__rzKIt7wY?si=t6SRgyyxb5FkO7oH'} />
        </div>
      </section>
    </>
  )
}

export default Home;
