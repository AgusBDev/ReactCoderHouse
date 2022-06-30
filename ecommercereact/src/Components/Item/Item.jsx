import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

export default function Item( { producto } ) {    

    return (
        <div className='flex items-center flex-col shadow-lg rounded-lg'>
            <Link to={`/item/${producto.id}`}>
                <div className='flex grow m-1'>
                    <img src={producto.img} alt="" className="w-52 h-52" />
                </div>
                <div className='w-max m-1'>
                    <h5>{producto.Marca.toUpperCase() + " " + producto.Modelo.toUpperCase()}</h5> 
                </div>   
                <div>
                    <h6>${producto.Precio}</h6>
                </div>
                <div className='m-1 mb-3'>
                    <button className='border bg-black text-zinc-50 px-2 rounded-lg'>Ver Detalles del producto</button>
                </div>
            </Link>
        </div>
    )
}
