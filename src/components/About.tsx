import { FC } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About: FC = () => {
  return (
    <Grid container direction="column">
      <Typography variant="h2" sx={{ paddingBottom: 3 }}>
        I'm a <strong>software engineer </strong>with a background in{' '}
        <strong>data science</strong> and <strong>data analytics</strong>.
      </Typography>
      <Typography variant="body1" sx={{ paddingBottom: 2 }}>
        Many years ago, I watched a movie called Moneyball and was fascinated by
        how statistics and computing could revolutionize fields traditionally
        driven by human intuition and experience. Hinge your career's baby steps
        on a Hollywood movie? Why not! I prompyly enrolled in the National
        University of Singapore's School of Computing to study Business
        Analytics.
      </Typography>
      <Typography variant="body1" sx={{ paddingBottom: 3 }}>
        2 years later, a new insight dawned on me after I completed an
        internship. I had lead the development of a software MVP to support the
        team in sourcing for suppliers and manufacturers. This was my first
        taste of software engineering and what an experience it was! From
        requirements gathering, to stakeholder management, to the actual
        technical development, I enjoyed every step of the way and came to a
        realization. To me, AI / ML were just a means to an end. What I wanted
        was to build software products that would deliver value to their users.
        Today, with the rise and rise of AI, the opportunities are endless. But
        rather than developing or optimizing models, I wanted to build products,
        regardless of whether they needed AI or not. Thus began my career as a
        software engineer.
      </Typography>
      <Typography variant="h2" sx={{ paddingBottom: 3 }}>
        I travel and dabble in photography
      </Typography>
      <Typography variant="body1" sx={{ paddingBottom: 1 }}>
        A picture is worth a thousand words.
      </Typography>
    </Grid>
  );
};

export default About;
