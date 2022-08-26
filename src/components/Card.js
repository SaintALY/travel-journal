import React from 'react';

function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img src="https://picsum.photos/200" alt=""/>
            <h1>{props.item.title}</h1>
            <p>location</p>
            <p>start date</p>
            <p>end date</p>
            <p>description</p>
            <p>googleMapsUrl</p>
        </div>
    );
}

export default Card;
