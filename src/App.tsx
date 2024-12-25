import { useTheme } from '@mui/material';
import Content from './components/Content';
import Header from './components/Header';
import './styles/App.css';

const App = () => {
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
      }}
    >
      <Header />
      <Content />
    </div>
  );
};

export default App;
