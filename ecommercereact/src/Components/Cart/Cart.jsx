import React, { useContext, useState, useEffect } from 'react'
import { cartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

export default function Cart() {

    const { cart, removeItem, totalPrice, clear } = useContext(cartContext);
    const [carrito, setCarrito] = useState(<></>);

    useEffect(() => {
        mostrarCarrito();
    }, [cart])

    const mostrarCarrito = () => {
        //console.log(cart.length)
        if(cart.length != 0 && !cart.includes(undefined)){           
            setCarrito(
                cart.map( item => {
                    return(                   
                    <div className='flex m-6 justify-around' key={item.id}>
                        <img src={item.img} alt="" className="w-40 h-40"/>
                        <p className='self-center ml-7 text-2xl'>{item.Marca} {item.Modelo}</p>
                        <p className='self-center ml-7 text-2xl'>${item.Precio}</p>
                        <ItemCount muestraBoton={false} defaultQuantity={item.amount} stockProducto={item.Stock}/>
                    </div>)
                })                
            )           
        }
        else{
            setCarrito(
                <div className='flex m-6 justify-around '>
                    <p>NADA PARA MOSTRAR</p>
                </div>
            )
        }
    }
    
    console.log(carrito);

    return (
        <div className='container mt-5 mx-5 flex justify-center'>
            <div className='min-h-[20rem] w-3/4 bg-gray-300'>
                {carrito}
                <div className='flex flex-col items-center m-6'>
                    <p className='text-2xl'>Total productos: ${totalPrice}</p>
                    <button className='border shadow-lg rounded-lg my-2 w-max bg-black' onClick={clear}><p className='mx-6 text-white '>Finalizar Compra</p></button>
                </div>
            </div>
        </div>
    );
}
