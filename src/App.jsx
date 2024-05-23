import Header from "./Header";
import AppLayout from "./AppLayout";
import InputForm from "./InputForm";
import TaskItem from "./TaskItem";

function App() {
  return (
    <AppLayout>
      <Header />
      <InputForm />
      <ul
        style={{
          listStyle: "none",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          justifyItems: "center",
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <TaskItem item={item} />
        ))}
      </ul>
    </AppLayout>
  );
}

export default App;
