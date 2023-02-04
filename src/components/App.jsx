import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">Folk Dances of Jammu</h1>

      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        email={contacts[2].email}
      />
      <Card
        name={contacts[3].name}
        img={contacts[3].imgURL}
        email={contacts[3].email}
      />
    </div>
  );
}

export default App;
