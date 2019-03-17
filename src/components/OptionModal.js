import React from 'react';
import Modal from 'react-modal'

const OptionModal = (props)=>{
    return(
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleModalRemove}
        contentLabel = "The selected option"
        className = "modal"
        closeTimeoutMS = {300}

    >
         <h2 className = "modal_title"> The selected option is: </h2>
         {props.selectedOption && <p> {props.selectedOption} </p>}
         <button onClick = {props.handleModalRemove} className = "button"> Okay </button>
    </Modal>
    );
} 

export default OptionModal;