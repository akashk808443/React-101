import "./App.css";
import Card from "./day2Props/Card";
import { TodoData } from "./day3KeyList/TodoData";
import { Counter } from "./day1useState/Counter";
import { Todos } from "./day5useEffect/Todos";
import { Form } from "./day6useRef/Form";
function App() {
  return (
    <div className="App">
      <h2>REACT</h2>
      {/* <Card/> */}
      {/* <Counter/> */}
      {/* <TodoData/> */}
      {/* <Todos/> */}
      <Form />
    </div>
  );
}

export default App;
