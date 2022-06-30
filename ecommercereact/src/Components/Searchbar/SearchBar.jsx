import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import './SearchBar.css'

export default function SearchBar() {
  return (
    <form action="" className='border shadow-lg rounded-lg relative flex items-center'>
        <input type="search" 
        placeholder="Busca en nuestros productos" className="ml-3 h-7 w-72 justify-center outline-none"></input>
        <button className=''><SearchIcon className='w-5 mr-2'/></button>
    </form>
  )
}
