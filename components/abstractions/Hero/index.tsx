import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Grid, Typography } from '@material-ui/core'

type HeroProps = {
  primaryText: string
  children?: ReactNode | Array<ReactNode>
  gutters?: boolean
  secondaryText?: string
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { children, gutters, primaryText, secondaryText } = props

  return (
    <Grid container className={classNames(styles['hero'])}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        className={classNames(styles['hero-overlay'], gutters && styles['gutters'])}
      >
        <Typography variant="h1" color="textSecondary" align="center" gutterBottom>
          {primaryText}
        </Typography>
        {secondaryText && (
          <Typography color="textSecondary" align="center">
            {secondaryText}
          </Typography>
        )}
        {children}
      </Grid>
    </Grid>
  )
}

export default Hero
