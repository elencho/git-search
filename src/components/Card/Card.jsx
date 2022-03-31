import React from "react";

const styles = {
  card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "#161B22",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    //borderColor: "#30363D",
    borderColor: "#30363D",
    borderWidth: "2px",
    borderStyle: "solid",
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
  iamge: {
    width: "100px",
    heigth: "100px",
    borderRadius: "50%",
  },
  text: {
    color: "#C8D1D9",
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
    >
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        style={styles.iamge}
      />
      {/* <p style={styles.text}>asd</p> */}
    </div>
  );
};

export default Card;
