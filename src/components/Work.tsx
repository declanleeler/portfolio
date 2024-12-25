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
          appreciation of different perspectives and values. It has also
          sharpened my understanding of collaboration and communication. Most of
          my work experience has centered around building products that wrap up
          AI services to enhance productivity.
        </Typography>
      </Grid>
      {experiences.map((experience) => (
        <Grid>
          <WorkCard
            key={experience.company + experience.startDate}
            company={experience.company}
            title={experience.title}
            description={experience.description}
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
