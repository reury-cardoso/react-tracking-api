import SectionOne from "../sectionOne/sectionOne";
import SectionTwo from "../sectionTwo/sectionTwo";
import "./mainSection.css";

function MainSection() {
  return (
    <section className="mainSection">
      <section className="sectionOne">
        <SectionOne />
      </section>
      <section className="sectionTwo">
        <SectionTwo />
      </section>
    </section> 
  );
}

export default MainSection;
