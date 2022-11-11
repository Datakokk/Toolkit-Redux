import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( getPokemons() )  
  }, [])

  const { pokemons, page, isLoading } = useSelector(state => state.pokemons)

  console.log(pokemons)
  return (
    <>
        <h1>PokemonApp</h1>
        <hr />
        <span>Loading: { isLoading ? 'True': 'False' }</span>

        <ul>
          {
            pokemons.map( pokemon => <li key={ pokemon.url }> { pokemon.name }</li>)
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons( page ))}
        >
          Next
        </button>
    </>
  )
}
