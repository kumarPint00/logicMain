"use client";
import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { Button, InputAdornment, TextField } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import SearchIcon from '@mui/icons-material/Search';


interface Data {
  id: number;
  brand: string;
  model: string;
  year: string;
  category: string;
  status: string;
}

function createData(
  id: number,
  brand: string,
  model: string,
  year: string,
  category: string,
  status: string
): Data {
  return {
    id,
    brand,
    model,
    year,
    category,
    status,
  };
}

const rows = [
  createData(1, "Nissan", "Sunny", "2021", "SEDAN", "Active"),
  createData(2, "Nissan", "Sunny", "2023", "SEDAN", "Active"),
  createData(3, "Nissan", "Altima", "2021", "COMPACT", "Active"),
  createData(4, "Nissan", "Altima", "2023", "COMPACT", "Active"),
  createData(5, "Hyundai", "Tucson", "2021", "SUV", "Active"),
  createData(6, "Hyundai", "Tucson", "2023", "SUV", "Active"),
  createData(7, "Hyundai", "Sonata", "2021", "SEDAN", "Active"),
  createData(8, "Hyundai", "Sonata", "2023", "SEDAN", "Active"),
  createData(9, "Kia", "Sportage", "2021", "SUV", "Active"),
  createData(10, "Kia", "Sportage", "2023", "SUV", "Active"),
  createData(11, "Kia", "Picanto", "2021", "ECONOMY", "Active"),
  createData(12, "Kia", "Picanto", "2023", "ECONOMY", "Active"),
  createData(13, "Mazda", "CX-5", "2021", "HATCHBACK", "Active"),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "brand",
    numeric: false,
    disablePadding: true,
    label: "Brand",
  },
  {
    id: "model",
    numeric: true,
    disablePadding: false,
    label: "Model",
  },
  {
    id: "year",
    numeric: true,
    disablePadding: false,
    label: "Year",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "status",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.label ? "left" : "center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ fontWeight: "bold", fontSize: "15px" }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="left" sx={{ fontWeight: "bold", fontSize: "15px" }}>
          Action
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

const ManageCarTable = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("brand");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchBrand, setSearchBrand] = React.useState<string>("");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const filteredRows = rows.filter((row) =>
    row.brand.toLowerCase().includes(searchBrand.toLowerCase())
  );

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, filteredRows]
  );
  return (
    <section className="manageCarTable">
      <div className="searchBar">
        <TextField
          id="outlined-basic"
          label="Search"
          type="text"
          variant="outlined"
          value={searchBrand}
          size="small"
          color="success"
          sx={{width:"50%"}}
          focused
          onChange={(e) => setSearchBrand(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="success" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      {/* <input
        type="text"
        placeholder="Search by brand..."
        value={searchBrand}
        onChange={(e) => setSearchBrand(e.target.value)}
      /> */}
      <Box sx={{ width: "100%" }}>
        <Paper
          className="tableMuiPaper"
          sx={{
            width: "100%",
            mb: 2,
            paddingLeft: "15px",
            paddingRight: "15px",
            backgroundColor: "#534e4e36",
          }}
        >
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  //   const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      //   aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      //   selected={isItemSelected}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.brand}
                      </TableCell>
                      <TableCell align="left">{row.model}</TableCell>
                      <TableCell align="left">{row.year}</TableCell>
                      <TableCell align="left">{row.category}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">
                        <HighlightOffIcon color="error" fontSize="medium" />
                        <DriveFileRenameOutlineIcon
                          color="success"
                          fontSize="medium"
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </section>
  );
};

export default ManageCarTable;
