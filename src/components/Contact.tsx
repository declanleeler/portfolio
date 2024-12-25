import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';

const Contact: FC = () => {
  return (
    <Grid container sx={{ gap: 2 }}>
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
  );
};

export default Contact;
