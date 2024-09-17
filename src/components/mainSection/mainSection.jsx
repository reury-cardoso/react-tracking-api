import SectionOne from "../sectionOne/sectionOne";
import "./mainSection.css";

function MainSection() {
  return (
    <section className="mainSection">
      <section className="sectionOne">
        <SectionOne />
      </section>
      <section className="sectionTwo"></section>
    </section> 
  );
}

export default MainSection;
