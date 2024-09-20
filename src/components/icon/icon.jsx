/* eslint-disable react/prop-types */
import { HardDriveDownload, FolderClock,  CircleCheck, MapPinCheck, TextSearch} from "lucide-react";

function Icon({ name, color }) {
  switch (name) {
    case "HardDriveDownload":
      return <HardDriveDownload size={24} color={color} />;
    case "FolderClock":
      return <FolderClock size={24} color={color} />;
    case "CircleCheck":
      return <CircleCheck size={24} color={color} />;
    case "MapPinCheck":
      return <MapPinCheck size={24} color={color} />;
    case "TextSearch":
      return <TextSearch size={24} color={color} />;
    default:
      return <HardDriveDownload size={24} color={color} />;
  }
}

export default Icon;
