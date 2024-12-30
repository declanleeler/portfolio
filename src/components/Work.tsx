import { FC } from 'react';
import experienceData from '../data/experience.json';
import Grid from '@mui/material/Grid2';
import WorkCard from './WorkCard';
import { ExperienceData } from '../types';
import { Divider, Typography } from '@mui/material';

const Work: FC = () => {
  const experiences: ExperienceData = experienceData;

  return (
    <Grid container direction="column" spacing={1}>
      <Grid>
        <Typography variant="h1">Work Experience</Typography>
      </Grid>
      <Grid>
        <Typography variant="body1">
          I've been fortunate enough to have spent time in different industries
          and global teams. This diverse environment has exposed me to many
          different cultures and walks of life, granting me a greater
          appreciation of different perspectives, collaboration and
          communication. Most of my work experience has centered around building
          products that utilize AI to support their users.
        </Typography>
      </Grid>
      {experiences.map((experience) => (
        <Grid key={experience.company + experience.startDate}>
          <WorkCard
            company={experience.company}
            title={experience.title}
            description={experience.description}
            keyTakeaway={experience.keyTakeaway}
            startDate={experience.startDate}
            endDate={experience.endDate}
            skills={experience.skills}
          />
          <Divider />
        </Grid>
      ))}
    </Grid>
  );
};

export default Work;
