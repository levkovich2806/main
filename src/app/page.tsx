import React from 'react';

import styles from './index.module.scss';
import SectionTitle from "../../components/titles/section";
import Project from "../../components/project";
import Image from "next/image";
import Link from "next/link";
import { YuoTubeVideo } from "../../components/YuoTubeVideo";

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
              <Image src={'/icons/gh.svg'} alt='github' title='github' width={40} height={40} />
            </Link>
            <Link href={'https://www.linkedin.com/in/sergey-levkovich/'} target={'_blank'} rel='noreferrer'>
              <Image src={'/icons/linkedin.svg'} alt='linkedin' width={40} height={40} />
            </Link>
            <Link href={'https://t.me/gosuundeadghost'} target={'_blank'} rel='noreferrer'>
              <Image src={'/icons/telegram-black-icon.svg'} alt='telegram' width={40} height={40} />
            </Link>
          </div>

        </div>
        <div className={styles.header__arrow}>
          <a href={"#projects"}><img src={'images/arrow_small.gif'} alt={'Arrow down'} /></a>
        </div>
      </header>

      <section className={styles.projects} id={"projects"}>
        <SectionTitle title={'My pet projects'} />
        <div className={styles.projects__cards}>
          <Project type={'dotsAndBoxes'} />
          {/*<Project type={'wow'}/>*/}
          <Project type={'allRandom'} />
          <Project type={'flyBoxHunting'} />
          {/*<Project type={'mine'}/>*/}
          <Project type={'yefl'} />
          <Project type={'paint'} />
          <Project type={'reminder'} />
        </div>
      </section>

      <section className={styles.presentations} id={'speaker'}>
        <SectionTitle title={'My presentations'} />
        <div className={styles.presentations__cards}>
          <YuoTubeVideo embedLink={'https://www.youtube.com/embed/qPCpRQAhvf0?si=-QAIAENYZ5nSuybm'} />
          <YuoTubeVideo embedLink={'https://www.youtube.com/embed/r__rzKIt7wY?si=t6SRgyyxb5FkO7oH'} />
        </div>
      </section>

      <section className={styles.articles} id={'articles'}>
        <SectionTitle title={'My articles'} />
        <div className={styles.articles__list}>
          <div className={styles.article__item}>
            <Link href={'https://hackernoon.com/memoization-in-react-powerful-tool-or-hidden-pitfall'} target={'_blank'} rel='noreferrer' className={styles.article__link}>
              <h3 className={styles.article__title}>Memoization in React: Powerful Tool or Hidden Pitfall?</h3>
              <p className={styles.article__description}>Exploring the benefits and potential pitfalls of memoization techniques in React applications</p>
            </Link>
          </div>
          <div className={styles.article__item}>
            <Link href={'https://hackernoon.com/master-react-by-designing-effective-apis-with-the-useimperativehandle-hook'} target={'_blank'} rel='noreferrer' className={styles.article__link}>
              <h3 className={styles.article__title}>Master React by Designing Effective APIs With the useImperativeHandle Hook</h3>
              <p className={styles.article__description}>Learn how to design effective APIs using the useImperativeHandle hook in React</p>
            </Link>
          </div>
          <div className={styles.article__item}>
            <Link href={'https://hackernoon.com/react-19-new-tools-to-work-with-forms'} target={'_blank'} rel='noreferrer' className={styles.article__link}>
              <h3 className={styles.article__title}>React 19: New Tools To Work With Forms</h3>
              <p className={styles.article__description}>Discover the new form handling capabilities and tools introduced in React 19</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
