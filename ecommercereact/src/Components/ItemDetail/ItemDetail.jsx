import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail( { producto } ) {
    return (
        <div className='flex flex-row items-center'>
            <div className='w-1/2'>
                <img src={producto.img} alt="" className=''/>
            </div>
            <div className='w-1/2 shadow-lg rounded-lg'>
                <div className='px-2'>
                    <h2 className='text-6xl'>{producto.Marca + " " + producto.Modelo}</h2>
                    <h4 className='text-2xl my-4'>${producto.Precio}</h4>
                    <h6>{producto.descripcion}</h6>
                </div>
                <div className='px-2 my-5'> 
                    {console.log(producto.Stock)}
                    <ItemCount stock={producto.Stock}/>
                </div>
            </div>
        </div>
    )
}
