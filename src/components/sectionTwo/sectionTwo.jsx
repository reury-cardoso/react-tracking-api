import { useEffect, useState } from "react";
import ItemCard from "../itemCard/itemCard";
import "./sectionTwo.css";
import { Plus } from "lucide-react";
import axios from "axios";

function SectionTwo() {
  const [ cardsApi, setCardsApi ] = useState();

  async function getCards() {
    const response = await axios.get('http://localhost:3000/');
    setCardsApi(response.data.trackings);
  }

  useEffect(() => {
    getCards();
  }, []);

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
        { cardsApi && cardsApi.map((card, index) => <ItemCard key={index} card={card} />) }
      </div>
    </main>
  );
}

export default SectionTwo;
