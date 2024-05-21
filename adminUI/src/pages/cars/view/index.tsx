import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DataGrid, GridColumns, GridEventListener } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, CircularProgress } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ServerSideToolbar from './ServerSideToolbar';

const CarTable = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const Router = useRouter();
  const [sort, setSort] = useState('asc');
  const [pageSize, setPageSize] = useState(7);
  const [rows, setRows] = useState([]);
  console.log("🚀 ~ CarTable ~ rows:", rows)
  const [searchValue, setSearchValue] = useState('');
  const [sortColumn, setSortColumn] = useState('name');
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const columns: GridColumns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'brand', headerName: 'Brand', width: 150 },
    { field: 'model', headerName: 'Model', width: 150 },
    // { field: 'interiorColor', headerName: 'Interior Color', width: 150 },
    // { field: 'exteriorColor', headerName: 'Exterior Color', width: 150 },
    { field: 'year', headerName: 'Year', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'vehicleType', headerName: 'Vehicle Type', width: 150 },
    { field: 'featuredCar', headerName: 'Featured Car', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    // { field: 'services', headerName: 'Services', width: 200 },
    // { field: 'insurranceDetails.strandardInsurrance.sIprice', headerName: 'Standard Insurance Price', width: 200 },
    // { field: 'insurranceDetails.fullInsurrance.fIprice', headerName: 'Full Insurance Price', width: 200 },
    // { field: 'description', headerName: 'Description', width: 200 },
    // { field: 'packageDetails.securityDeposit', headerName: 'Security Deposit', width: 200 },
    // { field: 'packageDetails.ExcessClaimAmount', headerName: 'Excess Claim Amount', width: 200 },
    // { field: 'packageDetails.paymentMethods.creditCard', headerName: 'Credit Card Payment Method', width: 200 },
    // { field: 'carFeatures.transmission', headerName: 'Transmission', width: 200 },
    // { field: 'carFeatures.cruiseControl', headerName: 'Cruise Control', width: 150 },
    // { field: 'carFeatures.engineCapacity', headerName: 'Engine Capacity', width: 200 },
    // { field: 'carFeatures.luggageBootCapacity', headerName: 'Luggage Boot Capacity', width: 200 },
    // { field: 'carFeatures.engineSize', headerName: 'Engine Size', width: 200 },
    // { field: 'carFeatures.bluetooth', headerName: 'Bluetooth', width: 200 },
    // { field: 'carFeatures.aux', headerName: 'Auxiliary Input', width: 200 },
    // { field: 'carFeatures.seater', headerName: 'Seater Capacity', width: 200 },
    // { field: 'carFeatures.navigation', headerName: 'Navigation', width: 200 },
    // { field: 'carFeatures.parkingSense', headerName: 'Parking Sense', width: 200 },
    // { field: 'carFeatures.appleCarPlay', headerName: 'Apple CarPlay', width: 150 },
    // { field: 'carFeatures.isoFix', headerName: 'ISO Fix', width: 150 },
    // { field: 'carFeatures.sunRoof', headerName: 'Sunroof', width: 150 },
    // { field: 'carFeatures.pushButton', headerName: 'Push Button Start', width: 150 },
    // { field: 'carFeatures.lcd', headerName: 'LCD Display', width: 150 },
    // { field: 'carFeatures.rearCamera', headerName: 'Rear Camera', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton
            color="primary"
            onClick={() => handleView(params.row._id)}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => handleEdit(params.row._id)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => handleDelete(params.row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  function loadServerRows(currentPage: number, data: any[]) {
    return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  }


  const fetchTableData = useCallback(
    async (sort: string, q: string, column: string) => {
      await axios
        .get('http://localhost:8000/api/v1/admin/getAllCars', {
          params: {
            q,
            sort,
            column,
          },
        })
        .then((res) => {
          setTotal(res.data.total);
          setRows(loadServerRows(page, res.data.data));
        });
    },
    [page, pageSize]
  );

  useEffect(() => {
    fetchTableData(sort, searchValue, sortColumn);
  }, [fetchTableData, searchValue, sort, sortColumn]);

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
  };

  const handleDoubleClick: GridEventListener<'rowDoubleClick'> = (
    params,
    event,
    details,
  ) => {
    console.log('row double clicked', params, event, details);
    Router.push(`/cars/update/${params.row._id}`);
  };

  const handleView = async (id: string) => {
    setLoading(true);
    console.log("🚀 ~ handleView ~ setLoading:", loading)
    
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/admin/getCarById/${id}`);
      setSelectedRow(response.data.data);
      console.log("🚀 ~ handleView ~ response:", response)
      setOpen(true);
    } catch (error) {
      console.error("There was an error fetching the car details!", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id: string) => {
    Router.push(`/cars/update/${id}`);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this car?')) {
      await axios.delete(`http://localhost:8000/api/v1/admin/deleteCarById/${id}`);
      fetchTableData(sort, searchValue, sortColumn);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows.map(row => ({ ...row, id: row._id }))}
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
      />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Car Details</DialogTitle>
        <DialogContent>
          {loading ? (
            <CircularProgress />
          ) : (
            selectedRow && (
              <div>
                <p><strong>Name:</strong> {selectedRow.name}</p>
                <p><strong>Brand:</strong> {selectedRow.brand}</p>
                <p><strong>Model:</strong> {selectedRow.model}</p>
                <p><strong>Interior Color:</strong> {selectedRow.interiorColor}</p>
                <p><strong>Exterior Color:</strong> {selectedRow.exteriorColor}</p>
                <p><strong>Year:</strong> {selectedRow.year}</p>
                <p><strong>Category:</strong> {selectedRow.category}</p>
                <p><strong>Location:</strong> {selectedRow.location}</p>
                <p><strong>Vehicle Type:</strong> {selectedRow.vehicleType}</p>
                <p><strong>Featured Car:</strong> {selectedRow.featuredCar}</p>
                <p><strong>Status:</strong> {selectedRow.status}</p>
                <p><strong>Services:</strong> {selectedRow.services}</p>
                <p><strong>Standard Insurance Price:</strong> {selectedRow.insurranceDetails?.strandardInsurrance?.sIprice}</p>
                <p><strong>Full Insurance Price:</strong> {selectedRow.insurranceDetails?.fullInsurrance?.fIprice}</p>
                <p><strong>Description:</strong> {selectedRow.description}</p>
                <p><strong>Security Deposit:</strong> {selectedRow.packageDetails?.securityDeposit}</p>
                <p><strong>Excess Claim Amount:</strong> {selectedRow.packageDetails?.ExcessClaimAmount}</p>
                <p><strong>Credit Card Payment Method:</strong> {selectedRow.packageDetails?.paymentMethods?.creditCard}</p>
                <p><strong>Transmission:</strong> {selectedRow.carFeatures?.transmission}</p>
                <p><strong>Cruise Control:</strong> {selectedRow.carFeatures?.cruiseControl}</p>
                <p><strong>Engine Capacity:</strong> {selectedRow.carFeatures?.engineCapacity}</p>
                <p><strong>Luggage Boot Capacity:</strong> {selectedRow.carFeatures?.luggageBootCapacity}</p>
                <p><strong>Engine Size:</strong> {selectedRow.carFeatures?.engineSize}</p>
                <p><strong>Bluetooth:</strong> {selectedRow.carFeatures?.bluetooth}</p>
                <p><strong>Auxiliary Input:</strong> {selectedRow.carFeatures?.aux}</p>
                <p><strong>Seater Capacity:</strong> {selectedRow.carFeatures?.seater}</p>
                <p><strong>Navigation:</strong> {selectedRow.carFeatures?.navigation}</p>
                <p><strong>Parking Sense:</strong> {selectedRow.carFeatures?.parkingSense}</p>
                <p><strong>Apple CarPlay:</strong> {selectedRow.carFeatures?.appleCarPlay}</p>
                <p><strong>ISO Fix:</strong> {selectedRow.carFeatures?.isoFix}</p>
                <p><strong>Sunroof:</strong> {selectedRow.carFeatures?.sunRoof}</p>
                <p><strong>Push Button Start:</strong> {selectedRow.carFeatures?.pushButton}</p>
                <p><strong>LCD Display:</strong> {selectedRow.carFeatures?.lcd}</p>
                <p><strong>Rear Camera:</strong> {selectedRow.carFeatures?.rearCamera}</p>
              </div>
            )
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CarTable;
