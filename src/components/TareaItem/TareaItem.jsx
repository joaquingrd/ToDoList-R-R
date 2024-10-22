import React from "react";

const TareaItem = () => {
  let arrayTareas = [];
  return (
    <div>
      {arrayTareas.map((tarea, index) => (
        <div key={index}>
          <p>{tarea.tarea}</p>
        </div>
      ))}
    </div>
  );
};

export default TareaItem;
