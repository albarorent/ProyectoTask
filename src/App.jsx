import { useState, useEffect } from "react";
import Creartarea from "./components/Creartarea";
import { TablaTarea } from "./components/TablaTarea";
import ControlVisible from "./components/ControlVisible";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  function crearTarea(taskName) {
    if(taskName==""){
      alert("No tiene que agregar un campo vacio")
    }else{
      if (!taskItems.find((task) => task.name === taskName)) {
        //agrega el arreglo que ya existe donde agrega las nuevas tareas
        setTaskItems([...taskItems, { name: taskName, done: false }]);
      }
    }
    
  }

  const toggleTask = (task) => {
    //cambiamos el valor done true o false
    setTaskItems(
      taskItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    //Muestra las tareas
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  const cleanTasks = () => {
    //quitar las tareas que ya estan hechas
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    //convierte el arreglo en un json string
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <>
      <main className="container">
        <div className="div__padre">
          <h1>Listado de Tareas</h1>
          <Creartarea crearTarea={crearTarea} />
          <TablaTarea tasks={taskItems} toggleTask={toggleTask} />
          <ControlVisible
            isChecked={showCompleted}
            setShowCompleted={(checked) => setShowCompleted(checked)}
            cleanTasks={cleanTasks}
          />

          {showCompleted === true && (
            <TablaTarea
              tasks={taskItems}
              toggleTask={toggleTask}
              showCompleted={showCompleted}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
