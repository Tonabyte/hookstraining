import React from 'react'
import Children from './Children'
import { useState, useCallback } from 'react';

const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    /* const incrementar = ( num ) => {
        setValor( valor + num )
    } */

    const incrementar = useCallback((numFromChild) => {
      setValor(c => c + numFromChild)
    }, [setValor]);


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Children 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}

export default Padre;