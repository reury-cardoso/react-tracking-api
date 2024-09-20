import "./header.css";
import iconAdmin from "../../assets/iconAdmin.svg";
import { Search, HeartHandshake } from "lucide-react";

function Header() {
  return (
    <header>
      <div className="logo">
        <HeartHandshake color="#004FD7" size={24} />
        <span>HelpTracking</span>
      </div>
      <div className="secondarySection">
        <div className="searchField">
          <Search className="iconSearch" size={18} />
          <input type="text" />
        </div>
        <div className="profileAdmin">
          <img src={iconAdmin} alt="" draggable="false" />
          <div className="textAdmin">
            <span>Admin</span>
            <p>Bem-vindo(a)</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
