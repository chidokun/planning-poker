import { useParams } from "react-router-dom";
import { Button, Container, Nav, NavItem, Row, Col } from "shards-react";
import LargeCard from "../common/LargeCard";
import SmallCard from "../common/SmallCard";
import Footer from "../Footer";
import Header from "../header/Header";
import DockBar from "./DockBar";

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
          <NavItem className="mr10">
            User ID: ABCXYZ
          </NavItem>
        </Nav>
        <Nav navbar>
          <NavItem>
            <Button pill theme="danger">Leave Room</Button>
          </NavItem>
        </Nav>
      </Header>
      <Container fluid={true}>
        <div className="p-room-bar">
          <div className="p-room-title">Dragon ball room</div>
          <Button>New Vote</Button>
        </div>
        <div className="p-room-space">
          <Container fluid={true}>
            <Row>
              <Col><LargeCard mode="open" name="tuannlh" /></Col>
              <Col><LargeCard mode="selected" name="trilt2" /></Col>
              <Col><LargeCard mode="open" name="nhatnt" /></Col>
              <Col><LargeCard mode="show" name="sonnl" number="8" /></Col>
              <Col><LargeCard /></Col>
            </Row>
          </Container>

        </div>
      </Container>
      <DockBar />


    </div>
  );
}

export default RoomPage;
