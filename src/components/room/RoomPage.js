import { useParams } from "react-router-dom";
import { Button, Container, Nav, NavItem } from "shards-react";
import LargeCard from "../common/LargeCard";
import SmallCard from "../common/SmallCard";
import Header from "../header/Header";

function RoomPage() {
  let { roomId } = useParams();
  return (
    <div>
      <Header>
        <Nav navbar>
          <NavItem>
            Room ID: {roomId}
          </NavItem>
        </Nav>
        <Nav navbar className="ml-auto">
          <NavItem>
            User ID: ABCXYZ
          </NavItem>
          <NavItem>
            <Button theme="danger">Leave Room</Button>
          </NavItem>
        </Nav>
      </Header>
      <Container fluid={true}>
        <LargeCard />
        <SmallCard />
      </Container>


    </div>
  );
}

export default RoomPage;
