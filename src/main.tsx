import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';
import { ThemeProvider } from '@emotion/react';
import customTheme from './styles/theme.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
