import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function Item( {id, nombre} ) {



    return (
        <div key={id} className='flex items-center flex-col border border-black'>
            <h5>{nombre}</h5>
            <img src="" alt="" />
            <h6>{id}</h6>    
            <button className='border border-black'>Ver Detalles del producto</button>
            <ItemCount initial={1} stock={5}/>
        </div>
    )
}
