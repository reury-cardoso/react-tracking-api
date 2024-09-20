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

  function showNotification(type, message) {
    setNotification({ type, message });
  }

  async function getCards() {
    const response = await axios.get("http://localhost:3000/");
    setCardsApi(response.data.trackings);
  }

  async function getCardDetails(trackingCode) {
    const response = await axios.get(`http://localhost:3000/${trackingCode}`);
    setCardDetails(response.data.tracking);
    setViewButton(true);
    setTagSelected(2);
  }

  async function deleteCard(id) {
    await axios.delete(`http://localhost:3000/${id}`);
    getCards();
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <section className="mainSection">
      <section className="sectionOne">
        <SectionOne tagSelected={tagSelected} />
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
