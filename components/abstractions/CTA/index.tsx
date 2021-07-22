import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Card, Grid, GridSize } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

export type Color = 'primary' | 'secondary' | 'text-primary' | 'text-secondary' | 'no-color'

type CTAProps = {
  color: Color
  borderColor?: Color
  children?: ReactNode
} & Partial<Record<Breakpoint, boolean | GridSize>>

const CTA: React.FC<CTAProps> = (props: CTAProps) => {
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

export default CTA
