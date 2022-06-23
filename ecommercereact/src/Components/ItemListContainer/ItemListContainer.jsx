import React from 'react'
import ItemList from '../ItemList/ItemList';

export default function ItemListContainer( {greeting} ) {
  
  return (
    <div className="container mt-12">
        {/* <strong>{greeting}</strong> */}
        <ItemList/>
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
    </div>
  )
}
