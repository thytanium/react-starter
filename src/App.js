import { useState } from "react";
import Title from "@/components/Title";
import "./App.css";

export default function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div className="h-screen w-full from-indigo-700 to-purple-500 bg-gradient-to-br flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-xl p-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setTodoList([...todoList, todo]);
            setTodo("");
          }}
        >
          <Title>React Starter</Title>
          <input
            className="border rounded shadow-inner p-2 mr-2"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            className="bg-indigo-700 px-4 py-2 text-white rounded hover:bg-indigo-600 font-medium shadow"
            type="submit"
          >
            Add Todo
          </button>
          <ul className="mt-4 space-y-2">
            {todoList.map((item, index) => (
              <li key={index} className="p-2 rounded bg-gray-300">
                {item}
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
}
