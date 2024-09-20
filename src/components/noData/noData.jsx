import { DatabaseZap } from "lucide-react";
import "./noData.css";

function NoData() {
  return (
    <div id="noData">
      <DatabaseZap size={48} color="#004FD7" />
      <p>Nenhum dado encontrado</p>
    </div>
  );
};

export default NoData;