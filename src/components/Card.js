import React from 'react';

const Card = ({name, profession}) => {
    return (
      <div className="card">
        <div className="container">
          <img src="https://www.shareicon.net/data/128x128/2016/06/25/786549_people_512x512.png" className="Img-logo" alt="image" />
          <h4> {name} </h4>
          <p>{profession}</p>
          <p>09157161253</p>
          eunicesausbeltran@yahoo.com
        </div>
      </div>
    );
  }

export default Card;
