import React, {useState} from "react";
import "./styles.css";

import Card from "../Card/Card";

const Layout = () => {

  return (
    <div className="pin_container">
      <Card size="small" />
      <Card size="medium" />
      <Card size="large" />
      <Card size="medium" />
      <Card size="large" />
      <Card size="small" />
      
      <Card size="large" />
      <Card size="small" />
      <Card size="medium" />
      
    </div>
  );
};

export default Layout;
