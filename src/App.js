import logo from "./logo.svg";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";
import CardGroup from "./components/CardGroup2/CardGroup";

function App() {
  return (
    <div className="App">
      <Button variant="danger">My Button</Button>
      <br />
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup/>
    </div>
  );
}

export default App;
