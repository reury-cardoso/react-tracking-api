import SectionOne from "../sectionOne/sectionOne";
// import SectionTwo from "../sectionTwo/sectionTwo";
import SectionTwoDetails from "../sectionTwoDetails/sectionTwoDetails";
import "./mainSection.css";

function MainSection() {
  return (
    <section className="mainSection">
      <section className="sectionOne">
        <SectionOne />
      </section>
      <section className="sectionTwo">
        {/* <SectionTwo /> */}
        <SectionTwoDetails />
      </section>
    </section> 
  );
}

export default MainSection;
