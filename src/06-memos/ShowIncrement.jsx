import React, { useMemo } from 'react'
import { CallBackHook } from './CallBackHook'



export const ShowIncrement = React.memo(({ increment }) => {
    console.log('Me volvi a generar')
    
    return (
        <>
            <button
                className='btn btn-primary'
                onClick={() => {
                    increment( 5 );
                }}
            >
                Increntar
            </button>

        </>
    )
})
