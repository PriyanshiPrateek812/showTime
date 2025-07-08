import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const [header, setHeader] = useState("TIME");
  function getTime() {
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let time = hour + ":" + min + ":" + sec;
    setHeader(time);
  }

  return (
    <div className="container">
      <h1>{header}</h1>

      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
