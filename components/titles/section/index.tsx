import React from 'react'
import styles from './index.module.scss'

interface ISectionTitle {
  title: string
}

const SectionTitle = ({title}: ISectionTitle) => {
  return (
    <h2 className={styles.sectionTitle}>
      {title}
    </h2>
  )
}

export default SectionTitle
