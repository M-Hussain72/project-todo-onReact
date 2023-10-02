import { useState } from "react";

const TodoAddBtn = (props)=>{
  const [todoContent,setTodoContent]=useState("")
  const {addItems} = props
    const handleChange = (e) => {
      setTodoContent(e.target.value);
      };
    return(
        <label htmlFor="text">
          <input
            onChange={handleChange}
            type="text"
            placeholder="write ToDo"
            value={todoContent}
          />
        <button onClick={()=>{
          addItems(todoContent);
          setTodoContent("");
        }}>Add ToDo</button>
        </label>
    )
}

export default TodoAddBtn;