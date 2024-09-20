/* eslint-disable react/prop-types */
import Icon from "../../icon/icon";
import "./historyCard.css";

function HistoryCard({ history, icon, color }) {
  return (
    <div className="historyCard">
      <div className="historyText">
        <div className="historyIcon">
          <Icon name={icon} color="#004fd7" />
        </div>
        <div className="textHis">
          <span>Atualizado por:</span>
          <p>Admin</p>
        </div>
      </div>
      <div className="historyDate">
        <span>Em: {history.date}</span>
      </div>
      <div className="historyStatus">
        <div style={{ background: color }} className="statusCard">
          {history.stage}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
