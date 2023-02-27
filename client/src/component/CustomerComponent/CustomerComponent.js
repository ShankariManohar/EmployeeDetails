import React, { useState } from 'react';
import './CustomerComponent.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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

    const toggleTrueFale = () => {
        handleshow();
    }

    const ModalContent = () => {
        return (
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    {<img className="Modal-avatar"
                        src={modalInfo.avatar}
                        alt="customerAvatar"
                        onError={event => {
                            event.target.src = "./default-avatar.png"
                            event.onError = null
                        }}
                    />}
                    <Modal.Title>
                        <div className="">{modalInfo.firstName} {modalInfo.lastName}</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="Modal-container">
                        <div className="Modal-innerLeft">
                            <div className="">{modalInfo.jobTitle} </div>
                            <div className="">{modalInfo.age} </div>
                            <div className="">{new Date(modalInfo.dateJoined).toLocaleDateString("en-US", {
                                month: "short",
                                day: "2-digit",
                                year: "numeric"

                            })}</div>
                        </div>
                        <div className="Modal-innerRight">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
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
            {show ? <ModalContent /> : null}
        </>
    )
}

export default CustomerComponent;