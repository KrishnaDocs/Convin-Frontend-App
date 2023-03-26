import React from 'react'


function CardItem ({ title, imageUrl, LinkBtn }) {
    return (
      <div className="card-container">
        <div className='image-container'>
            <img src={imageUrl} alt=''/>
        </div>
        <div className='card-title'>
            <title/>
        </div>
        <div className='Link-btn'>
            <LinkBtn/>
        </div>
      </div>
    );
  };
  
  export default CardItem;