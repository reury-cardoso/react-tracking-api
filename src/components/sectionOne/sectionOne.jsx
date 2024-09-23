/* eslint-disable react/prop-types */
import "./sectionOne.css";
import { GalleryHorizontalEnd, Bolt } from "lucide-react";

function SectionOne({ tagSelected, setViewButton, setTagSelected, getCards, countAll }) {
  return (
    <div className="stockOptions">
      <div
        onClick={() => {
          getCards();
          setViewButton(false);
          setTagSelected("1");
        }}
        className={`allPackets ${tagSelected == "1" ? "selectedOption" : ""}`}
      >
        <GalleryHorizontalEnd size={24} />
        <span>Todos | {countAll}</span>
      </div>
      <div
        className={`management ${tagSelected == "2" ? "selectedOption" : ""}`}
      >
        <Bolt size={24} />
        <span>Gerenciar</span>
      </div>
    </div>
  );
}

export default SectionOne;
