import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'


export default function ItemList() {

    const url = 'http://localhost:3000/productos';

    const [producto, setProducto] = useState([]);
    console.log(producto);
    useEffect(() => {      
        fetch(url)
        .then(response => response.json())
        .then(data => (           
            setProducto(data)
            ));        
        }, [])

    return (
    <div className='grid grid-cols-4 gap-20'>
        {
            producto.map( prod => (
                <div className='' key={prod.id}>                                 
                    <Item  producto={prod}/>
                </div>
            ))
        }
    </div>
    )
}
