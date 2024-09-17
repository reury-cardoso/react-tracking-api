import "./sectionOne.css";
import { GalleryHorizontalEnd, Bolt, FileText } from 'lucide-react';

function SectionOne() {
  return (
    <div className="stockOptions">
      <div className="allPackets">
        <GalleryHorizontalEnd size={24} />
        <span>Todos</span>
      </div>
      <div className="management ">
        <Bolt size={24} />
        <span>Gerenciar</span>
      </div>
      <div className="reportAll selectedOption">
        <FileText size={24}/>
        <span>Relatório</span>
      </div>
    </div>
  );
};

export default SectionOne;