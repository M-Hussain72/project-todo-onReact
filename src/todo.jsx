import Item from "./items";
import { useState } from "react";
import uniqid from "uniqid";

const Todo = () => {
  const [input, setinput] = useState("");
  const [list, setlist] = useState([]);

  const handleChange = (e) => {
    setinput(e.target.value);
  };
  const removeTodo = (todoid) => {
    const newlist = list.filter((item) => item[1] != todoid);
    setlist(newlist);
  };

  const editSavebtn = (todoid, content) => {
    let newlist = [...list];
    newlist.map((item) => {
      if (item[1] === todoid) {
        item[0] = content;
      }
    });
    setlist(newlist);
  };

  const addItems = () => {
    const arr = [...list];
    if (input.length > 0) {
      const id = uniqid();
      arr.push([input, id]);
    } else alert("ToDO is empty!");

    setlist(arr);
    setinput("");
  };

  return (
    <div id="box">
      <from>
        <h1>ToDO-List</h1>
        <div className="divideline"></div>
        {list.length > 0 ? (
          list.map((item, index) => (
            <Item
              key={index}
              todo={item[0]}
              id={item[1]}
              removeTodo={removeTodo}
              editSavebtn={editSavebtn}
            />
          ))
        ) : (
          <div className="emptyToDo">No ToDo Here</div>
        )}
        <label htmlFor="text">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write ToDo"
            value={input}
          />
        </label>
        <button onClick={addItems}>Add ToDo</button>
      </from>
    </div>
  );
};

export default Todo;
