import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import  Modals  from "./components/Modal";
import BackDrop from "./components/Backdrop";
import Curousel from "./Curousel";
import Slide from "./components/Slide";
import { Button } from "flowbite-react";
import { CardComponent } from "./components/Card";
import  LoginModal  from "./components/LoginModal";

function App() {
  return (
    <>
      <div className="flex flex-col my-10">
        <Slide />
        <CardComponent />
        <Curousel />
        <div>
          <Button>Click me</Button>
        </div>
        <Modals />
        <LoginModal />
      </div>
    </>
  );
}

export default App;
