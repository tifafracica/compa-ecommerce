import './App.css';
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/catergories/itemListContainer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e53935'
    },
    secondary: {
      main: '#ffeb3b',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <ItemListContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
