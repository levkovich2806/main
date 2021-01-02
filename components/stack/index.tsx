import React from 'react';
import styles from './index.module.scss'
import StackItem from "./StackItem";
import type {StackItemProps} from './StackItem'
import c from 'classnames'

const ITEMS: StackItemProps[] = [
  {
    image: "/images/css3.webp",
    description: "CSS3"
  },
  {
    image: "/images/html5.webp",
    description: "HTML5"
  },
  {
    image: "/images/js.webp",
    description: "JavaScript"
  },
  {
    image: "/images/react.webp",
    description: "React.js"
  },
  {
    image: "/images/node.webp",
    description: "Node.js"
  },
  {
    image: "/images/redux.webp",
    description: "Redux"
  }
]

const StackBlock = () => {
  return (
    <div>
      <h2 className={styles.title}>Technology Stack</h2>
      <div className={styles.stackItems}>
        {ITEMS.map(({image, description}, index) => (
            <div className={c(styles.stackItems__item, styles[`stackItems__item_${index}`])}>
              <StackItem image={image} description={description}/>
            </div>
          )
        )}
      </div>

    </div>
  );
};

export default StackBlock;
