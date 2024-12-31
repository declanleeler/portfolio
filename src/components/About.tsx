import { FC } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const About: FC = () => {
  return (
    <Grid container spacing={1} direction={{ xs: 'column', md: 'row' }}>
      <Grid size={12}>
        <Typography variant="h1">About me</Typography>
      </Grid>
      <Grid
        size={{ xs: 12, md: 3 }}
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <img
          src="me.jpeg"
          alt={'me'}
          style={{
            maxWidth: '100%',
            height: '100%',
            maxHeight: '45vh',
            objectFit: 'contain',
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <Typography variant="h2" sx={{ paddingBottom: 3 }}>
          I'm a <strong>software engineer </strong>with a background in{' '}
          <strong>data science</strong> and <strong>data analytics</strong>.
        </Typography>
        <Typography variant="body1" sx={{ paddingBottom: 2 }}>
          Several years ago, I watched Moneyball and became interested in how
          statistics and computing could transform fields traditionally driven
          by human intuition and experience. Motivated by this idea, I enrolled
          in the Business Analytics program at the National University of
          Singapore (NUS) under the School of Computing.
        </Typography>
        <Typography variant="body1" sx={{ paddingBottom: 3 }}>
          Three years later, during my first internship, I gained a new
          perspective. Although I joined the data analyst team, my main
          responsibility was developing a software MVP to help analysts and
          customers source suppliers and manufacturers. This marked my
          introduction to software engineering. From gathering requirements to
          managing stakeholders and handling technical development, I found the
          process engaging and realized that my focus was on building software
          products that deliver value to users. While AI and ML are valuable
          tools, I prefer to leverage existing advancements and create practical
          applications for them. This led to the start of my career as a
          software engineer.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default About;
