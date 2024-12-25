import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';
import About from './About';
import Contact from './Contact';
import Work from './Work';

const Content: FC = () => {
  return (
    <Grid container direction="column" px={10} spacing={3}>
      <Toolbar />
      <Grid id="about">
        <About />
      </Grid>
      <Grid id="work">
        <Work />
      </Grid>
      <Grid id="contact">
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Content;
