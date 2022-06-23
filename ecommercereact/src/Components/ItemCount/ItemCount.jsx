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

    const [maxStock, setMaxStock] = useState();
    const [cant, setCant] = useState(0);
    
    useEffect(() => {
        setMaxStock(stock);
    }, []);

    if(stock > 0){
        return (    
                <div className=' border border-black flex flex-col items-center my-2'>
                    <div className="flex justify-center my-2 mx-4  border border-black">
                        <span className='text-center'>
                            <a href="#" onClick={ () => setCant(onAdd(1, cant, maxStock))}>
                                <PlusIcon className='w-5 mx-2 mt-0.5'/>
                            </a>
                        </span>
                        <div>
                            <input type="number" className='text-center' value={cant} readOnly={true}/>
                        </div>
                        <span className='text-center'>
                            <a href="#" onClick={ () => setCant(onAdd(-1, cant, maxStock)) }>
                                <MinusIcon className='w-5 mx-2 mt-0.5'/>    
                            </a>
                        </span>    
                    </div>
                    <div className=''>
                        <button className='border border-black my-2 w-max'>
                            <p className='mx-6'>Agregar al carrito</p>
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
