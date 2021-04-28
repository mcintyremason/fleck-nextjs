import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Grid, GridJustification, Typography } from '@material-ui/core'

type HeroProps = {
  primaryText: string
  children?: ReactNode | Array<ReactNode>
  gutters?: boolean
  justify?: GridJustification
  secondaryText?: string
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { children, gutters, justify, primaryText } = props

  return (
    <Grid container className={classNames(styles['hero'])}>
      <Grid
        container
        direction="column"
        justify={justify}
        className={classNames(styles['hero-overlay'], gutters && styles['gutters'])}
      >
        <Typography variant="h1" color="textSecondary" align="center" gutterBottom>
          {primaryText}
        </Typography>
        {children}
      </Grid>
    </Grid>
  )
}

export default Hero
