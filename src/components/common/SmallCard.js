import { Card } from "shards-react";

function SmallCard(props) {
  return (
    <div className="p-small-card">
        <div className="p-card">
          <div className="p-number"><span>{props.number}</span></div>
        </div>
    </div>
  );
}

export default SmallCard;
