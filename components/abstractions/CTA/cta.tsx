import styles from './cta.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Card, Grid, GridSize } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Color } from 'models/color'

type CTAProps = {
  color: Color
  borderColor?: Color
  children?: ReactNode
} & Partial<Record<Breakpoint, boolean | GridSize>>

export const CTA: React.FC<CTAProps> = (props: CTAProps) => {
  const { color = 'primary', borderColor = 'secondary', children, xs = 12, sm, md, lg, xl } = props

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
      <Card className={classNames(styles['cta'], styles[color], styles[`${borderColor}-border`])}>
        {children}
      </Card>
    </Grid>
  )
}
