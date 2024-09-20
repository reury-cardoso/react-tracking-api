/* eslint-disable react/prop-types */
import ItemCard from "../itemCard/itemCard";
import "./sectionTwo.css";
import { Plus } from "lucide-react";

function SectionTwo({cardsApi, getCardDetails}) {

  return (
    <main id="trackingMain">
      <div id="InfoUp">
        <div className="trackingText">
          <span>Acompanhar</span>
          <p>Monitore os auxílios</p>
        </div>
        <button id="addButton">
          <Plus size={24} color="#fff" />
        </button>
      </div>
      <div id="cardGallery">
        { cardsApi && cardsApi.map((card, index) => <ItemCard key={index} card={card} getCardDetails={getCardDetails} />) }
      </div>
    </main>
  );
}

export default SectionTwo;
