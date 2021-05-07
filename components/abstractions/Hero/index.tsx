import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Card, CardMedia, Grid, GridJustification, Typography } from '@material-ui/core'

type HeroProps = {
  imageUrl: string
  primaryText: string
  children?: ReactNode | Array<ReactNode>
  gutters?: boolean
  justify?: GridJustification
  secondaryText?: string
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { children, gutters, justify, primaryText, imageUrl } = props

  return (
    <Card className={classNames(styles['hero'])} square elevation={0}>
      <CardMedia image={imageUrl} className={styles['media']}>
        <Grid
          container
          direction="column"
          justify={justify}
          alignItems="center"
          className={classNames(styles['hero-overlay'], gutters && styles['gutters'])}
        >
          <Typography variant="h1" color="textSecondary" align="center" gutterBottom>
            {primaryText}
          </Typography>
          {children}
        </Grid>
      </CardMedia>
    </Card>
  )
}

export default Hero
