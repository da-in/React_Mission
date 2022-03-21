import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");
  const btnStyle = {
    color: "#ffffff",
    background: "lightgray",
    padding: "5px 9px",
    cursor: "pointer",
    float: "right",
  };

  const handleSubmit = (e) => {
    //form 안에 input을 전송할 때 페이지 리로드 되는 것 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    // setState({todoData: [...todoData, newTodo], value: ""});
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  const resetTodoData = () => {
    setTodoData([]);
  };

  return (
    <div className="container">
      <div className="todoBlock">
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className="topContainer"
        >
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <button style={btnStyle} onClick={() => resetTodoData()}>
            모두 지우기
          </button>
        </div>
        <br />
        <br />
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        <List
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
