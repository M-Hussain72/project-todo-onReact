import { useState } from "react";

const Item = (prop) => {
  const [visible, setvisible] = useState(true);
  const [content, setcontent] = useState("");
  const { todo, id, removeTodo, editSavebtn } = prop;
  

  const handleSavebtn = (id, content) => {
    setvisible(true);
    editSavebtn(id, content);
  };

  return (
    <div className="item" id={id}>
      {visible == true ? (
        <div>
          <label htmlFor="checkbox">
            <input name="checkbox" type="checkbox" />
          </label>
          <span>{todo}</span>
          <button
            onClick={() => {
              removeTodo(id);
            }}
            name="delete"
          >
            Delete
          </button>
          <button
            onClick={() => {
              setvisible(false);
            }}
            name="edit"
          >
            Edit
          </button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            onChange={(e) => {
              setcontent(e.target.value);
            }}
            value={content}
          />
          <button
            onClick={() => {
              handleSavebtn(id, content);
            }}
          >
            Save
          </button>
        </div>
      )}
      <br />
    </div>
  );
};

export default Item;
