import React, { useState } from "react";
import { SearchBar } from "../components/SearchBar/SearchBar";

import "./styles.css";

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="background">
      <SearchBar onChange={setSearchTerm} />
    </div>
  );
};

export default HomeScreen;
