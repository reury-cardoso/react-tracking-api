/* eslint-disable react/prop-types */
import "./sectionOne.css";
import { GalleryHorizontalEnd, Bolt, FileText } from 'lucide-react';

function SectionOne({tagSelected, setViewButton, setTagSelected}) {
  return (
    <div className="stockOptions">
      <div onClick={()=> {
        setViewButton(false);
        setTagSelected('1');
      }} className={`allPackets ${tagSelected == '1' ? 'selectedOption' : ''}`}>
        <GalleryHorizontalEnd size={24} />
        <span>Todos</span>
      </div>
      <div className={`management ${tagSelected == '2' ? 'selectedOption' : ''}`}>
        <Bolt size={24} />
        <span>Gerenciar</span>
      </div>
      <div className={`reportAll ${tagSelected == '3' ? 'selectedOption' : ''}`}>
        <FileText size={24}/>
        <span>Relatório</span>
      </div>
    </div>
  );
};

export default SectionOne;