import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, Box } from '@mui/material';

const DataOne = () => {
  const [dataOne, setDataOne] = useState({ title: '', items: [] });

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL_ONE)
      .then(response => response.json())
      .then(data => setDataOne(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container component={Paper} sx={{ padding: '20px', marginTop: '20px', backgroundColor: '#f3f3f3' }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#333' }}>
        {dataOne.title}
      </Typography>
      <List>
        {dataOne.items.map((item, index) => (
          <ListItem key={index} divider sx={{ backgroundColor: '#ffffff', borderRadius: '5px', marginBottom: '5px' }}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default DataOne;
