import React from "react";
import Header from './Header';

class LocalStorage extends React.Component {
  render() {
    const person = {
      name: "cuba",
      age: 27
    };
    // saving to local storage
    const personToJSON = JSON.stringify(person);
    localStorage.setItem("newPerson", personToJSON);
    // retrieving from local storage
    const getPerson = localStorage.getItem("newPerson");
    const personParse = JSON.parse(getPerson);
    return (
      <div>
          <Header props text = 'My Likes Page'/>
        <h2>THe stringified version</h2>
        <p>{personToJSON}</p>
        <h2>The parsed version is</h2>
        <p>{personParse.name}</p>
      </div>
    );
  }
}

export default LocalStorage;
