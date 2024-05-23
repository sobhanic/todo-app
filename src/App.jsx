import Header from "./Header";
import AppLayout from "./AppLayout";
import InputForm from "./InputForm";
import TaskItem from "./TaskItem";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  let sortedList = isSorted
    ? tasks.slice().sort((a, b) => Number(b.checked) - Number(a.checked))
    : tasks;

  function handleAdd(item) {
    setTasks((curTasks) => [...curTasks, item]);
  }

  function handleDelete(id) {
    setTasks((curTasks) => curTasks.filter((task) => task.id !== id));
  }

  function handleToggle(id) {
    setTasks((curTasks) =>
      curTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function handleSortList() {
    setIsSorted((cur) => !cur);
  }

  return (
    <AppLayout>
      <Header />
      <InputForm onAdd={handleAdd} onSortList={handleSortList} />
      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyItems: "start",
        }}
      >
        {sortedList.map((task) => (
          <TaskItem
            task={task}
            onDelete={handleDelete}
            onToggle={handleToggle}
            key={task.id}
          />
        ))}
      </ul>
    </AppLayout>
  );
}

export default App;
