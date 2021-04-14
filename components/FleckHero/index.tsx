import styles from './index.module.css'

import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Hero from '../abstractions/Hero'
import { Alert, AlertTitle } from '@material-ui/lab'

type FleckHero = {}

type OperationHours = {
  closed: boolean
  openHour: number
  closeHour: number
}

const WEEKLY_OPERATION_HOURS: Array<OperationHours> = [
  {
    closed: true,
    openHour: 0,
    closeHour: 0,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
]

const FleckHero: React.FC<FleckHero> = (_: FleckHero) => {
  const currDate = new Date()
  const currDay = currDate.getDay()
  const currHour = currDate.getHours()
  const currOperationHours = WEEKLY_OPERATION_HOURS[currDay]

  const isOpen = (): boolean => {
    if (currOperationHours.closed) {
      return false
    } else {
      if (currHour >= currOperationHours.openHour && currHour <= currOperationHours.closeHour) {
        return true
      }
    }

    return false
  }

  return (
    <Grid container className={styles['fleck-hero-container']}>
      <Hero primaryText="We're the Guys That Keep You Dry" gutters>
        <Typography color="textSecondary" align="center">
          In Business Since 1988
        </Typography>
        <Typography color="textSecondary" align="center">
          Warranties Available
        </Typography>
        <Typography color="textSecondary" align="center">
          Free Quotes
        </Typography>
        <Typography color="textSecondary" align="center">
          Hours:{' '}
          {isOpen()
            ? `Open • Closes ${currOperationHours.closeHour}:00 pm`
            : 'Closed ${currOperationHours.closeHour}:00 pm'}
        </Typography>
      </Hero>
    </Grid>
  )
}

export default FleckHero
