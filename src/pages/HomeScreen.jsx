import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { SearchBar } from "../components/SearchBar/SearchBar";

import "./styles.css";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="background">
      <SearchBar onChange={setSearchTerm} />
      <Layout />
    </div>
  );
};

export default HomeScreen;
