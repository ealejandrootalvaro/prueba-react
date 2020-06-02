import React, { useState } from 'react';
import axios from 'axios';

import OnlyNumbers from './Form/Input/only-numbers';
import FormSelect from './Form/Select';

import './Form.css'

let autoincrement = 1;

const options = [
    {
        value: 1,
        text: "Prueba"
    },
    {
        value: 2,
        text: "Prueba2"
    },
    {
        value: 3,
        text: "Prueba3"
    }
]

export default function ({addResult}) {

    let [value, onChangeValue] = useState("");
    let [description, setDescription] = useState("");
    let [trm, setTRM] = useState("");
    let [errors, setErrors] = useState("");

    function sendData() {
        
        let formErrors = []

        if (!value) {
            formErrors.push("Campo Valor es obligatorio");
        }

        if (!description) {
            formErrors.push("Campo Descripción es obligatorio");
        }

        if (formErrors.length) {
            setErrors(formErrors);
            return;
        }

        axios.post("https://httpbin.org/post", {
            value: value,
            description: options.find((option) => option.value == description).text,
            trm: trm
        }).then((data) => {
            addResult({...JSON.parse(data.data.data), id: autoincrement++});
            clearForm();
        })

    }

    function clearForm() {
        onChangeValue("");
        setDescription("");
        setTRM("");
        setErrors([])
    }

    return (
        <div>
            <h2>Formulario</h2>
            <div>
                <div className="form-group">
                    <label>Valor</label>
                    <OnlyNumbers value={value} onChange={onChangeValue} />
                </div>
                <div className="form-group">
                    <label>Descripción</label>
                    <FormSelect options={options} value={description} onChange={setDescription} />
                </div>
                <div className="form-group">
                    <label>TRM</label>
                    <OnlyNumbers value={trm} onChange={setTRM} />
                </div>
                {errors && <ul className="form-errors">{errors.map(error => <li>{error}</li> )}</ul>}
                <button type="button" className="btn btn-primary" onClick={sendData}>Guardar</button>
                <button type="button" className="btn btn-default" onClick={clearForm}>Limpiar formulario</button>
            </div>
        </div>
    )
}