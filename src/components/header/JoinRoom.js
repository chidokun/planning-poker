import { useState } from "react";
import { Button, FormInput, InputGroup, InputGroupAddon, Nav } from "shards-react";
import JoinRoomModal from "./JoinRoomModal";

function JoinRoom(props) {
  const [ joinRoomModalVisible, setJoinRoomModalVisible ] = useState(false);

  return (
    <Nav navbar className="ml-auto">
      <InputGroup>
        <FormInput placeholder="Room ID" />
        <InputGroupAddon type="append">
          <Button theme="primary" onClick={e => setJoinRoomModalVisible(true)}>Join</Button>
        </InputGroupAddon>
      </InputGroup>
      <JoinRoomModal open={joinRoomModalVisible} toggle={e => setJoinRoomModalVisible(!joinRoomModalVisible)} />
    </Nav>
  );
}

export default JoinRoom;
