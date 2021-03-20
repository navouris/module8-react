import React from "react";
import Card from "./Card";
import heroes21 from "../heroes21";

function createCard(hero) {
  return (
    <Card
      key={hero.id}
      name={hero.name}
      img={hero.imgURL}
      attr={hero.attr}
      life={hero.life}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Μορφές του '21</h1>
      {heroes21.map(createCard)}
    </div>
  );
}

export default App;
