import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./data.js";
import "./App.css";
export default function App() {
  const dataElements = Data.map((dataCard) => {
    return <Card key={dataCard.id} {...dataCard} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{dataElements}</section>
    </div>
  );
}
