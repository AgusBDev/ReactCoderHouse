import React from 'react'

export default function ItemListContainer( {greeting} ) {
  return (
    <div className="container mt-12">
        <strong>{greeting}</strong>
    </div>
  )
}
