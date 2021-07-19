import { Container, Row, Col } from "shards-react";
import SmallCard from "../common/SmallCard";

export default function DockBar(props) {
  return <div className="p-dockbar">
    <div className="p-dock">
      <SmallCard number="?" />
      <SmallCard number="0.5" />
      <SmallCard number="1" />
      <SmallCard number="2" />
      <SmallCard number="3" />
      <SmallCard number="5" />
      <SmallCard number="8" />
      <SmallCard number="13" />
      <SmallCard number="21" />
      <SmallCard number="34" />
    </div>
  </div>;
}