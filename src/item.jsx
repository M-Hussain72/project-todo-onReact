import { useState } from "react";

const Item = (prop) => {
  const [visible, setEditMode] = useState(true);
  const [editcontent, setEditcontent] = useState("");
  const { todo, id, removeTodo, editSavebtn } = prop;

  const handleSavebtn = (id, content) => {
    setEditMode(true);
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
              setEditMode(false);
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
              setEditcontent(e.target.value);
            }}
            value={editcontent}
          />
          <button
            onClick={() => {
              handleSavebtn(id, editcontent);
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
