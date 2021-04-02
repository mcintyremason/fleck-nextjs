import styles from './index.module.css'

import React from 'react'
import { Grid, Typography } from '@material-ui/core'

type HeroProps = {
  primaryText: string
}

const Hero: React.FC<HeroProps> = (props: HeroProps) => {
  const { primaryText } = props

  return (
    <Grid container className={styles['hero']}>
      <Grid container direction="column" justify="center" className={styles['hero-overlay']}>
        <Typography variant="h1" color="textSecondary" align="center">
          {primaryText}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Hero
