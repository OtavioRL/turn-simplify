import Header from "./components/Header";
import Characters from "./components/Characters";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Characters />
    </div>
  );
};

export default App;
