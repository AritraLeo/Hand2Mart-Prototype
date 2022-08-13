// import { createTheme } from '@mui/material/styles';
import { purple, blueGrey } from '@mui/material/colors';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

export default createTheme(theme);