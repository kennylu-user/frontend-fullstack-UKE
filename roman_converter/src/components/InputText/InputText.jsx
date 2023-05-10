import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import './InputText.css';
import axios from 'axios';

const InputText = () => {

    const [romanNr,setRomanNr] = useState("")
    const [inputValue, setInputValue] = useState('');
    const [convertedNr,setConvertedNr] = useState("")
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [logs, setLogs] = useState([])

const openModal = () => {
    setModalIsOpen(true);
}

const closeModal = () => {
    setModalIsOpen(false);
}

  const handleInputChange = (event) => {
    const romanNumeralRegex = /^M*(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    const newValue = event.target.value.toUpperCase();
    if (romanNumeralRegex.test(newValue)) {
        setInputValue(newValue);
      }
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
            if(error.response && error.response.status === 500){
                alert("Enter a valid roman number")
            }
            
        });
    },[romanNr]);
    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/logs')
        .then(response => {
            console.log(response.data)
            setLogs(response.data)
        })
        .catch(error => {
            console.log(error)
        });
    },[convertedNr])

    return(
        <>
        <div className="osg-grid osg-grid--gap-row-large osg-grid--center">
            <div className="osg-grid osg-grid--gap">
                <div className="osg-grid__column--12 osg-grid__column--start-9-breakpoint-medium osg-grid__column--end-12-breakpoint-medium">
                    <div className="osg-input">
                        <input className="osg-input__input" 
                        type="text"
                        placeholder="Input text" 
                        pattern="^[IVXLCDM]+$"
                        value={inputValue} 
                        onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="osg-grid__column--12 osg-grid__column--start-10-breakpoint-medium osg-grid__column--end-10-breakpoint-medium">
                    <div className=" osg-text--align-center">
                        <button className="osg-button" onClick={handleClick}>Convert</button>
                    </div>
                </div>
            </div>
            <div className="osg-grid__column--5 osg-padding-3">
                {convertedNr.converted}
            </div>
            <div className="osg-grid__column--5 osg-padding-3">
                <button className="osg-button" onClick={openModal}>Log</button>
                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                    <div className="logInfo osg-padding-3">
                        {logs.map((logObj) => (
                            <div>{logObj.timeStamp}: {logObj.convertedNr}</div>
                        ))}
                        <div>
                        </div>
                    </div>
                    <button className="modal-button osg-button" onClick={closeModal}>Close</button>
                </Modal>
            </div>

        </div>
        </>
    )
};

export default InputText;