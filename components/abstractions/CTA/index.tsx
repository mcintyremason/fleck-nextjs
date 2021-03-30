import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Card, Grid, GridSize, withStyles } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

export type CTAColor = 'primary' | 'secondary' | 'no-color'

type CTAProps = {
  color: CTAColor
  children?: ReactNode
} & Partial<Record<Breakpoint, boolean | GridSize>>

const CTACard = withStyles(() => ({
  root: {
    border: '1px solid var(--primary-color)',
  },
}))(Card)

const CTA: React.FC<CTAProps> = (props: CTAProps) => {
  const { children, color, xs, sm, md, lg, xl } = props

  return (
    <Grid
      className={classNames(styles['cta-container'])}
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      <CTACard className={classNames(styles['cta'], styles[color])}>{children}</CTACard>
    </Grid>
  )
}

export default CTA
