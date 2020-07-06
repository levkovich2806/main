import React from 'react';
import styles from "./index.module.css";

const Character = () => {
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.character}>
        <img src={"/main_animation/character.png"}/>
      </div>
      <div className={styles.desc}>
        <img src={"/main_animation/desc.png"}/>
      </div>
      <div className={styles.plant}>
        <img src={"/main_animation/plant.png"}/>
      </div>
      <div className={styles.shadows}>
        <img src={"/main_animation/shadows.png"}/>
      </div>
      <div className={styles.floor}>
        <img src={"/main_animation/floor.png"}/>
      </div>
    </div>
  );
};

export default Character;