/* eslint-disable react/prop-types */
import "./sectionTwoDetails.css";
import { Info, Pencil, Trash } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HistoryCard from "./historyCard/historyCard";
import iconLoading from "../../assets/tubeSpinner.svg";
import { format } from "date-fns";
import { useState } from "react";
import axios from "axios";
import InputsModal from "../inputsModal/inputsModal";
import { forwardRef } from 'react';

const statusName = [
  "Recebido",
  "Em análise",
  "Aprovado",
  "Auxílio Entregue",
  "Negado",
];

function SectionTwoDetails(props, ref) {
  const {
    setViewButton,
    cardDetails,
    deleteCard,
    setTagSelected,
    showNotification,
    getCardDetails,
    getCards,
    openModal,
    closeModal,
    showModal,
    createCard,
    loading,
    setLoading,
    updateCard,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(cardDetails.status);
  const [isLoading, setIsLoading] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  async function handleOptionClick(status, id) {
    try {
      setSelectedStatus(status);
      setIsLoading(true);
      await axios.post(`${import.meta.env.VITE_API_URL}/${id}/history`, {
        stage: status,
      });
      getCardDetails(cardDetails.trackingCode);
      setIsLoading(false);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
      setSelectedStatus(cardDetails.status);
      if (error.response.data.error !== "History already exists") {
        showNotification("error", "Erro ao atualizar");
      }
      showNotification("warning", "Este status já foi atribuído ao auxílio anteriormente");
      setIsLoading(false);
      setIsOpen(false);
    }
  }

  const latLon = cardDetails.addressLatLon.split(",");

  const lat = parseFloat(latLon[0]);
  const lon = parseFloat(latLon[1]);

  return (
    <main ref={ref} id="trackingDetails">
      <nav className="pageNavigation">
        <ul>
          <li>
            <button
              onClick={() => {
                getCards();
                setViewButton(false);
                setTagSelected(1);
              }}
            >
              Todos
            </button>
          </li>
          <li>
            <button onClick={() => window.location.reload(true)}>
              {cardDetails.trackingCode}
            </button>
          </li>
        </ul>
      </nav>
      <section id="details">
        <div className="itemDetailOne itemDetail">
          <div className="detailsUp">
            <div className="detailsTexts">
              <span>Detalhes</span>
              <div className="detailsProfile">
                <img
                  width={40}
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${cardDetails.applicantName}&radius=50&backgroundType=gradientLinear&fontFamily=Arial&fontWeight=600`}
                  alt=""
                />
                <div className="profileText">
                  <span>{cardDetails.applicantName}</span>
                  <p>Solicitante #{cardDetails.trackingCode}</p>
                </div>
              </div>
            </div>
            <Info size={40} color="#004FD7" />
          </div>
          <div className="detailsDown">
            <div className="divDetail divDetailData">
              <span>Dados</span>
              <div className="typeHelp">
                <span>Tipo de Ajuda:</span>
                <p>{cardDetails.supportType}</p>
              </div>
              <div className="createData">
                <span>Criado em:</span>
                <p>
                  {format(new Date(cardDetails.createdAt), "dd/MM/yyyy HH:mm")}
                </p>
              </div>
              <div className="updateData">
                <span>Atualização:</span>
                <p>
                  {format(new Date(cardDetails.updatedAt), "dd/MM/yyyy HH:mm")}
                </p>
              </div>
            </div>
            <div className="divDetail">
              <span>Status</span>
              <div className="statusDropdown">
                <div
                  className="statusMain"
                  style={{ background: cardDetails.styleColor }}
                  onClick={toggleDropdown}
                >
                  {isLoading ? (
                    <img height={14} src={iconLoading} alt="ícone de loading" />
                  ) : (
                    <>
                      <span>{selectedStatus}</span>
                      <Pencil className="editPencil" size={24} color="#fff" />
                    </>
                  )}
                </div>
                {isOpen && (
                  <ul className="statusOptions">
                    {statusName.map((status, index) => (
                      <li
                        style={
                          status == selectedStatus
                            ? {
                                background: cardDetails.styleColor,
                                color: "#fff",
                                fontWeight: "600",
                              }
                            : {}
                        }
                        key={index}
                        className="statusOption"
                        onClick={() =>
                          handleOptionClick(status, cardDetails.id)
                        }
                      >
                        {status}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="divDetail divDetailData">
              <span>Endereço</span>
              <div className="typeHelp">
                <p>{cardDetails.address}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="itemDetailTwo itemDetail">
          <MapContainer
            className="small-map"
            center={[lat, lon]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lon]}>
              <Popup>{cardDetails.address}</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="itemDetailThree itemDetail">
          <button onClick={openModal} className="buttonEdit iconCRUD">
            <Pencil size={24} color="#fff" />
          </button>
          <button
            onClick={() => {
              if (window.confirm("Deseja realmente deletar este registro?")) {
                deleteCard(cardDetails.id);
                showNotification("success", "Registro deletado com sucesso");
                setViewButton(false);
                setTagSelected(1);
              }
            }}
            className="buttonDelete iconCRUD"
          >
            <Trash size={24} color="#fff" />
          </button>
        </div>
      </section>
      <section id="history">
        <span>Ultimas atualizações</span>
        {cardDetails.history.toReversed().map((history, index) => {
          return <HistoryCard key={index} history={history} />;
        })}
      </section>
      <InputsModal
        closeModal={closeModal}
        showModal={showModal}
        createCard={createCard}
        loading={loading}
        setLoading={setLoading}
        isEdit={true}
        cardDetails={cardDetails}
        updateCard={updateCard}
      />
    </main>
  );
}

export default forwardRef(SectionTwoDetails);
