import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {

    const {idItem} = useParams(); 
    const url = 'http://localhost:3000/productos/' + idItem;
    console.log(url)
    const [producto, setProducto] = useState([]);
    

     useEffect(() => {      
        fetch(url)
        .then(response => response.json())
        .then(data => (           
            setProducto(data)
        ));        
    }, [])
    
    return (
        
        <div>
            <ItemDetail producto = {producto}/>
        </div>
    )
}
