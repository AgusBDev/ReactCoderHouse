import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail( { producto } ) {
    return (
        <div className='flex flex-row items-center'>
            <div className='w-1/2'>
                <img src="https://www.stockcenter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw3bf3b7c8/products/AD_FX3593/AD_FX3593-1.JPG" alt="" className=''/>
            </div>
            <div className='w-1/2 shadow-lg rounded-lg'>
                <div className='px-2'>
                    <h2 className='text-6xl'>{producto.nombre}</h2>
                    <h4 className='text-2xl my-4'>${producto.precio}</h4>
                    <h6>{producto.descripcion}</h6>
                </div>
                <div className='px-2 my-5'> 
                    <ItemCount stock={producto.stock}/>
                </div>
            </div>
        </div>
    )
}
