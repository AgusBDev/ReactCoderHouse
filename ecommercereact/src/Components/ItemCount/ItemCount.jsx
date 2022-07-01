import React, { useState, useEffect } from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/outline'
import './ItemCount.css'

export default function ItemCount( { stock, initial } ) {

    const onAdd = ( num, cant, stock ) => {
        if(cant + (num) >= 0 && cant + (num) <= stock){
          return(cant + (num));
        }else{
          return cant;
        }        
    }

    const [maxStock, setMaxStock] = useState(0);
    const [cant, setCant] = useState(0);
    
    useEffect(() => {
        setMaxStock(stock);
    }, [stock]);

    if(stock > 0){
        return (    
                <div className='flex flex-col items-center my-2'>
                    <div className="flex justify-center my-2 mx-4 shadow-lg rounded-lg border">
                        <span className='text-center'>
                            <a href="#" onClick={ (e) => (
                                    e.preventDefault(),
                                    setCant(onAdd(1, cant, maxStock))
                                )}>
                                <PlusIcon className='w-5 mx-2 mt-0.5'/>
                            </a>
                        </span>
                        <div>
                            <input type="number" className='text-center' value={cant} readOnly={true}/>
                        </div>
                        <span className='text-center'>
                            <a href="#" onClick={ (e) => (
                                    e.preventDefault(),
                                    setCant(onAdd(-1, cant, maxStock)) 
                                )}>
                                <MinusIcon className='w-5 mx-2 mt-0.5'/>    
                            </a>
                        </span>    
                    </div>
                    <div className=''>
                        <button className='border shadow-lg rounded-lg my-2 w-max bg-black'>
                            <p className='mx-6 text-white '>Agregar al carrito</p>
                        </button>
                    </div>
                </div>
        )
    }else{
        return(
            <p className='text-red-600'>Este producto esta actualmente fuera de stock</p>
        );
    }
}
