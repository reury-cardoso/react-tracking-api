/* eslint-disable react/prop-types */
import "./itemCard.css";
import Icon from "../icon/icon";
import { FileSliders, Clock, CircleArrowOutUpRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

function ItemCard({ card }) {
  const cardStyle = JSON.parse(card.style);

  return (
    <div className="card">
      <div style={{background: `${cardStyle.color}`, filter: `drop-shadow(0px 10px 11px ${cardStyle.color})`}} className="cardIcon">
        <Icon name={cardStyle.icon} />
      </div>
      <div className="cardBody">
        <h1>{card.trackingCode}</h1>
        <div className="cardBodyPlus">
          <div className="cardBPIcons">
            <FileSliders size={19} color="#707276" />
            <span>{card.status}</span>
          </div>
          <div className="cardBPIcons">
            <Clock size={19} color="#707276" />
            <span>
              {formatDistanceToNow(card.createdAt, {
                locale: ptBR,
                addSuffix: true,
              })
                .charAt(0)
                .toUpperCase() +
                formatDistanceToNow(card.createdAt, {
                  locale: ptBR,
                  addSuffix: true,
                }).slice(1)}
            </span>
          </div>
        </div>
      </div>
      <button id="manageTracking">
        Visualizar <CircleArrowOutUpRight size={16} color="#fff" />
      </button>
    </div>
  );
}

export default ItemCard;
