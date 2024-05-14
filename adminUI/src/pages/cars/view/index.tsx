import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DataGrid, GridColumns, GridEventListener, GridRenderCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomChip from 'src/@core/components/mui/chip';
import CustomAvatar from 'src/@core/components/mui/avatar';
import ServerSideToolbar from 'src/views/table/data-grid/ServerSideToolbar';
import { dummyCarData } from 'src/lib/brandAmodels';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';
const columns: GridColumns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'brand', headerName: 'Brand', width: 150 },
  { field: 'model', headerName: 'Model', width: 150 },
  { field: 'interiorColor', headerName: 'Interior Color', width: 150 },
  { field: 'exteriorColor', headerName: 'Exterior Color', width: 150 },
  { field: 'year', headerName: 'Year', width: 150 },
  { field: 'category', headerName: 'Category', width: 150 },
  { field: 'location', headerName: 'Location', width: 150 },
  { field: 'vehicleType', headerName: 'Vehicle Type', width: 150 },
  { field: 'featuredCar', headerName: 'Featured Car', width: 150 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'services', headerName: 'Services', width: 200 },
  { field: 'insurranceDetails.strandardInsurrance.sIprice', headerName: 'Standard Insurance Price', width: 200 },
  { field: 'insurranceDetails.fullInsurrance.fIprice', headerName: 'Full Insurance Price', width: 200 },
  { field: 'description', headerName: 'Description', width: 200 },
  { field: 'packageDetails.securityDeposit', headerName: 'Security Deposit', width: 200 },
  { field: 'packageDetails.ExcessClaimAmount', headerName: 'Excess Claim Amount', width: 200 },
  { field: 'packageDetails.paymentMethods.creditCard', headerName: 'Credit Card Payment Method', width: 200 },
  { field: 'carFeatures.transmission', headerName: 'Transmission', width: 200 },
  { field: 'carFeatures.cruiseControl', headerName: 'Cruise Control', width: 150 },
  { field: 'carFeatures.engineCapacity', headerName: 'Engine Capacity', width: 200 },
  { field: 'carFeatures.luggageBootCapacity', headerName: 'Luggage Boot Capacity', width: 200 },
  { field: 'carFeatures.engineSize', headerName: 'Engine Size', width: 200 },
  { field: 'carFeatures.bluetooth', headerName: 'Bluetooth', width: 200 },
  { field: 'carFeatures.aux', headerName: 'Auxiliary Input', width: 200 },
  { field: 'carFeatures.seater', headerName: 'Seater Capacity', width: 200 },
  { field: 'carFeatures.navigation', headerName: 'Navigation', width: 200 },
  { field: 'carFeatures.parkingSense', headerName: 'Parking Sense', width: 200 },
  { field: 'carFeatures.appleCarPlay', headerName: 'Apple CarPlay', width: 150 },
  { field: 'carFeatures.isoFix', headerName: 'ISO Fix', width: 150 },
  { field: 'carFeatures.sunRoof', headerName: 'Sunroof', width: 150 },
  { field: 'carFeatures.pushButton', headerName: 'Push Button Start', width: 150 },
  { field: 'carFeatures.lcd', headerName: 'LCD Display', width: 150 },
  { field: 'carFeatures.rearCamera', headerName: 'Rear Camera', width: 150 },
];

const CarTable = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const [sort, setSort] = useState('asc');
  const [pageSize, setPageSize] = useState(7);
  const [rows, setRows] = useState(dummyCarData);
  console.log("🚀 ~ CarTable ~ rows:", rows)
  const [searchValue, setSearchValue] = useState('');
  const [sortColumn, setSortColumn] = useState('name');
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('')

  function loadServerRows(currentPage: number, data: any[]) {
    return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  }

  // const fetchTableData = useCallback(
  //   async (sort: string, q: string, column: string) => {
  //     await axios
  // .get('/api/cars', {
  //         params: {
  //           q,
  //           sort,
  //           column,
  //         },
  //       })
  // .then((res) => {
  //         setTotal(res.data.total);
  //         setRows(loadServerRows(page, res.data.data));
  //       });
  //   },
  //   [page, pageSize]
  // );

  // useEffect(() => {
  //   fetchTableData(sort, searchValue, sortColumn);
  // }, [fetchTableData, searchValue, sort, sortColumn]);

  const handleSortModel = (newModel: any) => {
    if (newModel.length) {
      setSort(newModel[0].sort);
      setSortColumn(newModel[0].field);
      fetchTableData(newModel[0].sort, searchValue, newModel[0].field);
    } else {
      setSort('asc');
      setSortColumn('name');
    }
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    fetchTableData(sort, value, sortColumn);
  };


  const handleEvent: GridEventListener<'rowClick'> = (
    params,
    event, 
    details,
  ) => {
    console.log('row clicked', params, event, details);
    setMessage(`Movie "${params.row.title}" clicked`);
    setSelectedRow(params.row);
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        sortingMode="server"
        paginationMode="server"
        onSortModelChange={handleSortModel}
        rowsPerPageOptions={[7, 10, 25, 50]}
        onPageChange={(newPage) => setPage(newPage)}
        components={{ Toolbar: ServerSideToolbar }}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        componentsProps={{
          toolbar: {
            value: searchValue,
            clearSearch: () => handleSearch(''),
            onChange: (event: any) => handleSearch(event.target.value),
          },
        }}
        onRowClick={handleEvent}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Car Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {JSON.stringify(selectedRow, null, 2)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CarTable;
