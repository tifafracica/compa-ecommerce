import './App.css';
import Navbar from "./components/navbar/navbar";
import { Route, Routes } from 'react-router';
import ItemListContainer from "./components/catergories/itemListContainer";
import ItemDetailsContainer from './components/itemDetails/itemDetailsContainer';
import Cart from './components/cart/cart';
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
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryID" element={<ItemListContainer />} />
          <Route path="/item/:itemID" element={<ItemDetailsContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
