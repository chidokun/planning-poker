import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse
} from "shards-react";
import { useState } from "react";

export default function Header(props) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  return (
    <Navbar type="light" expand="md" className="p-header">
      <NavbarBrand href="#">Planning Poker</NavbarBrand>
      <NavbarToggler onClick={e => setCollapseOpen(!collapseOpen)} />
      <Collapse open={collapseOpen} navbar>
        {
          props.children
        }
      </Collapse>
    </Navbar>
  );
}
