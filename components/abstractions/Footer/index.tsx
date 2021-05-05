import { Grid } from '@material-ui/core'
import React, { ReactNode } from 'react'
import styles from './index.module.css'
import classNames from 'classnames'

type FooterProps = {
  children?: ReactNode
  isAbsolute?: boolean
}

const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { children, isAbsolute } = props

  return (
    <Grid container className={classNames(styles['footer'], isAbsolute ? styles['absolute'] : '')}>
      {children}
    </Grid>
  )
}

export default Footer
