import React, { useEffect, useState } from 'react'

export const DeputadoList = () => {

    const [deputados, setDeputados] = useState([])


    return (
        <>
        <h1>Deputados</h1>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
             {deputados.map(deputado =>
                <tr>
                    <td>{deputado.nome}</td>
                </tr> )}
            </tbody>
        </table>
        </>
    )
}