import React from 'react';

export default function Select({value, options, onChange}) {

    let withDefaultOptions = [{
        value: 0,
        text: "Seleccione..."
    }].concat(options)

    return (
        <select className="form-control" value={ value ? value : 0 } onChange={(e) => onChange(e.target.value)} >
            {withDefaultOptions.map((selectOption) => <option key={selectOption.value} value={selectOption.value}>{selectOption.text}</option>)}
        </select>
    )
}