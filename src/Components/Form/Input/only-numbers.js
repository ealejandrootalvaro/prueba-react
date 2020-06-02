import React from 'react';

const regex = /[0-9]|,/;

function formatNumber(str) {

    if (!str) {
        return "";
    }

    let [number, decimals ] = str.split(",");

    let reversed = number.split("").reverse();

    let formated = "";

    for (let i = 0; i < reversed.length; i++) {

        formated += reversed[i];

        if ((i+1) % 3 === 0 && i < reversed.length-1) {
            formated = `${formated}.`;
        }

    }

    if (decimals) {
        return `${formated.split("").reverse().join("")},${decimals}`
    }
    
    return formated.split("").reverse().join("");


}

function allowOnlyNumbers(str) {

    if (!str) {
        return "";
    }

    return formatNumber(
        str.split("").reduce((acc, value) => {
            if (regex.test(value)) {
                return acc + value;
            }   

            return acc;

        }, "")
    );

}

export default function OnlyNumbers({ value, onChange, onBlur }) {

    function handleOnChange(e) {
        onChange(e.target.value);
    }

    function handeOnBlur(e) {
        onChange(allowOnlyNumbers(e.target.value));
    }

    return (
        <input className="form-control" value={value} onChange={handleOnChange} onBlur={handeOnBlur}></input>
    )
}