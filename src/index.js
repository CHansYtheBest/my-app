import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { state, renderCallback } from "./redux/state";
import App from "./App";
import { addPost } from "./redux/state";
import { updatePostNewText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export function renderEverything() {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updatePostNewText={updatePostNewText} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

renderEverything();

renderCallback(renderEverything);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
