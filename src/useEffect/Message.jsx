import { useEffect } from "react"


export const Message = () => {
  
  useEffect(() => {//cuando se crea el componente por primera vez
    console.log('Message Mounted')
  
    return () => {//Cuando se elimina el componente se destruye fisicamente
      console.log('Message Unmonted')
    }
  }, [])
  
  return (
    <>
    <h3>Usuario ya existe</h3>
    </>
  )
}
