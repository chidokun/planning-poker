import { Card } from "shards-react";
import card from '../../resources/card.jpg';
import cardGray from '../../resources/card-gray.jpg';

function LargeCard(props) {
  return (
    <div className="p-large-card">
      <Card className="p-card">
        {
          props.mode === "open"
          ? <div className="p-background"><img src={cardGray} alt="card-background" width={140} /></div>
          : props.mode === "selected"
          ? <div className="p-background"><img src={card} alt="card-background" width={140} /></div>
          : props.mode === "show"
          ? <div className="p-number"><span>{props.number}</span></div>
          : ''
        }
      </Card>
      <div className="p-card-name">{props.name}</div>
    </div>
  );
}

export default LargeCard;
