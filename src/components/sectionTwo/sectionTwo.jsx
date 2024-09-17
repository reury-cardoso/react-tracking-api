import ItemCard from "../itemCard/itemCard";
import "./sectionTwo.css";
import { Plus } from "lucide-react";

function SectionTwo() {
  return (
    <main id="trackingMain">
      <div id="InfoUp">
        <div className="trackingText">
          <span>Acompanhar</span>
          <p>Monitore seus envios</p>
        </div>
        <button id="addButton">
          <Plus size={24} color="#fff" />
        </button>
      </div>
      <div id="cardGallery">
        <ItemCard />
      </div>
    </main>
  );
}

export default SectionTwo;
