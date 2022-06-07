import React from 'react'

import styles from './View.module.css'

const View = ({
  children
}) => {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  )
}

export default View
