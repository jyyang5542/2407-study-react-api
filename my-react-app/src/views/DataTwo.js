import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const DataTwo = () => {
  const [dataTwo, setDataTwo] = useState({ title: '', items: [] });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_TWO)
      .then(response => response.json())
      .then(data => setDataTwo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container component={Paper} sx={{ padding: '20px', marginTop: '20px', backgroundColor: '#e8f5e9' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#2e7d32' }}>
        {dataTwo.title}
      </Typography>
      <List>
        {dataTwo.items.map(item => (
          <ListItem key={item.id} divider sx={{ backgroundColor: '#ffffff', borderRadius: '5px', marginBottom: '5px' }}>
            <ListItemText primary={<strong>{item.name}</strong>} secondary={item.description} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DataTwo;
