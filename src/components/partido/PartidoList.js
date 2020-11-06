import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const PartidoList = () => {

    const [partidos, setPartidos] = useState([])

    useEffect(() => {
            async function getPartidos () {
                const { data } = await axios.get('https://dadosabertos.camara.leg.br/api/v2/partidos')
                setPartidos(data)
                console.log('data ', data)
            }
            getPartidos()
            console.log('partidos1 ', partidos)     
    }, [])

    return (
        <>
        <h1>Partidos</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
             {/* {partidos.dados.map(partido =>
                <tr>
                    <td>{partido}</td>
                </tr> )} */}
            </tbody>
        </table>
        </>
    )
}