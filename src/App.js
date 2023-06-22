import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" price="$10" />
      <Todo text="Master React" price="$8.99" />
      <Todo text="Explore the full React Course" price="$19.99" />
    </div>
  );
}

export default App;
