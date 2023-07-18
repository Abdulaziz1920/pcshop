import { Fragment } from "react";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laptop from "./pages/Laptop/Laptop";
import Post from "./pages/Post/Post";
import Monitor from "./pages/Monitor/Monitor";
import PostMonitor from "./pages/Post/PostMonitor";
import Keyboard from "./pages/Keyboard/Keyboard";
import PostKeyboard from "./pages/Post/PostKeyboard";
import Case from "./pages/Case/Case";
import PostCase from "./pages/Post/PostCase";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Login />} />
          <Route path="main" element={<Main />} />
          <Route path="laptop" element={<Laptop />} />
          <Route path="monitor" element={<Monitor />} />
          <Route path="keyboard" element={<Keyboard />} />
          <Route path="case" element={<Case />} />
          <Route path="laptop/:id" element={<Post />} />
          <Route path="case/:id" element={<PostCase />} />
          <Route path="monitor/:id" element={<PostMonitor />} />
          <Route path="keyboard/:id" element={<PostKeyboard />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
