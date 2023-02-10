import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Timeline = ({ events }) => {
  return (
    <ul className="timeline">
      {events.map(event => (
        <li key={event.id}>
          <div className="timeline-badge primary"></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">{event.title}</h4>
            </div>
            <div className="timeline-body">
              <p>{event.description}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
 export default Timeline ;