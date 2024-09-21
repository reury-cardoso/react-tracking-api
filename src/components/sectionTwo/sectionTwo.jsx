/* eslint-disable react/prop-types */
import InputsModal from "../inputsModal/inputsModal";
import ItemCard from "../itemCard/itemCard";
import NoData from "../noData/noData";
import "./sectionTwo.css";
import { Plus } from "lucide-react";

function SectionTwo({cardsApi, getCardDetails, openModal, closeModal, showModal, createCard, loading, setLoading}) {
  return (
    <main id="trackingMain">
      <div id="InfoUp">
        <div className="trackingText">
          <span>Acompanhar</span>
          <p>Monitore os auxílios</p>
        </div>
        <button onClick={openModal} id="addButton">
          <Plus size={24} color="#fff" />
        </button>
      </div>
      <div id="cardGallery">
        { cardsApi && cardsApi.length > 0 ?  cardsApi.map((card, index) => <ItemCard key={index} card={card} getCardDetails={getCardDetails} />) : <NoData />}
      </div>
      <InputsModal closeModal={closeModal}  showModal={showModal} createCard={createCard} loading={loading} setLoading={setLoading}/>
    </main>
  );
}

export default SectionTwo;
