import { useState } from "react";
import Outdoor from "./components/outdoor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outdoor />
    </>
  );
}

export default App;
