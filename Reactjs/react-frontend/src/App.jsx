import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import Modal from "./components/Modal";
import BackDrop from "./components/Backdrop";
import Curousel from "./Curousel";
import Slide from "./components/Slide";
import { Button } from "flowbite-react";

function App() {
  return (
    <>
      <div className="flex flex-col my-10">
        <Curousel />
        <Slide />
        <div>
          <Button>Click me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
