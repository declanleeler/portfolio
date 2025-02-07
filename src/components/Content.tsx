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
    highlightedSection === section ? '#efeeee' : 'transparent';

  return (
    <Grid
      container
      direction="column"
      px={{ xs: 4, md: 10 }}
      spacing={3}
      justifyContent="center"
      alignItems="center"
    >
      <Toolbar />
      <Grid
        id="about"
        sx={{
          backgroundColor: getBackgroundColor('about'),
          transition: 'background-color 0.5s ease-out',
        }}
      >
        <About />
      </Grid>
      <Grid
        id="work"
        sx={{
          backgroundColor: getBackgroundColor('work'),
          transition: 'background-color 0.5s ease-in-out',
        }}
      >
        <Work />
      </Grid>
      <Grid
        id="contact"
        sx={{
          backgroundColor: getBackgroundColor('contact'),
          transition: 'background-color 0.5s linear',
        }}
      >
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Content;
