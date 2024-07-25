import React from 'react';
import DataOne from './views/DataOne';
import DataTwo from './views/DataTwo';
import { Container, CssBaseline, Typography } from '@mui/material';

const App = () => {
  return (
    <Container sx={{ backgroundColor: '#fafafa', minHeight: '100vh', padding: '20px' }}>
      <CssBaseline />
      <Typography variant="h2" component="h1" align="center" gutterBottom sx={{ marginTop: '20px', color: '#1976d2' }}>
        My React App
      </Typography>
      <DataOne />
      <DataTwo />
    </Container>
  );
};

export default App;
