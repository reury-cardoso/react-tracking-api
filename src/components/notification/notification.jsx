/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./notification.css";

function Notification({ type, message, onClose }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(onClose, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`notification ${type} ${fadeOut ? 'fade-out' : ''}`}>
      <i className={`fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-exclamation-triangle'}`}></i>
      <span className="message">{message}</span>
    </div>
  );
}

export default Notification;