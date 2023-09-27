import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StrictMode } from "react";
import Todo from "./todo";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

const continar = document.getElementById("root");
const root = createRoot(continar);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
