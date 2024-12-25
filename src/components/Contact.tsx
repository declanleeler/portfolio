import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <Grid container spacing={2} sx={{ alignItems: 'flex-start' }}>
      <Grid size={12}>
        <Typography variant="body1">
          Thank you for taking the time to get to know me. If you'd like to
          contact me, here are some ways you can do so.
        </Typography>
      </Grid>
      <Grid>
        <IconButton
          disableRipple
          target="_blank"
          aria-label="Declan's Linkedin"
          rel="noopener noreferrer"
          sx={{ m: 0, padding: 0 }}
          href="https://linkedin.com/in/declanleeler"
        >
          <LinkedIn />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton
          disableRipple
          aria-label="Declan's Github"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, padding: 0 }}
          href="https://github.com/declanleeler"
        >
          <GitHub />
        </IconButton>
      </Grid>
      <Grid>
        <IconButton
          disableRipple
          aria-label="Declan's Email"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ m: 0, padding: 0 }}
          href="mailto: declanlee-ler@hotmail.com"
        >
          <Mail />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Contact;
