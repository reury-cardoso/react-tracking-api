/* eslint-disable react/prop-types */
import InputsModal from "../inputsModal/inputsModal";
import ItemCard from "../itemCard/itemCard";
import NoData from "../noData/noData";
import "./sectionTwo.css";
import { Plus } from "lucide-react";
import { forwardRef } from 'react';

function SectionTwo(props, ref) {
  const {
    cardsApi,
    getCardDetails,
    openModal,
    closeModal,
    showModal,
    createCard,
    loading,
    setLoading,
  } = props;
  return (
    <main ref={ref} id="trackingMain">
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
        {cardsApi && cardsApi.length > 0 ? (
          cardsApi.map((card, index) => (
            <ItemCard key={index} card={card} getCardDetails={getCardDetails} />
          ))
        ) : (
          <NoData />
        )}
      </div>
      <InputsModal
        closeModal={closeModal}
        showModal={showModal}
        createCard={createCard}
        loading={loading}
        setLoading={setLoading}
        isEdit={false}
        cardDetails={undefined}
      />
    </main>
  );
}

export default forwardRef(SectionTwo);
