import { Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';
import About from './About';
import Contact from './Contact';
import Work from './Work';

interface ContentProps {
  highlightedSection: string | null;
}

const Content: FC<ContentProps> = ({ highlightedSection }) => {
  const getBackgroundColor = (section: string) =>
    highlightedSection === section ? '#d3d3d3' : 'transparent';

  return (
    <Grid container direction="column" px={10} spacing={3}>
      <Toolbar />
      <Grid
        id="about"
        sx={{
          backgroundColor: getBackgroundColor('about'),
          transition: 'background-color 1s ease-out',
        }}
      >
        <About />
      </Grid>
      <Grid
        id="work"
        sx={{
          backgroundColor: getBackgroundColor('work'),
          transition: 'background-color 1s ease-in-out',
        }}
      >
        <Work />
      </Grid>
      <Grid
        id="contact"
        sx={{
          backgroundColor: getBackgroundColor('contact'),
          transition: 'background-color 1s linear',
        }}
      >
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Content;
