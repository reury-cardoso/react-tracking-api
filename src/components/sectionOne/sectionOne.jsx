import "./sectionOne.css";
import { GalleryHorizontalEnd, Bolt, FileText } from 'lucide-react';

function SectionOne() {
  return (
    <div className="stockOptions">
      <div className="allPackets selectedOption">
        <GalleryHorizontalEnd size={24} />
        <span>Todos</span>
      </div>
      <div className="management ">
        <Bolt size={24} />
        <span>Gerenciar</span>
      </div>
      <div className="reportAll">
        <FileText size={24}/>
        <span>Relatório</span>
      </div>
    </div>
  );
};

export default SectionOne;