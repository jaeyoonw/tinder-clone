import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Person from "./components/Person";
import Lonely from "./components/Lonely";
import Data from "./data.json";

const App = () => {
  const [people, setPeople] = useState(Data);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUesrs, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDisLikedUsers] = useState([]);
  const activeUser = 0;

  const removedPersonFromDataSrc = (people, userId) =>
    people.filter((person) => person.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUsers = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUesrs];
    const newDislikedUsers = [...dislikedUsers];

    // MY CHOICES IN APP
    switch (action) {
      case "ADD_TO_LIKED_USER":
        // if this person not in my likedUsers array
        if (!people[activeUser].likedUsers.includes(userId)) {
          newPeople[activeUser].likedUsers.push(userId);

          setLikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_DISLIKED_USER":
        if (!people[activeUser].dislikedUsers.includes(userId)) {
          newPeople[activeUser].dislikedUsers.push(userId);

          dislikedUsers(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      case "ADD_TO_SUPERDISLIKED_USER":
        if (!people[activeUser].superLikedUsers.includes(userId)) {
          newPeople[activeUser].superLikedUsers.push(userId);

          superLikedUesrs(newLikedUsers);
          setPeople(removedPersonFromDataSrc(people, userId));
        }
        break;
      default:
        return people;
    }
  };

  return (
    <div className="app">
      <Header />

      {people[1] ? (
        <Person
          key={people[1].id}
          person={people[1]}
          modifySuperficialChoices={modifySuperficialChoices}
          likedUsers={likedUsers}
        />
      ) : (
        <Lonely
          activeUsersImage={people[activeUser].image}
          likedUsers={likedUsers}
          superLikedUsers={superLikedUesrs}
        />
      )}
    </div>
  );
};

export default App;
