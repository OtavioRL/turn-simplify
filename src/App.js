import Header from "./components/Header";
import Characters from "./components/Characters";
import Options from "./components/Options";
import { useContext } from "react";
import { MyContext } from "./context/context";

const App = () => {
  const { characters } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center">
      <Header />
      {characters.length === 0 ? <h1></h1> : <Characters />}
      <Options />
    </div>
  );
};

export default App;
