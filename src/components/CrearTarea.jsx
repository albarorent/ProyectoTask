import { useState } from 'react'

const Creartarea = (props) => {

  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleSubmit = (e) =>{
      e.preventDefault();
      props.crearTarea(nuevaTarea)
      setNuevaTarea('');
  }


  return (
    
    <>
    <form className='task__form' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresar tarea"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button>Guardar tarea</button>
      </form>
    </>
  )
}

export default Creartarea
