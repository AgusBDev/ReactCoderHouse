import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'


export default function ItemList() {

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=0';

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => (
            setPokemon(data.results)
        ));

        console.log(pokemon);
    }, [])

    return (
    <div className='flex flex-row w-max'>
        {
            pokemon.map( (poke, index) => (
                <div className='w-1/3'>
                    <Item key={index} nombre={poke.name}/>
                </div>
            ))
        }
    </div>
    )
}
