import React, { useState } from "react";

function App() {
  const time1 = new Date().toLocaleTimeString("it-IT");
  const [time, setTime] = useState(time1);

  function getTime() {
    const newTime = new Date().toLocaleTimeString("it-IT");
    setTime(newTime);
  }

  setInterval(getTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
