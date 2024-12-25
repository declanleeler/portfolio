import {
  AppBar,
  Box,
  Button,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { FC } from 'react';
import { ContentSection } from '../types';
import React from 'react';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ? children : <div />}
    </Slide>
  );
}

const Header: FC = () => {
  const contentSections: ContentSection[] = ['About', 'Work', 'Contact'];

  const handleScrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      if (section === 'about') {
        window.scrollBy(0, -900);
      }
    }
  };

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h1" component="div">
            Declan Lee Ler
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {contentSections.map((section) => (
              <Button
                key={section}
                onClick={() => handleScrollToSection(section.toLowerCase())}
              >
                <Typography>{section}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;
