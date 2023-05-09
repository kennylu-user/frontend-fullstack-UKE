import React, { useEffect, useState } from "react";
import './InputText.css'
import axios from 'axios'

const InputText = () => {

    const [romanNr,setRomanNr] = useState("")
    const [inputValue, setInputValue] = useState('');
    const [convertedNr,setConvertedNr] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

    const handleClick = () => {
        setRomanNr(inputValue)
    }   
    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/convertednr/${romanNr}`)
        .then(response => {

            setConvertedNr(response.data);
            console.log(response.data);
        }
        )
        .catch(error => {
            console.log(error)
        });
    },[romanNr]);

    return(
        <>
        <div className="osg-grid">
            <div className="osg-grid__column--12">
                <div className="osg-input">
                    <input className="osg-input__input" type="text" autocomplete="on" aria-label="Label text" placeholder="Input text" pattern="[0-9]+" value={inputValue} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="osg-grid__column--12">
                <button className="osg-button" onClick={handleClick}>Button text</button>
            </div>
            {convertedNr.converted}
        </div>
        </>
    )
};

export default InputText;