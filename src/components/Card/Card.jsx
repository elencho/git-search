import React from "react";

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

const Card = (props) => {
  const { size } = props;
  return (
    <div
      style={{
        ...styles.card,
        ...styles[size],
      }}
    ></div>
  );
};

export default Card;
