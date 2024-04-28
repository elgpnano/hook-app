import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'


export const LoginPage = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Login Page</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button
        className='btn btn-primary'
        onClick={() => setUser(
          {
            name: 'Leonardo',
            email: 'leo@gmail.com',
            id: 132
          }
        )}
      >Agregar</button>
    </>

  )
}
