import Item from "../item/item";

const ItemList = ({ items }) => {
  if (!items) return null
  
  const getItems = items.map((element) => {
    return <Item cardData={element} key={element.id} />
  })
  
  return (  
    <>
      { getItems }
    </>
    
  );
};
  
export default ItemList;