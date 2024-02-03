import { createTheme } from '@mui/material/styles';
export const primaryTheme = createTheme({
  palette: {
    primary: {
      main: '#039be5',
      light: '#e1f5fe',
      dark: '#01579b',
      contrastText: '#fff'
    }
  }
});
export const secondaryTheme = createTheme({
  palette: {
    primary: {
      main: '#26a69a',
      light: '#e0f2f1',
      dark: '#00695c',
      contrastText: '#fff'
    }
  }
});
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#9e9e9e',
      light: '#eeeeee',
      dark: '#212121',
      contrastText: '#fff'
    }
  }
});
export const gracefulTheme = createTheme({
  palette: {
    primary: {
      main: '#cddc39',
      light: '#f0f4c3',
      dark: '#9e9d24',
      contrastText: '#fff'
    }
  }
});
