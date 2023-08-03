import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddVisitor(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
 

  const handleClose = () => setShow(false);

  const handleAdd = () => {
    // console.log("handleAdd", name, surName)
    props.addVisitor(name, surName)
      setShow(false);}

  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
       Add new visitor
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add visitor</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body> */}
        <Form>
      <Form.Group className="m-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  value={name} onChange={e=> setName(e.target.value)} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="m-3" controlId="formSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter surname"   value={surName} onChange={e=> setSurName(e.target.value)}/>
      </Form.Group>
      
      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
    </Form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddVisitor;