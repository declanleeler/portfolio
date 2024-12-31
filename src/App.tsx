import { useTheme } from '@mui/material';
import Content from './components/Content';
import Appbar from './components/Appbar';
import './styles/App.css';
import { useState } from 'react';

const App = () => {
  const theme = useTheme();
  const [highlightedSection, setHighlightedSection] = useState<string | null>(
    null,
  );

  const handleHighlight = (section: string) => {
    setHighlightedSection(section);
    setTimeout(() => {
      setHighlightedSection(null);
    }, 4000);
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
      }}
    >
      <Appbar onHighlight={handleHighlight} />
      <Content highlightedSection={highlightedSection} />
    </div>
  );
};

export default App;
