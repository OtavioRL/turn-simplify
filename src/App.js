import Header from "./components/Header";
import Characters from "./components/Characters";
import Options from "./components/Options";
import { useContext } from "react";
import { MyContext } from "./context/context";

const App = () => {
  const { characters } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center">
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg">Salve!</h3>
          <p className="py-4">Ainda n terminei essa parte kk</p>
        </div>
      </dialog>      
      <Header />
      {characters.length === 0 ? <h1></h1> : <Characters />}
      <Options />
    </div>
  );
};

export default App;
