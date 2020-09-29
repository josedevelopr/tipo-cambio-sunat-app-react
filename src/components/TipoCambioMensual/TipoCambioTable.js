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
import {format} from 'date-fns';

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

function formatTheDateYall (date) 
{
  const [ year, month, day ] = date.substr(0, 10).split('-')
  return format(new Date(
          year,
          (month - 1),
          day,
  ), 'yyyy/MM/dd')
}

function createData(exchangeRate) 
{
  //let fechac      = format(new Date(exchangeRate.fecha).toISOString(), 'yyyy-MM-dd');//dateFns.parse(exchangeRate.fecha);// new Date(exchangeRate.fecha).toISOString();
  let fechac      = formatTheDateYall(exchangeRate.fecha);
  let dia         = new Date(fechac).getDate(),
      tcCompra    = exchangeRate.precioCompra.toFixed(4),
      tcVenta     = exchangeRate.precioVenta.toFixed(4),
      tcPromedio  = exchangeRate.precioPromedio.toFixed(4);

  
  console.log(fechac);
  return { dia, tcCompra, tcVenta, tcPromedio };
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TipoCambioTable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const rows = props.exchangeRatelst
                    .map( er => createData(er));

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
        count={props.exchangeRatelst.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}