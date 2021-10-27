import { useState } from "react";

let arrayToDo = [];

function ToDo() {
  //   const [Todo, setToDo] = useState([]);
  const [AddTodo, setAddToDo] = useState([]);

  function addToDo(e) {
    e.preventDefault();

    let value = e.target[0].value;
    arrayToDo.push(value);
    arrayToDo = [...arrayToDo];
    setAddToDo(arrayToDo);

    // console.log(arrayToDo);
  }

  function remove(index) {
    arrayToDo = [...arrayToDo];
    console.log("click delete");
    let item = arrayToDo.indexOf(index);
    if (item > -1) {
      arrayToDo.splice(item, 1);
      setAddToDo(arrayToDo);
    }
  }
  return (
    <div>
      <h2>To Do List</h2>
      <br />
      <form onSubmit={addToDo}>
        <label>
          <h4>What needs to done </h4>
          <input type="text" />
          <button type="submit">Add</button>
        </label>
      </form>
      <ul>
        {AddTodo.map((item, index) => {
          console.log(AddTodo);

          return (
            <li key={index}>
              {item} <button onClick={remove}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
} //function ToDo
export default ToDo;

//==================================================================
//==================================================================
//==================================================================
//==================================================================
//==================================================================
