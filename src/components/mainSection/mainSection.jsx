import { useEffect, useState } from "react";
import SectionOne from "../sectionOne/sectionOne";
import SectionTwo from "../sectionTwo/sectionTwo";
import SectionTwoDetails from "../sectionTwoDetails/sectionTwoDetails";
import "./mainSection.css";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Notification from "../notification/notification";

function MainSection() {
  const [cardsApi, setCardsApi] = useState();
  const [cardDetails, setCardDetails] = useState();
  const [viewbutton, setViewButton] = useState(false);
  const [tagSelected, setTagSelected] = useState("1");
  const [notification, setNotification] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function showNotification(type, message) {
    setNotification({ type, message });
  }

  async function createCard(data) {
    try {
      await axios.post("http://localhost:3000/", data);
      showNotification("success", "Registro criado com sucesso");
      getCards();
      closeModal();
      setLoading(false);
      return true;
    } catch {
      showNotification("error", "Erro ao criar registro");
      setLoading(false);
      return false;
    }
  }

  async function getCards() {
    try {
      const response = await axios.get("http://localhost:3000/");
      setCardsApi(response.data.trackings);
    } catch {
      showNotification("error", "Erro ao buscar dados");
    }
  }

  async function getCardDetails(trackingCode) {
    try {
      const response = await axios.get(`http://localhost:3000/${trackingCode}`);
      setCardDetails(response.data.tracking);
      setViewButton(true);
      setTagSelected(2);
    } catch {
      showNotification("error", "Erro ao buscar detalhes");
    }
  }

  async function deleteCard(id) {
    try {
      await axios.delete(`http://localhost:3000/${id}`);
      getCards();
    } catch {
      showNotification("error", "Erro ao deletar registro");
    }
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <section className="mainSection">
      <section className="sectionOne">
        <SectionOne
          setViewButton={setViewButton}
          setTagSelected={setTagSelected}
          tagSelected={tagSelected}
        />
      </section>
      <section className="sectionTwo">
        <div style={{ position: "relative", minHeight: "200px" }}>
          <TransitionGroup component={null}>
            {viewbutton ? (
              <CSSTransition key="details" timeout={390} classNames="fade">
                <SectionTwoDetails
                  setViewButton={setViewButton}
                  cardDetails={cardDetails}
                  deleteCard={deleteCard}
                  setTagSelected={setTagSelected}
                  showNotification={showNotification}
                />
              </CSSTransition>
            ) : (
              <CSSTransition key="list" timeout={400} classNames="fade">
                <SectionTwo
                  cardsApi={cardsApi}
                  getCardDetails={getCardDetails}
                  showNotification={showNotification}
                  openModal={openModal}
                  closeModal={closeModal}
                  showModal={showModal}
                  createCard={createCard}
                  loading={loading}
                  setLoading={setLoading}
                />
              </CSSTransition>
            )}
          </TransitionGroup>
        </div>
      </section>
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  );
}

export default MainSection;
