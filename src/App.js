import { useState } from "react";
import "./index.css";

function App() {
  return (
    <form className="form">
      <h1>Grocery Bud</h1>
      <div className="input-div">
        <input type="text" />
        <button class="addBtn" type="submit">
          Add Item
        </button>
      </div>
    </form>
  );
}

export default App;
