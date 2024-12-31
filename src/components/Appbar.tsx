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

const HideOnScroll = (props: HideOnScrollProps) => {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ? children : <div />}
    </Slide>
  );
};

interface AppbarProps {
  onHighlight: (section: string) => void;
}

const Appbar: FC<AppbarProps> = ({ onHighlight }) => {
  const contentSections: ContentSection[] = ['About', 'Work', 'Contact'];
  const handleScrollToSection = (section: string) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const appBarHeight = document.querySelector('header')?.offsetHeight || 0;
      const elementPosition =
        sectionElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - appBarHeight,
        behavior: 'smooth',
      });
      onHighlight(section);
    }
  };

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: '1rem',
                md: '2rem',
              },
              fontWeight: 400,
            }}
          >
            Declan Lee Ler
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: { xs: 0.5, md: 2 },
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              overflow: 'hidden',
            }}
          >
            {contentSections.map((section) => (
              <Button
                key={section}
                onClick={() => handleScrollToSection(section.toLowerCase())}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: '0.5rem',
                      md: '1rem',
                    },
                  }}
                >
                  {section}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Appbar;
