import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.imageUrl} alt={props.title} />
      <div className="card-info">
        <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
        <span className="card-location"> {props.location} </span>
        <span className="card-map">
          <a
            href={props.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="card-url"
          >
            View on Google Maps
          </a>
        </span>
        <h2 className="card-title">{props.title}</h2>
        <span className="card-dates">
          {props.startDate} - {props.endDate}
        </span>
        <p className="card-des"> {props.description} </p>
      </div>
    </div>
  );
}
