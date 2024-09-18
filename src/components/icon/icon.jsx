/* eslint-disable react/prop-types */
import { HardDriveDownload, FolderClock,  CircleCheck, MapPinCheck, TextSearch} from "lucide-react";

function Icon({ name }) {
  switch (name) {
    case "HardDriveDownload":
      return <HardDriveDownload size={24} color="#fff" />;
    case "FolderClock":
      return <FolderClock size={24} color="#fff" />;
    case "CircleCheck":
      return <CircleCheck size={24} color="#fff" />;
    case "MapPinCheck":
      return <MapPinCheck size={24} color="#fff" />;
    case "TextSearch":
      return <TextSearch size={24} color="#fff" />;
    default:
      return <HardDriveDownload size={24} color="#fff" />;
  }
}

export default Icon;
