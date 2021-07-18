import { useState } from "react";
import { Button, Container } from "shards-react";
import Header from "../header/Header";
import JoinRoom from "../header/JoinRoom";
import CreateRoomModal from "./CreateRoomModal";

function HomePage() {

  const [ createRoomModalVisible, setCreateRoomModalVisible] = useState(false);

  return (
    <div>
      <Header>
        <JoinRoom />
      </Header>
      <Container>
        <Button theme="primary" onClick={(e) => setCreateRoomModalVisible(true)}>Create Room</Button>
        <CreateRoomModal open={createRoomModalVisible} toggle={e => setCreateRoomModalVisible(!createRoomModalVisible)} />
      </Container>
    </div>
  );
}

export default HomePage;
