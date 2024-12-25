import { Avatar, Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC } from 'react';
import { WorkExperience } from '../types';

const WorkCard: FC<WorkExperience> = ({
  company,
  title,
  description,
  startDate,
  endDate,
  skills,
}) => {
  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" spacing={1}>
          <Avatar
            alt="Company Logo"
            src={'vite.svg'}
            sx={{ width: 40, height: 40 }} // Adjust size of the logo
          />
          <Grid>{company}</Grid>
        </Grid>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
