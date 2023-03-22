import React from 'react'
import PropTypes from 'prop-types'
import styles from './Display.module.scss'

const Display = ({ value }) => {
  return (
        <div className={styles.display}>
            <div className={styles.value}>
                {value}
            </div>
        </div>
  )
}

Display.propTypes = {
  value: PropTypes.string.isRequired
}

export default Display
