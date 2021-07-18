import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, FormInput, Modal, ModalBody, ModalFooter, ModalHeader } from "shards-react";

function JoinRoomModal(props) {
  const [ name, setName ] = useState("");
  return (
    <Modal size="md" open={props.open} toggle={props.toggle} animation={true}>
      <ModalHeader>Join Room</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="#your-name">Your Name</label>
            <FormInput id="#your-name" placeholder="Enter your Name" onChange={e => setName(e.target.value)} value={name} />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Link to={"/room/" + name}><Button theme="primary" >Join Room</Button></Link> 
      </ModalFooter>
    </Modal>
  );
}

export default JoinRoomModal;
