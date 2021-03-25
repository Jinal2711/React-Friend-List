import { Navbar } from "react-bootstrap";
import "./App.css";
import FriendList from "./components/FriendList";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Friend List</Navbar.Brand>
      </Navbar>
      <div className="container-fluid">

      <FriendList />
      </div>
    </>
  );
}

export default App;
