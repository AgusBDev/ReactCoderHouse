import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

    const {idItem} = useParams(); 
    const url = 'http://localhost:3000/productos/' + idItem;

    const [producto, setProducto] = useState([]);
    

     useEffect(() => {      
        fetch(url)
        .then(response => response.json())
        .then(data => (           
            setProducto(data)
        ));        
    }, [])
    
    return (
        
        <div className='max-h-80'>
            <ItemDetail producto = {producto}/>
        </div>
    )
}
