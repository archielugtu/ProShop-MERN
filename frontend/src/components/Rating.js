import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      {" "}
      {[1, 2, 3, 4, 5].map((index) => (
        <i
          key={index}
          style={{ color }}
          className={
            value >= index
              ? "fas fa-star"
              : value >= index - 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      ))}
      <span>{text && text}</span>
    </div>
  );
};

// Have a default prop value!
Rating.defaultProps = {
  color: "#f8e825",
};

// Sets prop type and ensures that props have the required type!
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string,
  color: PropTypes.string,
};

export default Rating;
