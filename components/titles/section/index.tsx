import React from 'react'
import styles from './index.module.scss'

interface ISectionTitle {
  title: string
}

const SectionTitle = ({title}: ISectionTitle) => {
  return (
    <h1 className={styles.sectionTitle}>
      {title}
    </h1>
  )
}

export default SectionTitle
