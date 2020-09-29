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

export default function SeleccionarMesButton(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);    

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
        </ThemeProvider>           
        <DatePicker 
          open={open} 
          style={{display:"none"}} 
          onChange={ d => {
            props.onChangeMonth(d);
            setOpen(isOpen => !isOpen);
          }}
          views={["year", "month"]}
          value={props.date}
          maxDate={new Date()} 
          onAccept={() => setOpen(isOpen => !isOpen)}
          onClose={() => setOpen(isOpen => !isOpen)}
        />
      </MuiPickersUtilsProvider>        
    )
}
