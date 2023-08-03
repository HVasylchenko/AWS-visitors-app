import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';

function DelVisitor(props) {
  const [show, setShow] = useState(false);
  // const [firstname, setFirstname] = useState("")
  // const [surname, setSurname] = useState("")

  
  const handleClose = () => setShow(false);

  const handleSave = () => {

  props.delVisitor(props.id)
    setShow(false);}

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Del
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete visitor</Modal.Title>
        </Modal.Header>

        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DelVisitor;