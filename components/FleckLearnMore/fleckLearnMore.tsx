import styles from './fleckLearnMore.module.css'

import { Grid, Typography } from '@material-ui/core'
import LearnMoreCard from 'components/abstractions/LearnMoreCard'

type FleckLearnMoreProps = {}

export const FleckLearnMore: React.FC<FleckLearnMoreProps> = (_: FleckLearnMoreProps) => {
  return (
    <Grid container justifyContent="center" className={styles['learn-more-container']}>
      <Typography
        variant="h2"
        color="primary"
        align="center"
        className={styles['learn-more-title']}
      >
        Fleck Roofing & Construction - Getting It Right Since 1988
      </Typography>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        className={styles['learn-more-cards-container']}
      >
        <LearnMoreCard
          key="learn-more-emergency"
          title="Emergency Roofing"
          description={`A damaged roof requires immediate attention. 
        Know that you'll get a fast response and quality work
        when you call our team to address is.`}
          href={'/services/emergency'}
          imageUrl="/img/components/learn-more-card-1.webp"
          xs={12}
          md={4}
        />
        <LearnMoreCard
          key="learn-more-replacement"
          title="Roof Replacement"
          description={`If your roof is older than 20 years or needs major repairs, 
        it may be time for a replacement. Count on our experts to get the job done right.`}
          href={'/services/roof-replacement'}
          imageUrl="/img/components/learn-more-card-2.webp"
          xs={12}
          md={4}
        />
        <LearnMoreCard
          key="learn-more-siding"
          title="Siding, Soffit, and Fascia"
          description={`Do you need siding replacement for your home?
        Choose Fleck Roofing & Construction for reliable siding work in the Easton, PA area.`}
          href={'/services/siding-soffit-fascia'}
          imageUrl="/img/components/learn-more-card-3.webp"
          xs={12}
          md={4}
        />
      </Grid>
    </Grid>
  )
}
