import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function EditVisitor(props) {
  const [show, setShow] = useState(false);
  const [firstname, setFirstname] = useState(props.name)
  const [surname, setSurname] = useState(props.name)

  
  const handleClose = () => setShow(false);

  const handleSave = () => {

  props.updateVisitor(props.id, firstname, surname)
    setShow(false);}

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update visitor</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
        <Form id="formEditVisitor">
      <Form.Group className="m-3" controlId="formName">
        <Form.Label>New name</Form.Label>
        <Form.Control type="text" placeholder="Enter new name" value={firstname} onChange={e=> setFirstname(e.target.value)} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="m-3" controlId="formSurname">
        <Form.Label>New surname</Form.Label>
        <Form.Control type="text" placeholder="Enter new surname"   value={surname} onChange={e=> setSurname(e.target.value)}/>
      </Form.Group>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditVisitor;