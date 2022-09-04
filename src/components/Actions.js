import React from "react";
import Rewind from "./actions/Rewind";
import Like from "./actions/Like";
import Dislike from "./actions/Dislike";
import Superlike from "./actions/Superlike";

// object desturction 부분 공부하기
const Actions = ({ person, modifySuperficialChoices }) => {
  <div id="actions">
    <Rewind userId={person.id} />
    <Dislike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Like
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
    <Superlike
      userId={person.id}
      modifySuperficialChoices={modifySuperficialChoices}
    />
  </div>;
};

export default Actions;
