import React, { useState } from 'react';
import './CustomerComponent.css';
import ModalContent from '../ModalComponent/ModalComponent'

const CustomerComponent = ({ customer }) => {
    const [modalInfo, setModalInfo] = useState('');
    const [show, setShow] = useState(false);
    const [selectedRow, setSelectedRow] = useState(-1);

    const addressFormat = customer.address.split(",");

    const handleAction = (data) => {
        // console.log(data);
        setSelectedRow(data.id);
        setModalInfo(data);
        toggleTrueFale();
    }

    const handleClose = () => {
        setShow(false);
        setSelectedRow(-1);
    };


    const handleshow = () => setShow(true);

    const toggleTrueFale = () => handleshow();

   return (
        <>
            <tr key={customer.id} onClick={() => handleAction(customer)} className={selectedRow === customer.id ? "active" : null}>
                <td>{customer.id}</td>
                <td>{
                    <img className="Customer-avatar"
                        alt="customerAvatar"
                        src={customer.avatar}
                        onError={event => {
                            event.target.src = "./default-avatar.png"
                            event.onError = null
                        }}
                    />
                }
                    {customer.firstName} {customer.lastName}
                </td>
                <td>{customer.contactNo}</td>
                <td>
                    <div>{addressFormat[0]}</div>
                    <div>{addressFormat[1]}</div>
                </td>
            </tr>
            {show ? <ModalContent modalInfo={modalInfo} show={setShow} close={handleClose}/> : null}
        </>
    )
}

export default CustomerComponent;