import { useState } from "react";
import Count from "./Count";

let arrayToDo = [];
let count = 0;
function ToDo() {
  let [addCount, setaddCount] = useState();
  let [AddTodo, setAddToDo] = useState([]);

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
    console.log(index);
    // let item = arrayToDo.indexOf(index);
    arrayToDo.splice(index, 1);
    setAddToDo(arrayToDo);
  }

  function addCounter() {
    // console.log("clicked + ");
    addCount = count++;
    console.log(addCount);
    setaddCount(addCount);
  }

  function removeCounter() {
    // console.log("clicked + ");
    addCount = count--;
    console.log(addCount);
    setaddCount(addCount);
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
              {item} <button onClick={() => remove(index)}>Delete</button>
              <br />
              <button onClick={addCounter}> + </button>
              <h6>{count}</h6>
              <button onClick={removeCounter}> - </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
} //function ToDo
export default ToDo;
