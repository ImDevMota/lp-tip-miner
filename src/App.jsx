import { useState } from "react";
import Outdoor from "./components/Outdoor";
import Roulette from "./components/Roulette";
import Info from "./components/Info";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outdoor />

      <Roulette />

      <Info />
    </>
  );
}

export default App;
