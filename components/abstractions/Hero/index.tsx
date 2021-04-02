import styles from './index.module.css'

import React from 'react'
import { Grid, Typography } from '@material-ui/core'

type HeroProps = {}

const Hero: React.FC<HeroProps> = (_: HeroProps) => {
  return (
    <Grid container className={styles['hero']}>
      <Grid container direction="column" justify="center" className={styles['hero-overlay']}>
        <Typography variant="h1" color="textSecondary" align="center">
          We're the Guys That Keep You Dry
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Hero
