import React from 'react'

import styles from './ActionCTA.module.css'

/**
 * A simple button component.
 *
 * It takes only two props change and children. The change prop fires onClick with no arguments.
 *
 * @param {Object} props
 * @param {Function} props.change
 * @param {React.Node} props.children
 */
const ActionCTA = ({
  change,
  children
}) => {
  return (
    <button
      className={styles.button}
      onClick={change}
    >
      {children}
    </button>
  )
}

export default ActionCTA
