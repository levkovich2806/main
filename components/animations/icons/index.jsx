import React from 'react';
import styles from "./index.module.css";

const Icons = () => {
  return (
    <div className={styles.test}>
      <div className={styles.test_1}>
        <img src={"/icons/social-media-01.png"}/>
      </div>
      <div className={styles.test_2}>
        <img src={"/icons/social-media-02.png"}/>
      </div>
      <div className={styles.test_3}>
        <img src={"/icons/social-media-03.png"}/>
      </div>
      <div className={styles.test_4}>
        <img src={"/icons/social-media-04.png"}/>
      </div>
      <div className={styles.test_5}>
        <img src={"/icons/social-media-05.png"}/>
      </div>
    </div>
  );
};

export default Icons;