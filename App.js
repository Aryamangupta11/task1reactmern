import React, { useState } from "react";
import "./App.css";
function App() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const wordCount = text.split(" ").length;
  return (
    <div className="App">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type your text here..."
      />
      <p>Word count: {wordCount}</p>
    </div>
  );
}
export default App;