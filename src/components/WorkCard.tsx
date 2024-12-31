import { Card, CardContent, Chip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';
import { WorkExperience } from '../types';

const WorkCard: FC<WorkExperience> = ({
  company,
  title,
  description,
  keyTakeaway,
  startDate,
  endDate,
  skills,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: 'transparent', // Transparent background
        boxShadow: 'none', // Optional: Remove Card shadow for better blending
      }}
    >
      <CardContent sx={{ padding: 0 }}>
        <Grid
          container
          alignItems="center"
          spacing={1}
          direction={{ xs: 'column', md: 'row' }}
        >
          <Grid size={{ md: 1 }}>
            <img
              src={`${company}.png`}
              alt="Company Logo"
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain',
              }}
            />
          </Grid>
          <Grid container direction="column" size={{ md: 11 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title} | {company}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {startDate} - {endDate ? endDate : 'now'}
            </Typography>
            <Typography variant="body1">{description}</Typography>
            {keyTakeaway && (
              <Typography variant="body1">{keyTakeaway}</Typography>
            )}
            <Grid container spacing={1} direction="row">
              {skills.map((skill) => (
                <Grid>
                  <Chip label={skill} variant="outlined" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
