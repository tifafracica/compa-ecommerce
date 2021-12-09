import { Box } from "@mui/system";
import { useParams } from 'react-router';
import { getItem } from "../services/apiCall";
import ItemDetail from "../itemDetails/itemDetail";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';

const ItemDetailsContainer = props => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemID } = useParams();
  
  useEffect(() => {
    async function fetchData() {
      const response = await getItem(itemID);
      setItem(response);
      setLoading(false);  
    }
    fetchData()
  }, [itemID]);
  
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
        <ItemDetail item={item}/>
      }
      </>
    );
  };
  
export default ItemDetailsContainer;