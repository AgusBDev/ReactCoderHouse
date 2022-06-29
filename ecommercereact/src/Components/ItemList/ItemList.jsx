import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'


export default function ItemList() {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {      
        fetch(url)
        .then(response => response.json())
        .then(data => (
            setPokemon(data.results)
        ));        
    }, [])

    return (
    <div className='grid grid-cols-4 gap-20'>
        {
            pokemon.map( (poke, index) => (
                <div className=''>     
                    {console.log(index)}           
                    <Item key={index} id={index} nombre={poke.name}/>
                </div>
            ))
        }
    </div>
    )
}
