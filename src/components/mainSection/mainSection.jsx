import { useEffect, useState } from "react";
import SectionOne from "../sectionOne/sectionOne";
import SectionTwo from "../sectionTwo/sectionTwo";
import SectionTwoDetails from "../sectionTwoDetails/sectionTwoDetails";
import "./mainSection.css";
import axios from "axios";

function MainSection() {
  const [cardsApi, setCardsApi] = useState();
  const [cardDetails, setCardDetails] = useState();
  const [viewbutton, setViewButton] = useState(false);

  async function getCards() {
    const response = await axios.get("http://localhost:3000/");
    setCardsApi(response.data.trackings);
  }

  async function getCardDetails(trackingCode) {
    const response = await axios.get(`http://localhost:3000/${trackingCode}`);
    setCardDetails(response.data.tracking);
    setViewButton(true);
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <section className="mainSection">
      <section className="sectionOne">
        <SectionOne />
      </section>
      <section className="sectionTwo">
        {viewbutton ? (
          <SectionTwoDetails setViewButton={setViewButton} cardDetails={cardDetails} />
        ) : (
          <SectionTwo cardsApi={cardsApi} getCardDetails={getCardDetails} />
        )}
      </section>
    </section>
  );
}

export default MainSection;
