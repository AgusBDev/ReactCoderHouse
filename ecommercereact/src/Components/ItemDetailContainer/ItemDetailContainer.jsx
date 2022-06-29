import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const getItem = { nombre: 'Zapatilla Marca Pirulo', precio: '14500', descripcion: 'Comodidad total, velocidad sin limites, las altas llantas definitivas', stock: 10};

    const [producto, setProducto] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setProducto(productoObj);    
        }, 1000);        
    }, [])
    
    return (
        
        <div>
            <ItemDetail producto = {producto}/>
        </div>
    )
}
