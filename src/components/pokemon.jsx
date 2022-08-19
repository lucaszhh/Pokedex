import { useQuery, useQueryClient } from "@tanstack/react-query";


const Pokemon = ({id,name}) => {
    const queryClient = useQueryClient();

    const {data, error, success, isLoading } = useQuery(["pokemon"+id], async () => {
        const rawPokedex = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return rawPokedex.json();
    }, {keepPreviousData: true,})

    console.log(data);


    return(
        <>
            <div className="container-pokemon" >
                { data &&
                <div className="card-pokemon">
                        <h1>{name}</h1>
                        <h2>Id: {id}</h2>
                    <img  src={data.sprites.front_default} alt='Imagen'></img>
                </div>
                }
            </div>
        </>
    )
}

export default Pokemon;