import React from "react";
import styles from "./EventList.module.css";

function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div className={styles.card} key={event.id}>
          <h2>
            {index + 1} -{event.title}
          </h2>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default EventList;
