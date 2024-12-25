import { FC } from 'react';
import experienceData from '../data/experience.json';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import WorkCard from './WorkCard';
import { ExperienceData } from '../types';

const Work: FC = () => {
  const experiences: ExperienceData = experienceData;

  return (
    <Grid container direction="column">
      {experiences.map((experience) => (
        <WorkCard
          key={experience.company + experience.startDate}
          company={experience.company}
          title={experience.title}
          description={experience.description}
          startDate={experience.startDate}
          endDate={experience.endDate}
          skills={experience.skills}
        />
      ))}
    </Grid>
  );
};

export default Work;
