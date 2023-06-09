import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({
  name, image, price,
}) => (
  <div className="coin">
    <div className="griditem">
      <img src={image} alt="crypto" />
      <div className="lastcoin">
        <h3>{name}</h3>
        <p className="coin-price">
          $
          {price}
        </p>
      </div>
    </div>
    <div className="icon">
      <i className="fa-sharp fa-solid fa-arrow-right" />
    </div>
  </div>
);

Coin.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Coin;
