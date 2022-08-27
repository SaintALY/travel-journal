import React from 'react';
import "./Card.css";
import LocationMarker from '../images/location-marker.png';

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <div  className="card--hero">
                <img src={props.item.imageUrl} alt="" className='card--img'/>
            </div>
            <div className="card--content">
                <div className="card--dash">
                    <img src={LocationMarker} alt="" className='card--marker'/>
                    <span className='card--location'>{props.item.location}   </span>
                    <a href={props.item.googleMapsUrl} className="card--google">Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <span className='card--date'>{props.item.startDate} - {props.item.endDate}</span>
                
                <p>{props.item.description}</p>
            </div>
            
            
            
            
        </div>
    );
}

export default Card;
