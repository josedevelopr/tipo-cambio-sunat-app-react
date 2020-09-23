import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'dia', label: 'Día', minWidth: 20 },  
  {
    id: 'tcCompra',
    label: 'TC\u00a0Compra',
    minWidth: 20,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tcVenta',
    label: 'TC\u00a0Venta',
    minWidth: 20,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'tcPromedio',
    label: 'TC\u00a0Promedio',
    minWidth: 20,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(dia, tcCompra, tcVenta, tcPromedio) {  
  return { dia, tcCompra, tcVenta, tcPromedio };
}

const rows = [
  createData('01', 2.563, 2.713, 2.52),
  createData('02', 2.563, 2.713, 2.52),
  createData('03', 2.563, 2.713, 2.52),
  createData('04', 2.563, 2.713, 2.52),
  createData('05', 2.563, 2.713, 2.52),
  createData('06', 2.563, 2.713, 2.52),
  createData('07', 2.563, 2.713, 2.52),
  createData('08', 2.563, 2.713, 2.52),
  createData('09', 2.563, 2.713, 2.52),
  createData('10', 2.563, 2.713, 2.52),
  createData('11', 2.563, 2.713, 2.52),
  createData('12', 2.563, 2.713, 2.52),
  createData('13', 2.563, 2.713, 2.52),
  createData('14', 2.563, 2.713, 2.52),
  createData('15', 2.563, 2.713, 2.52),
  createData('16', 2.563, 2.713, 2.52),
  createData('17', 2.563, 2.713, 2.52),
  createData('18', 2.563, 2.713, 2.52),
  createData('19', 2.563, 2.713, 2.52),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TipoCambioTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.dia}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}