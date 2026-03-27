import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const CardList = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        const fetchPokemon = async()=>{
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
            const result = await res.json()
            console.log("result",result)
            
            const detailsData = await Promise.all(
              result.results.map(async(pokemon)=>{

                const res= await fetch(pokemon.url)
                const data= await res.json()
                console.log("data",data)
                return data
              }),
            )
            setData(detailsData)
        }
        fetchPokemon()

    },[])
  return (
    <>
      <div className="p-6 flex flex-wrap gap-6 justify-center">
        {data.map((pokemon)=>(
          <Cards key={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} type={pokemon.types[0].type.name}/>
        ))}
      </div>
    </>
  );
}

export default CardList