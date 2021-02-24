import React from "react";

const Task = ({ name }) => {
  return (
    <div key={name}>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
        <p>{name}</p>
    </div>
  );
};

export default Task;
