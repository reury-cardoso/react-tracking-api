/* eslint-disable react/prop-types */
import Icon from "../../icon/icon";
import "./historyCard.css";
import { format } from "date-fns";

function HistoryCard({ history }) {
  return (
    <div className="historyCard">
      <div className="historyText">
        <div className="historyIcon">
          <Icon name={history.icon} color="#004fd7" />
        </div>
        <div className="textHis">
          <span>
            {(history.stage === "Recebido" && "Criado por:") ||
              (["Auxílio Entregue", "Negado"].includes(history.stage) &&
                "Finalizado por:") ||
              "Atualizado por:"}
          </span>
          <p>Admin</p>
        </div>
      </div>
      <div className="historyDate">
        <span>
          Em: {format(new Date(history.updatedAt), "dd/MM/yyyy HH:mm")}
        </span>
      </div>
      <div className="historyStatus">
        <div style={{ background: history.color }}>
          {history.stage}
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
