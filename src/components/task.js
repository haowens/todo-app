import React from "react";

const Task = ({ name }) => {
  return (
    <div>
      {/**
       * TODO: add an html or bootstrap element that uses the name variable to display an individual task
       */}
      <ul>
        <p>{name}</p>  
      </ul> 
    </div>
  );
};

export default Task;
