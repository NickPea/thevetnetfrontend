import React from "react";
import Entry from "./Pages/Entry";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Entry />
      </BrowserRouter>
    </div>
  );
}

export default App;
