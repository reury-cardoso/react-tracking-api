import "./sectionTwoDetails.css";
import { IdCard, CalendarClock, Zap } from "lucide-react";
function SectionTwoDetails() {
  return (
    <main id="trackingDetails">
      <nav className="pageNavigation">
        <ul>
          <li>
            <a href="index.html">Todos</a>
          </li>
          <li>
            <a href="index.html">PDA103920DEV</a>
          </li>
        </ul>
      </nav>

      <section id="details">
        <div className="itemDetail">
          <div className="lineDetails">
            <div>
            <span className="label">Destinatário:</span>
            <span className="value"> Maria Carla</span>
            </div>
            <div>
              <span className="label">Número:</span>
              <span className="value"> PDA103920DEV</span>
            </div>
          </div>
          <IdCard size={40} color="#004FD7" />
        </div>
        <div className="itemDetail">
          <div className="lineDetails">
            <div>
              <span className="label">Destinatário:</span>
              <span className="value">Maria Carla</span>
            </div>
            <div>
              <span className="label">Tracking Number:</span>
              <span className="value">PDA103920DEV</span>
            </div>
          </div>
          <CalendarClock size={40} color="#004FD7" />
        </div>
        <div className="itemDetail">
          <div className="lineDetails">
            <div>
              <span className="label">Tracking Number:</span>
              <span className="value">PDA103920DEV</span>
            </div>
            <div>
              <span className="label">Tracking Number:</span>
              <span className="value">PDA103920DEV</span>
            </div>
          </div>
          <Zap size={40} color="#004FD7" />
        </div>
      </section>
    </main>
  );
}

export default SectionTwoDetails;
