import Item from "./item";
import TodoAddBtn from "./todoAddBtn"
import { useState } from "react";
import uniqid from "uniqid";

const Todo = () => {
  const [list, setlist] = useState([]);

  
  const removeTodo = (todoid) => {
    const newlist = list.filter((item) => item.id != todoid);
    setlist(newlist);
  };

  const editSavebtn = (todoid, content) => {
    let newlist = [...list];
    newlist.map((item) => {
      if (item.id === todoid) {
        item.content = content;
      }
    });
    setlist(newlist);
  };

  const addItems = (todoContent) => {
    const arr = [...list];
    if (todoContent.length > 0) {
      const id = uniqid();
      arr.push({id:id,content:todoContent});
    } else alert("ToDO is empty!");

    setlist(arr);
  
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
              todo={item.content}
              id={item.id}
              removeTodo={removeTodo}
              editSavebtn={editSavebtn}
            />
          ))
        ) : (
          <div className="emptyToDo">No ToDo Here</div>
        )}
        <TodoAddBtn addItems={addItems}/>
      </from>
    </div>
  );
};

export default Todo;
