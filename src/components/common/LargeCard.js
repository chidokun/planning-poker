import { Card } from "shards-react";
import card from '../../resources/card.jpg';

function LargeCard() {
  return (
    <div className="pn-large-card">
      <div className="pn-card pn-large-card">
        <Card style={{ height: 180, width: 140, overflow: 'hidden' }}>
          <div style={{ overflow: 'hidden', height: '100%' }}>
            <img src={card} alt="card-background" width={140} />
          </div>
        </Card>
      </div>
      <div className="pn-card-name">Tuan hihi</div>
    </div>
  );
}

export default LargeCard;
