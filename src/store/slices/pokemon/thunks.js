import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const getPokemons = (page = 0) => async ( dispatch, getState ) => {
    dispatch( startLoadingPokemons() );

    //ToDO: realizar peticion App
    /*const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const { results } = await resp.json();*/

    /**Axios */
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);


    //dispatch( setPokemons({ pokemons: results, page: page + 1})) FETCH
    dispatch( setPokemons({ pokemons: data.results, page: page + 1 })) 
}