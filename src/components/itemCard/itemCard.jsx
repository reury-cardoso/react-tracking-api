/* eslint-disable react/prop-types */
import "./itemCard.css";
import Icon from "../icon/icon";
import { FileSliders, Clock, CircleArrowOutUpRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

function ItemCard({ card, getCardDetails }) {
  return (
    <div className="card">
      <div
        style={{
          background: `${card.styleColor}`,
          filter: `drop-shadow(0px 10px 11px ${card.styleColor})`,
        }}
        className="cardIcon"
      >
        <Icon name={card.styleIcon} color={"#fff"} />
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
      <button
        onClick={() => getCardDetails(card.trackingCode)}
        id="manageTracking"
      >
        Visualizar <CircleArrowOutUpRight size={16} color="#fff" />
      </button>
    </div>
  );
}

export default ItemCard;
