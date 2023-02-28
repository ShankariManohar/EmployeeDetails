import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalContent = ({modalInfo,show,close}) => {
    const dateFormat = new Date(modalInfo.dateJoined).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric"

    });

    return (
        <Modal show={show} onHide={close} size="lg" centered>
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
                        <div className="">{dateFormat}</div>
                    </div>
                    <div className="Modal-innerRight">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={close}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default ModalContent;