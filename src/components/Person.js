import React from "react";
import Actions from "./Actions";

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, desc, age, image } = person; // Object Destructuring

  return (
    <>
      <div className="person">
        <div className="person-photo"></div>
      </div>
    </>
  );
};
