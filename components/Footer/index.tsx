import { Grid } from '@material-ui/core'
import React from 'react'
import styles from './index.module.css'
import classNames from 'classnames'

type FooterProps = {
  isAbsolute?: boolean
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { isAbsolute } = props

  return (
    <Grid
      container
      className={classNames(styles['footer'], isAbsolute ? styles['absolute'] : '')}
    ></Grid>
  )
}

export default Footer
