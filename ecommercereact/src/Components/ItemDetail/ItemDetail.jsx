import React, { useState, useEffect, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { cartContext } from '../../Context/CartContext';

export default function ItemDetail( { producto } ) {

    const { addItem } = useContext(cartContext);

    const onAdd = ( quantityToAdd ) => {
        addItem(producto, quantityToAdd);
        //setCount(<p>Producto agregado con exito</p>);
    }
    
    const[count, setCount] = useState(<></>);  

    useEffect(() => {
        setCount(<ItemCount stockProducto={producto.Stock} onAdd={onAdd} muestraBoton={true} defaultQuantity={0}/>);
    }, [producto])


    return (
        <div className='flex flex-row justify-center align-middle h-1/2 mt-10'>
            <div className=''>
                <img src={producto.img} alt="" className='object-contain w-72 h-72'/>
            </div>
            <div className='w-1/2 shadow-lg rounded-lg p-6'>
                <div className='px-2'>
                    <h2 className='text-6xl'>{producto.Marca + " " + producto.Modelo}</h2>
                    <h4 className='text-2xl my-4'>${producto.Precio}</h4>
                    <h6>{producto.descripcion}</h6>
                </div>
                <div className='px-2 my-5'> 
                    {count}
                </div>
            </div>
        </div>
    )
}
