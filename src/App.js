import Header from "./components/Header";
import Characters from "./components/Characters";
import Options from "./components/Options";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Characters />
      <Options />
    </div>
  );
};

export default App;
