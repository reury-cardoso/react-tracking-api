import "./sectionTwoDetails.css";
import { Info, Pencil, Trash } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function SectionTwoDetails() {
  return (
    <main id="trackingDetails">
      <nav className="pageNavigation">
        <ul>
          <li>
            <a href="index.html">Todos</a>
          </li>
          <li>
            <a href="index.html">PDA103920DEV</a>
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
                  src="https://api.dicebear.com/9.x/initials/svg?seed=Ana Pinho&radius=50&backgroundType=gradientLinear&fontFamily=Arial&fontWeight=600"
                  alt=""
                />
                <div className="profileText">
                  <span>Ana Pinho</span>
                  <p>Solicitante #REG103845</p>
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
                <p>Dinheiro</p>
              </div>
              <div className="createData">
                <span>Criado em:</span>
                <p>14/09/2021</p>
              </div>
              <div className="updateData">
                <span>Atualizado em:</span>
                <p>14/09/2021</p>
              </div>
            </div>
            <div className="divDetail">
              <span>Status</span>
              <div style={{ background: "#14C3A4" }} className="statusCard">
                Aprovado 
                <Pencil size={20} color="#fff" />
              </div>
            </div>
            <div className="divDetail divDetailData">
              <span>Endereço</span>
              <div className="typeHelp">
                <p>Rua Siqueira Mendes, 190, Centro - Abaetetuba</p>
              </div>
            </div>
          </div>
        </div>
        <div className="itemDetailTwo itemDetail">
          <MapContainer
            className="small-map"
            center={[-1.7252526, -48.8900453]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-1.7252526, -48.8900453]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="itemDetailThree itemDetail">
          <button className="buttonEdit iconCRUD"><Pencil  size={24} color="#fff" /></button>
          <button className="buttonDelete iconCRUD"><Trash  size={24} color="#fff" /></button>
        </div>
      </section>
      <section id="history">
        
      </section>
    </main>
  );
}

export default SectionTwoDetails;
