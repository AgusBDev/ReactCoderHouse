import { useState, useEffect } from "react";
import React from 'react'

export default function Api() {

    const [pokemon, setPokemon] = useState([]);

    

    useEffect(() => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
        fetch(url)
        .then(response => response.json())
        .then(data => (
            setPokemon(data.results)
        ));

        console.log(pokemon);
    }, [])
    
  return (
    <div>
        <ul>
            { pokemon.map( (poke, index) => (
                <li key={index}> {poke.name} </li>
            ))}
        </ul>
    </div>
  )
}
