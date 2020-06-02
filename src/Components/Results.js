import React, { useState } from 'react';

import Form from './Form';

export default function Results() {

    let [results, setResults] = useState([]);

    function addResult(result) {
        setResults([...results, result]);
    }

    return (
        <div>
            <Form addResult={addResult} />
            <hr style={{margin: "50px 0px 30px 0px"}}></hr>
            <div>
                <h2>Resultados</h2>
                <table className="table">
                    <thead><tr>
                        <th>
                            Consecutivo
                    </th>
                        <th>
                            Valor
                    </th>
                        <th>
                            Descripción
                    </th>
                        <th>
                            TRM
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                        {results.map((result => <tr>
                            <td>{result.id}</td>
                            <td>{result.value}</td>
                            <td>{result.description}</td>
                            <td>{result.trm}</td>
                        </tr>))}
                    </tbody>
                </table>
            </div>

        </div>
    )

}