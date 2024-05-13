import React, { useState, useEffect } from 'react';
import { Grid, Typography, Card, CardHeader, Box, IconButton, TextField, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'categoryID', headerName: 'Category ID', width: 150 },
  { field: 'key', headerName: 'Key', width: 150 },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 100,
    sortable: false,
    renderCell: () => (
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    ),
  },
];

const IndexPage = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:9758/api/category/getAllCategories');
      const data = await response.json();
      setItems(data);
    };
    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) => {
    return (
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.categoryID?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.key?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleAdd = () => {
    window.location.href = '/catagory/add/';
  };

  return (
    <Grid container spacing={2} className='match-height'>
      <Grid item xs={12}>
        <Typography variant='h5'>Items</Typography>
        <Card>
          <CardHeader title='Items' />
          <Box sx={{ height: 500 }}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <TextField
                  label='Search'
                  value={searchTerm}
                  onChange={handleSearch}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant='contained' color='primary' onClick={handleAdd}>
                  Add
                </Button>
              </Grid>
            </Grid>
            <DataGrid
              rows={filteredItems}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              columnSpacing={2}
            />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
