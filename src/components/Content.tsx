import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';
import About from './About';
import Contact from './Contact';
import Work from './Work';

const Content: FC = () => {
  return (
    <Grid container direction="column" py={2} px={10}>
      <Toolbar />
      <div id="about">
        <About />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </Grid>
  );
};

export default Content;
