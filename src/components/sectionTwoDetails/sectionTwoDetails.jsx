/* eslint-disable react/prop-types */
import "./sectionTwoDetails.css";
import { Info, Pencil, Trash } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import HistoryCard from "./historyCard/historyCard";
import { format } from "date-fns";

function SectionTwoDetails({cardDetails, setViewButton}) {
  const latLon = cardDetails.addressLatLon.split(',');

  const lat = parseFloat(latLon[0]);
  const lon = parseFloat(latLon[1]);

  return (
    <main id="trackingDetails">
      <nav className="pageNavigation">
        <ul>
          <li>
            <button onClick={() => setViewButton(false)}>Todos</button>
          </li>
          <li>
            <button >{cardDetails.trackingCode}</button>
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
                <p>{format(new Date(cardDetails.createdAt), 'dd/MM/yyyy HH:mm')}</p>
              </div>
              <div className="updateData">
                <span>Atualização:</span>
                <p>{format(new Date(cardDetails.updatedAt), 'dd/MM/yyyy HH:mm')}</p>
              </div>
            </div>
            <div className="divDetail">
              <span>Status</span>
              <div style={{ background: "#14C3A4" }} className="statusCard">
              {cardDetails.status}
                <Pencil size={20} color="#fff" />
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
              <Popup>
                {cardDetails.address}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="itemDetailThree itemDetail">
          <button className="buttonEdit iconCRUD">
            <Pencil size={24} color="#fff" />
          </button>
          <button className="buttonDelete iconCRUD">
            <Trash size={24} color="#fff" />
          </button>
        </div>
      </section>
      <section id="history">
        <span>Ultimas atualizações</span>
        {cardDetails.history.map((history, index) => {
          return <HistoryCard key={index} history={history} icon={cardDetails.styleIcon} color={cardDetails.styleColor} />;
        })}
      </section>
    </main>
  );
}

export default SectionTwoDetails;
