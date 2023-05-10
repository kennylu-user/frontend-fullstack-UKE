import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import './InputText.css';
import axios from 'axios';
import PaginatedList from "../PaginatedList/PaginatedList.jsx";

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
        if (inputValue == ""){
            alert("Vennligst skriv inn et romertall")
            return;
        }
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
            setLogs(response.data.reverse())
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
                        <button className="osg-button" onClick={handleClick}>Konverter</button>
                    </div>
                </div>
            </div>
            {convertedNr && (
                <div className="osg-grid__column--5 osg-padding-3" id="convertedNrInfo">
                    {convertedNr.converted}
                </div>
            )}
            {!convertedNr && (
                <div className="osg-grid__column--5 osg-padding-3"></div>
            )}
            <div className="osg-grid__column--5">
                <button className="osg-button" onClick={openModal}>Historikk</button>
                <Modal
                id="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}>
                    <div className="logInfo">
                        <div>
                            <PaginatedList data={logs}/>
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