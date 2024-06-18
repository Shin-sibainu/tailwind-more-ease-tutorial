import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <div className="py-10 flex gap-4">
        <Button id="btn1" onClick={() => alert("clicked")}>
          Button
        </Button>
        <Button className="bg-red-500 hover:bg-red-600">Delete</Button>
        <Button variant={"secondary"}>Delete</Button>
        <Button variant={"danger"}>Delete</Button>
        <Button variant={"danger"} size={"md"}>
          Delete
        </Button>
        <Button size="lg">Save</Button>
      </div>
    </div>
  );
}

export default App;
