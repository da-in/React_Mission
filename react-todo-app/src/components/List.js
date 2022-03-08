import React, { useState } from "react";
import Form from "./Form";
export default function List({
  handleSubmit,
  value,
  setValue,
  todoData,
  setTodoData,
}) {
  const [modify, setModify] = useState(false);
  const btnStyle = {
    color: "#ffffff",
    background: "lightgray",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const modifyTodoData = (id) => {
    // let newTodoData = todoData.filter((data) => data.id !== id);
    // setTodoData(newTodoData);
    setModify(!modify);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
      display: "flex",
      justifyContent: "space-between",
    };
  };

  return (
    <div>
      {todoData.map((data) => (
        <div>
          {modify ? (
            <div style={getStyle(data.completed)} key={data.id}>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => handleCompleteChange(data.id)}
                />
                <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="value"
                    style={{ flex: "10", padding: "5px" }}
                    placeholder={data.title}
                    value={value}
                    onChange={handleChange}
                  />
                </form>
              </div>
              <input
                type="submit"
                value="입력"
                className="btn"
                style={{ flex: "1" }}
              />
            </div>
          ) : (
            <div style={getStyle(data.completed)} key={data.id}>
              <div>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => handleCompleteChange(data.id)}
                />
                {data.title}
              </div>
              <div>
                <button
                  style={btnStyle}
                  onClick={() => modifyTodoData(data.id)}
                >
                  수정
                </button>

                <button style={btnStyle} onClick={() => handleClick(data.id)}>
                  X
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
