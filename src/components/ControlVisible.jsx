import React from "react";

const ControlVisible = ({isChecked,setShowCompleted,cleanTasks}) => {

    const handleDelete = () =>{
        if(window.confirm('Estas seguro de eliminarlo?')){
            cleanTasks()
        }
    }

  return (
    <div className="task__clean">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Mostrar tareas hechas</label>

      <button onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
};

export default ControlVisible;
