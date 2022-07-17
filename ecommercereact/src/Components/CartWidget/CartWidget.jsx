import React, {useContext, useEffect, useState} from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { cartContext } from '../../Context/CartContext';

export default function CartWidget({
  className
}) {

  const { quantity } = useContext(cartContext);
  const [ cantItems, setCantItems ] = useState( typeof quantity == "undefined" ? 0 : quantity);

  useEffect(() => {
    setCantItems( typeof quantity == "undefined" ? 0 : quantity);
  }, [quantity]);
  

  return (
    <div className={`${className} flex items-center`}>
        <a href="/cart" className="border-white">       
            <i><ShoppingCartIcon className='w-5 mr-2 mt-0.5'/></i>         
        </a>
        <span> {cantItems} </span>
    </div>
  )
}
