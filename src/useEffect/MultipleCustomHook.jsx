import { useFetch } from "../hooks"

export const MultipleCustomHook = () => {
  
  const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/3');
  
  
  return (
    <>
    <h1>Informacion Pokemon</h1>
    <hr />
    <pre>{data?.name}</pre> {/* // Si hay data imprimir nombre */}
    </>
  )
}
