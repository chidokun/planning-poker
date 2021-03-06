import { Button, Form, FormGroup, FormInput, Modal, ModalBody, ModalFooter, ModalHeader } from "shards-react";

function CreateRoomModal(props) {
  return (
    <Modal size="md" open={props.open} toggle={props.toggle} animation={true}>
      <ModalHeader>Create Room</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <label htmlFor="#room-name">Room Name</label>
            <FormInput id="#room-name" placeholder="Enter your Room Name" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="#your-name">Your Name</label>
            <FormInput id="#your-name" placeholder="Enter your Name" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button theme="primary">Create Room</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateRoomModal;
