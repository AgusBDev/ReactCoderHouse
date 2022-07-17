import React, { useState, useEffect } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/outline'
import './ItemCount.css'

export default function ItemCount( { stockProducto, onAdd, muestraBoton, defaultQuantity } ) {

    const verificarCantidad = ( num ) => {
        if(quantityToAdd + (num) >= 0 && quantityToAdd + (num) <= stock){
            setQuantityToAdd(quantityToAdd + (num));
        }      
    }

    const [stock, setStock] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(0);
    const [showButton, setshowButton] = useState(true);

    useEffect(() => {
        setStock(stockProducto == undefined ? 0 : stockProducto);
        setQuantityToAdd( defaultQuantity == undefined ? 0 : defaultQuantity);
        setshowButton(muestraBoton);
    }, [stockProducto]);

    //if(stock > 0){
        return (    
                <div className='flex flex-col justify-center items-center my-2'>
                    <div className="flex justify-center my-2 mx-4 shadow-lg rounded-lg border">
                        <span className='text-center'>
                            <a href="#" onClick={ (e) => (
                                    e.preventDefault(),
                                    verificarCantidad(1)
                                )}>
                                <PlusIcon className='w-5 mx-2 mt-0.5'/>
                            </a>
                        </span>
                        <div>
                            <input type="number" className='text-center' value={quantityToAdd} readOnly={true}/>
                        </div>
                        <span className='text-center'>
                            <a href="#" onClick={ (e) => (
                                    e.preventDefault(),
                                    verificarCantidad(-1) 
                                )}>
                                <MinusIcon className='w-5 mx-2 mt-0.5'/>    
                            </a>
                        </span>    
                    </div>
                    {showButton && (
                        <div className=''>
                            <button onClick={()=> onAdd( quantityToAdd )} className='border shadow-lg rounded-lg my-2 w-max bg-black'>
                                <p className='mx-6 text-white '>Agregar al carrito</p>
                            </button>
                        </div>) 
                    }
                </div>
        )
   //}else{
      //  return(
     //       <p className='text-red-600'>Este producto esta actualmente fuera de stock</p>
    //    );
   // }
}
