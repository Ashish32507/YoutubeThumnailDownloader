import { useState } from "react";
import Navbar from "./Components/Navbar";
import Herosection from "./Components/Herosection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Herosection />
    </>
  );
}

export default App;
