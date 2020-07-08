import React from 'react';

import styles from './index.module.css';

const Social = () => {
  return (
    <div className={styles.icons}>
      <div className={styles.icon}>
        <a href={"https://github.com/levkovich2806"} target={"_blank"}>
          <img src={"/icons/github.png"} alt={"Github"}/>
        </a>
      </div>
    </div>
  );
};

export default Social;