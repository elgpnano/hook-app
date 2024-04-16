import { useCounter, useFetch } from "../hooks"
import { LoadingMessaje } from "./LoadingMessaje";
import { PokemonCard } from "./PokemonCard";

export const Layout = () => {

  const { counter, decrement, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
  console.log(data) //


  return (
    <>
      <h1>Informacion Pokemon</h1>
      <hr />
      {
        isLoading
          ? <LoadingMessaje />
          : <PokemonCard
            id={data.id}
            name={data.name}
            sprites={[ // Se envía a la componente un array por las propety
              data.sprites.front_default,
              data.sprites.front_shiny,
              data.sprites.back_default,
              data.sprites.back_shiny,
            ]} />
      }
      <pre>{data?.name}</pre> {/* // Si hay data imprimir nombre */}
      <button className="btn btn-primary mt-2" onClick={counter > 1 ? () => decrement() : null}>Anterior</button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>siguiente</button>
    </>
  )
}
