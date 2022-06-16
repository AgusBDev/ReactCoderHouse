import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/outline'

export default function CartWidget({
  className
}) {
  return (
    <div className={`${className} flex items-center`}>
        <a href="#" className="border-white">       
            <i><ShoppingCartIcon className='w-5 mr-2 mt-0.5'/></i>         
        </a>
        {/* Cantidad de items del carrito van aca  */}
        <span>3</span>
    </div>
  )
}
