import { Card } from "shards-react";
import card from '../../resources/card.jpg';

function SmallCard() {
  return (
    <div className="pn-small-card">
      <div className="pn-card">
        <Card style={{ height: 90, width: 60, overflow: 'hidden' }}>
          
        </Card>
      </div>
      <div className="pn-card-name">Tuan hihi</div>
    </div>
  );
}

export default SmallCard;
