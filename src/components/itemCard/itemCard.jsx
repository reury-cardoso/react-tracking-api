import "./itemCard.css";
import { Notebook, MapPin, Clock, CircleArrowOutUpRight } from "lucide-react";

function ItemCard() {
  return (
    <div className="card">
      <div className="cardIcon">
        <Notebook className="icon" size={24} color="#fff" />
      </div>
      <div className="cardBody">
        <h1>Data Managers</h1>
        <div className="cardBodyPlus">
          <div className="cardBPIcons">
            <MapPin size={19} color="#707276" />
            <span>Em transferência para Belém</span>
          </div>
          <div className="cardBPIcons">
            <Clock size={19} color="#707276" />
            <span>Há 5 dias</span>
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
