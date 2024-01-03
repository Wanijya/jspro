import React, { useState } from "react";

function App() {
  var [a, b] = useState(10);
  return (
    <div className="w-full h-screen bg-zinc-700 text-white p-5">
      <h1>{a}</h1>
      <button
        onClick={() => b(a + 1)}
        className="px-5 py-1 bg-green-500 text-white rounded-2xl"
      >
        Click
      </button>
    </div>
  );
}

export default App;
