import { useState } from "react";

export const CreateTodo = () => {
  const style = {
    padding: 10,
    margin: 10,
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={style}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <input
        style={style}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <button onClick={function () {
        fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
                title, description
            }),
            headers: {
                "content-type" : "application/json"
            }
        }).then(async function(res){
            const json = await res.json();
            alert("Todo Added");
        });
      }}> Add a todo</button>
    </div>
  );
};
