import React from 'react';
import Menu from "../../components/menu";

import styles from './index.module.css';

const withAppLayout = (PageContent) => {
  return (props) => {
    return (
      <>
        <div className={styles.menu}>
          <Menu/>
        </div>
        <div className={styles.content}>
          <PageContent {...props} />
        </div>
      </>
    )
  }
}

export default withAppLayout;