import { useQuery, useQueryClient } from "@tanstack/react-query";
import Pokemon from "./pokemon";
import { useState } from "react";
import "../"

const PokemonList = () => {
    const [amount, setAmount] = useState(3);
    const queryClient = useQueryClient();

    const {data, _error, _success, _isLoading } = useQuery(["pokedex"], async () => {
        const rawPokedex = await fetch("https://pokeapi.co/api/v2/pokedex/1");
        return rawPokedex.json();

    },{keepPreviousData: true,})

    return(
        <>
         <div className="PokemonList">
         {data && data.pokemon_entries.slice(amount-3, amount).map((pokemon) =>  <Pokemon key={pokemon.entry_number} id={pokemon.entry_number} name={pokemon.pokemon_species.name}/>)} 
         </div>
         <button onClick={() => setAmount(amount-3)}>ver menos</button>
         <button onClick={() => setAmount(amount+3)}>ver mas</button>
        </>
    )
}

export default PokemonList;