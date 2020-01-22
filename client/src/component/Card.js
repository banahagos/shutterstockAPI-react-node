import React from 'react';

const Card = props => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.img} alt={props.alt} />
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Card;