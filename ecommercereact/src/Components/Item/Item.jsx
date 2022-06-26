import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

export default function Item( {id, nombre} ) {

    

    return (
        <div className='flex items-center flex-col shadow-lg rounded-lg'>
            <div className='flex grow m-1'>
                <img src="https://images.wikidexcdn.net/mwuploads/wikidex/a/a3/latest/20210617201905/Artwork_Pikachu_UNITE.png" alt="" className="w-52 h-52" />
            </div>
            <div className='w-max m-1'>
                <h5>{nombre.toUpperCase()}</h5> 
            </div>   
            <div>
                <h6>$9999</h6>
            </div>
            <div className='m-1 mb-3'>
                <button className='border bg-black text-zinc-50 px-2 rounded-lg'>Ver Detalles del producto</button>
            </div>
        </div>
    )
}
