import GutsImage from "../images/Guts.webp";
import ThorfinnImage from "../images/Thorfinn.webp";
import SilvaImage from "../images/Silva.jpg";
import NoraImage from "../images/Nora.jpg";
import GandalfImage from "../images/Gandalf.webp";
import LoydImage from "../images/Oponent.webp";
import EnemyImage from "../images/Oponent.webp";
import { useContext } from "react";
import { MyContext } from "../context/context";

const Options = () => {
  const { setCharacter, character } = useContext(MyContext);

  const handleCharacterSelect = ({ target }) => {
    const selectedCharacter = target.value;

    const charInfo = {
      Guts: { charName: "Guts", playerName: "Thi", initiative: 9, actions: 2, image: GutsImage },
      Thorfinn: { charName: "Thorfinn", playerName: "Breno", initiative: 17, actions: 3, image: ThorfinnImage },
      Silva: { charName: "Silva", playerName: "Fer", initiative: 17, actions: 4, image: SilvaImage },
      Nora: { charName: "Nora", playerName: "Gui", initiative: 17, actions: 3, image: NoraImage },
      Gandalf: { charName: "Gandalf", playerName: "Polk", initiative: 14, actions: 3, image: GandalfImage },
      Loyd: { charName: "Loyd", playerName: "Julio", initiative: 17, actions: 3, image: LoydImage },
      Inimigo: { charName: "", playerName: "", initiative: 10, actions: 3, image: EnemyImage },
    };

    setCharacter(charInfo[selectedCharacter]);
  };

  return (
    <div className="mt-5 w-full flex justify-around">
      <button className="btn btn-outline btn-accent">Começar turno</button>
      <button class="btn btn-outline btn-success" onClick={()=>document.getElementById('my_modal_2').showModal()}>Adicionar personagem</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicionar personagem</h3>
          <select className="select select-accent mt-5 w-full max-w-xs" onChange={handleCharacterSelect}>
            <option disabled selected>Player ou inimigo?</option>
            <option>Guts</option>
            <option>Thorfinn</option>
            <option>Silva</option>
            <option>Nora</option>
            <option>Gandalf</option>
            <option>Loyd</option>
            <option>Inimigo</option>
          </select>
          {character === undefined ? <h1></h1> : (
            <div className="mt-5">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={character.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
            </div>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>   
    </div>
  ); 
};

export default Options;