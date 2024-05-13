import React, { useEffect, useState, useCallback } from 'react';
import { DataGrid, GridColumns, GridRenderCellParams, GridSortModel } from '@mui/x-data-grid';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomChip from 'src/@core/components/mui/chip';
import CustomAvatar from 'src/@core/components/mui/avatar';
import ServerSideToolbar from 'src/views/table/data-grid/ServerSideToolbar';

const statusObj = {
  Pending: { title: 'Pending', color: 'primary' },
  Completed: { title: 'Completed', color: 'success' },
  Failed: { title: 'Failed', color: 'error' },
};

const columns: GridColumns = [
  {
    field: 'bookingId',
    headerName: 'Booking ID',
    width: 150,
  },
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <CustomAvatar
        skin="light"
        color="primary"
        sx={{ mr: 3, fontSize: ".8rem", width: "1.875rem", height: "1.875rem" }}
      >
        {getInitials(params.row.user)}
      </CustomAvatar>
    ),
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 150,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant="body2" sx={{ color: "text.primary" }}>
        {params.row.amount}
      </Typography>
    ),
  },
  {
    field: 'paymentMethod',
    headerName: 'Payment Method',
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params: GridRenderCellParams) => {
      const status = statusObj[params.row.status];
      return (
        <CustomChip
          size="small"
          skin="light"
          color={status.color}
          label={status.title}
          sx={{ "&.MuiChip-label": { textTransform: "capitalize" } }}
        />
      );
    },
  },
  {
    field: 'transactionDate',
    headerName: 'Transaction Date',
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant="body2" sx={{ color: "text.primary" }}>
        {params.row.transactionDate}
      </Typography>
    ),
  },
];

const TransactionTable = () => {
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const [sort, setSort] = useState<SortType>('asc');
  const [pageSize, setPageSize] = useState<number>(7);
  const [rows, setRows] = useState([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortColumn, setSortColumn] = useState<string>('bookingId');

  function loadServerRows(currentPage: number, data: any[]) {
    return data.slice(currentPage * pageSize, (currentPage + 1) * pageSize);
  }

  const fetchTableData = useCallback(
    async (sort: SortType, q: string, column: string) => {
      await axios
       .get('/api/transactions', {
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

  const handleSortModel = (newModel: GridSortModel) => {
    if (newModel.length) {
      setSort(newModel[0].sort);
      setSortColumn(newModel[0].field);
      fetchTableData(newModel[0].sort, searchValue, newModel[0].field);
    } else {
      setSort('asc');
      setSortColumn('bookingId');
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
            onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value),
          },
        }}
      />
    </Box>
  );
};

export default TransactionTable;
