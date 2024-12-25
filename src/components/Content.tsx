import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FC, useState } from 'react';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Photography from './Photography';

type ContentSection = 'About' | 'Work' | 'Photography' | 'Contact';
const contentSections: ContentSection[] = [
  'About',
  'Work',
  'Photography',
  'Contact',
];

const Content: FC = () => {
  const [contentSection, setContentSection] = useState<ContentSection>('About');
  return (
    <Grid container>
      <Grid size={1}>
        <List sx={{ paddingLeft: 0, paddingTop: 0 }}>
          {contentSections.map((section) => (
            <ListItem
              key={section}
              onClick={() => setContentSection(section)}
              disablePadding
            >
              <ListItemButton sx={{ paddingLeft: 0, paddingTop: 0 }}>
                <ListItemText>{section}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid container size={11}>
        {contentSection === 'About' && <About />}
        {contentSection === 'Work' && <Work />}
        {contentSection === 'Photography' && <Photography />}
        {contentSection === 'Contact' && <Contact />}
      </Grid>
    </Grid>
  );
};

export default Content;
