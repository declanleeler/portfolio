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
          <Grid size={1}>
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
          <Grid container direction="column" size={11}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {startDate} - {endDate}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WorkCard;
