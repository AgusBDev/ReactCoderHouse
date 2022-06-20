import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function ItemListContainer( {greeting} ) {

  const onAdd = ( num, cant, stock ) => {
    if(cant + (num) >= 0 && cant + (num) <= stock){
      return(cant + (num));
    }else{
      return cant;
    }        
  }
  
  return (
    <div className="container mt-12">
        <strong>{greeting}</strong>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>
  )
}
