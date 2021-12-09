import { Box } from "@mui/system";
import { getItems } from "../services/apiCall";
import ItemList from "../itemList/itemList";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';


const ItemListContainer = props => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { categoryID } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      const id = categoryID * 1
      const response = await getItems(id);
      setProducts(response);
      setLoading(false);  
    }
    fetchData()
  }, [categoryID]);
  
  return (  
    <>
    {loading ?
        <Box sx={{ minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <CircularProgress/>
        </Box>

        :
          <Box sx={{ padding: 5, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 4}}>
            <ItemList items={products} />
          </Box>  
      }
        
      </>
    );
  };
  
export default ItemListContainer;