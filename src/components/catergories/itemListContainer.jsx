import { Box } from "@mui/system";
import { getItems } from "../services/apiCall";
import ItemList from "../itemList/itemList";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
/* import ItemCount from "../itemCount.js/itemCount"; */

const ItemListContainer = props => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    async function fetchData() {
      const response = await getItems();
      setProducts(response);
      setLoading(false);
    }
    fetchData()
  }, [setLoading]);

  /* const onAdd = (count, items) => () => {
      alert(`agregaste ${count} ${items}!`);
  }; */
  
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
        {/* <ItemCount stock={0} initial={1} onAdd={onAdd} /> */}
      </>
    );
  };
  
export default ItemListContainer;