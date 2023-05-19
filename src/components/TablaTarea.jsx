import React from "react";
import TareaFila from "./TareaFila";

export const TablaTarea = ({ tasks, toggleTask, showCompleted = false }) => {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TareaFila task={task} key={task.name} toggleTask={toggleTask} />
      ));
  };

  return (
    <>
      <div className="task__table">
        <table>
          <thead>
            <tr>
              <th>Tareas</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(showCompleted)}</tbody>
        </table>
      </div>
    </>
  );
};
