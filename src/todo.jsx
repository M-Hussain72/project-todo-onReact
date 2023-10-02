import Item from "./item";
import TodoAddBtn from "./todoAddBtn";
import { useState } from "react";
import uniqid from "uniqid";

const Todo = () => {
  const [todolist, setTodolist] = useState([]);

  const removeTodo = (todoid) => {
    const newlist = todolist.filter((item) => item.id != todoid);
    setTodolist(newlist);
  };

  const editSavebtn = (todoid, content) => {
    let newlist = [...todolist];
    newlist.map((item) => {
      if (item.id === todoid) {
        item.content = content;
      }
    });
    setTodolist(newlist);
  };

  const addItems = (todoContent) => {
    const arr = [...todolist];
    if (todoContent.length > 0) {
      const id = uniqid();
      arr.push({ id: id, content: todoContent });
    } else alert("ToDO is empty!");

    setTodolist(arr);
  };

  return (
    <div id="box">
      <from>
        <h1>ToDO-List</h1>
        <div className="divideline"></div>
        {todolist.length > 0 ? (
          todolist.map((item, index) => (
            <Item
              key={index}
              todo={item.content}
              id={item.id}
              removeTodo={removeTodo}
              editSavebtn={editSavebtn}
            />
          ))
        ) : (
          <div className="emptyToDo">No ToDo Here</div>
        )}
        <TodoAddBtn addItems={addItems} />
      </from>
    </div>
  );
};

export default Todo;
