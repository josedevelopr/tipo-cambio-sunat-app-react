import React,{useState} from 'react';
import Fab from '@material-ui/core/Fab';
import TodayIcon from '@material-ui/icons/Today';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';


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

function CalendarButton(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);    

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <ThemeProvider theme={theme}>
            <Fab 
              size="large" 
              color="primary"
              aria-label="add"
              className={classes.margin}         
              onClick={() => setOpen(isOpen => !isOpen)}
            >
            <TodayIcon             
                style={{color:'#fff'}}
                />
            </Fab>             
        </ThemeProvider>           
        <DatePicker 
          open={open} 
          style={{display:"none"}}  
          onChange={ d => props.onChangeDate(d)} 
          onAccept={() => setOpen(isOpen => !isOpen)}          
          views={["year", "month", "date"]}
          value={props.date}
          maxDate={new Date()}
          onClose={() => setOpen(isOpen => !isOpen)}
        />        
      </MuiPickersUtilsProvider>        
    )
}

export default CalendarButton;