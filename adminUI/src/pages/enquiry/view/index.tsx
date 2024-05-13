import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomChip from 'src/@core/components/mui/chip';
import CustomAvatar from 'src/@core/components/mui/avatar';
import ServerSideToolbar from 'src/views/table/data-grid/ServerSideToolbar';

const columns: GridColumns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'carName', headerName: 'Car Name', width: 150 },
  { field: 'startDate', headerName: 'Start Date', width: 150 },
  { field: 'isNewEnquiry', headerName: 'New Enquiry', width: 150 },
  { field: 'endDate', headerName: 'End Date', width: 150 },
  { field: 'pickUpLoc', headerName: 'Pick Up Location', width: 200 },
  { field: 'dropLocation', headerName: 'Drop Location', width: 200 },
  { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
  { field: 'area', headerName: 'Area', width: 150 },
  { field: 'message', headerName: 'Message', width: 200 },
  { field: 'deliveryMode', headerName: 'Delivery Mode', width: 150 },
  { field: 'city', headerName: 'City', width: 150 },
  { field: 'email', headerName: 'Email', width: 150 },
  { field: 'packages', headerName: 'Packages', width: 150 },
  { field: 'brand', headerName: 'Brand', width: 150 },
  { field: 'model', headerName: 'Model', width: 150 },
  { field: 'enquiryType', headerName: 'Enquiry Type', width: 150 },
  { field: 'preferredContact', headerName: 'Preferred Contact', width: 150 },
  { field: 'budget', headerName: 'Budget', width: 150 },
  { field: 'additionalRequirements', headerName: 'Additional Requirements', width: 200 },
  { field: 'source', headerName: 'Source', width: 150 },
  { field: 'promotionalCode', headerName: 'Promotional Code', width: 150 },
  { field: 'preferredLanguage', headerName: 'Preferred Language', width: 150 },
  { field: 'bookingCreated', headerName: 'Booking Created', width: 200 },
  { field: 'bookingUpdated', headerName: 'Booking Updated', width: 200 },
];

const EnquiryTable = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const [sort, setSort] = useState('asc');
  const [pageSize, setPageSize] = useState(7);
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [sortColumn, setSortColumn] = useState('name');

  function loadServerRows(currentPage: number, data: any[]) {
    return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  }

  const fetchTableData = useCallback(
    async (sort: string, q: string, column: string) => {
      await axios
       .get('/api/enquiries', {
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
      />
    </Box>
  );
};

export default EnquiryTable;
