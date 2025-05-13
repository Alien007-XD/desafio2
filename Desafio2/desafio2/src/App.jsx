//Se importa React y el hook useState
import React, { useState } from 'react'
import './App.css'


const App = () => {

  //Estado para guardar tareas
  const [tasks, setTasks] = useState([]);

  //Estado para guardar valor del input de nueva tarea
  const [newTask, setNewTask] =useState ("");

  //Funcion para agregar nueva tarea
  const addTask = () => {

    //Se agrega si no esta vacia (ignora espacios con trim)
    if(newTask.trim() !==""){

      //Añade nueva tarea al array de tareas existentes
      setTasks([...tasks, newTask]);

      //Limpia campo de input
      setNewTask("");
    }
  };

  //Funcion para eliminae una tarea segun su indice
  const deleteTask = (index) => {

    //Filtrar tareas dejando fuera la que coincide con el indice
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks)
    };

    //Render del componente
  return (
    <>
          <div className="container text-center mt-5" style={{maxWidth: "600px"}}>
        <h1 className="text-white mb-4">To-do now</h1>

        {/*input y boton para agregar nueva tarea*/}
        <div className="input-group mb-4">
          <input 
            type="text" 
            className="form-control"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)} //Actualiza el estado con cada tecla
            />
          <button className="btn btn-dark" onClick={addTask}>
            Add task
          </button>
        </div>

        <hr className="text-white"/> 

        {/*Lista de tareas */}
        <ul className="list-group">
          {tasks.map ((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center bg-dark text-white mb2"
              >
                {task}
                <button
                  className="btn btn-outline-light btn-sm"
                  onClick={() => deleteTask(index)} //Llama a la funcion para eliminar
                  >
                    <i className="bi bi-trash"></i> {/*Icono de Bootstrap */}
                </button>
              </li>
          ) ) }
        </ul>
      </div>
    </>
  );
};

//Se exporta el componente para usarlo en otro archivo
export default App
