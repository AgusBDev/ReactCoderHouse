import React from 'react'

export default function Item( {nombre} ) {

    return (
        <div className='flex items-center w-1/3'>
            <h5>{nombre}</h5>
            <img src="" alt="" />
            <h6>{nombre}</h6>    
            <button>Ver Detalles del producto</button>
        </div>
    )
}
