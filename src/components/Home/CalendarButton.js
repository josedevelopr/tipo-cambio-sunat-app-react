import React from 'react';
import Fab from '@material-ui/core/Fab';
import TodayIcon from '@material-ui/icons/Today';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

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

export default function CalendarButton() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Fab 
            size="large" 
            color="primary"
            aria-label="add"
            className={classes.margin}         
            >
            <TodayIcon             
                style={{color:'#fff'}}
                />
            </Fab>             
        </ThemeProvider>           
    )
}
