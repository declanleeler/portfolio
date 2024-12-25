import Grid from '@mui/material/Grid2';
import { FC } from 'react';

const Photography: FC = () => {
  const images = [
    'gran_ballon.jpeg',
    'jean_sipp.jpeg',
    'quiraing.jpeg',
    'alishan.jpeg',
  ];

  return (
    <Grid container spacing={1}>
      {images.map((image, index) => (
        <Grid size={6} key={index}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Photography;
