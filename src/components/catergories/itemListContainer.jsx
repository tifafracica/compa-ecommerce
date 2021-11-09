import { Box } from "@mui/system";
import ItemCount from "../itemCount.js/itemCount";

const ItemListContainer = props => {

    const onAdd = (count, items) => {
        alert(`agregaste ${count} ${items}!`)
    }

    return ( 
        
        <Box sx={{ justifyContent: 'center', textAlign: 'center'}}>
            <p>Aqui van a ir las categorias</p>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </Box>
        
     );
  };
  
  export default ItemListContainer;