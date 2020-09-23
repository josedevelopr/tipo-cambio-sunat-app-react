import React,{useState} from 'react';
import Fab from '@material-ui/core/Fab';
import TodayIcon from '@material-ui/icons/Today';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
    palette: {
      primary: {        
        light: '#757ce8',
        main: '#ffab8f',
        dark: '#002884',
        contrastText: '#fff',
      },
    },
  });

export default function SeleccionarMesButton() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => setOpen(isOpen => !isOpen)}
              size="large"
            >
              Mes
            </Button>
            {/* <Fab 
            size="large" 
            color="primary"
            aria-label="add"
            className={classes.margin}         
            onClick={() => setOpen(isOpen => !isOpen)}
            >
            <TodayIcon             
                style={{color:'#fff'}}
                />
            </Fab>              */}
        </ThemeProvider>           
        <DatePicker 
          open={open} 
          style={{display:"none"}} 
          onChange={handleDateChange} 
          onAccept={() => setOpen(isOpen => !isOpen)}
        />
      </MuiPickersUtilsProvider>        
    )
}
