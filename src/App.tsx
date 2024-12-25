import Grid from '@mui/material/Grid2';
import './styles/App.css';
import { useTheme } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content';

const App = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      size={{ xs: 12 }}
      sx={{
        margin: 0,
        padding: 5,
        minHeight: '100vh',
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
      direction="column"
    >
      <Grid>
        <Header />
      </Grid>
      <Grid>
        <Content />
      </Grid>
    </Grid>
  );
};

export default App;
