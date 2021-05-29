import React from 'react';

import styles from './index.module.css';
import Icons from "../../components/animations/icons";
import Character from "../../components/animations/character";

const Animations = () => {
  return (
    <div className={"pageContent"}>
      <h1>Animations</h1>
      <div className={styles.content}>
        <Icons/>
        <Character/>
      </div>

    </div>
  );
};

export default Animations;