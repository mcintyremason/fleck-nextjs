import styles from './index.module.css'

import React from 'react'
import { Button, PropTypes } from '@material-ui/core'

type FleckButtonProps = {
  color?: PropTypes.Color
  href?: string
  text?: string
}

const FleckButton: React.FC<FleckButtonProps> = (props: FleckButtonProps) => {
  const { color, text } = props

  return (
    <Button variant="contained" color={color} className={styles['fleck-button']}>
      {text}
    </Button>
  )
}

export default FleckButton
