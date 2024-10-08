import GutsImage from "../images/Guts.webp";
import ThorfinnImage from "../images/Thorfinn.webp";
import SilvaImage from "../images/Silva.jpg";
import NoraImage from "../images/Nora.jpg";
import GandalfImage from "../images/Gandalf.webp";
import LoydImage from "../images/Loyd.jpg";
import EnemyImage from "../images/Oponent.webp";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/context";

const Options = () => {
  const { setCharacter, character, setCharacters, characters } = useContext(MyContext);
  const [initiative, setInitiative] = useState(character.initiative);
  const [actions, setActions] = useState(character.actions);
  const [name, setName] = useState(character.charName);
  const [quantity, setQuantity] = useState("");
  const [armourPenalty, setArmourPenalty] = useState("");
  const [fadiga, setFadiga] = useState("");

  useEffect(() => {
    setInitiative(character.initiative);
    setActions(character.actions);
  }, [character]);

  const handleInitiative = ({target}) => {
    setInitiative(target.value);
  };

  const handleActions = ({target}) => {
    setActions(target.value);
  };

  const handleName = ({target}) => {
    setName(target.value);
  };

  const handleQuantity = ({target}) => {
    setQuantity(target.value);
  };

  const handleArmourPenalty = ({target}) => {
    setArmourPenalty(target.value);  
  };

  const handleFadiga = ({target}) => {
    const nivelFadiga = target.value;
    let debuffAction = 0;
    let debuffInitiative = 0
    
    switch (nivelFadiga) {
      case "Descansado":
        debuffAction += 0;
        debuffInitiative += 0;            
        break;
      case "Levemente cansado":
        debuffAction += 0;
        debuffInitiative += 1;
        break; 
      case "Cansado":
        debuffAction += 0;
        debuffInitiative += 2;
        break;
      case "Muito cansado":
        debuffAction += 0;
        debuffInitiative += 3;
        break;
      case "Exausto":
        debuffAction += 1;
        debuffInitiative += 4;
        break; 
      case "Debilitado":
        debuffAction += 2;
        debuffInitiative += 6;
        break;
      case "Incapacitado":
        debuffAction += 3;
        debuffInitiative += 8;
        break;
      case "Semi consciente":
        debuffAction += 3;
        debuffInitiative += 11;
        break;
      default:
        break;
    }
    
    const penalidades = {
      debuffAction,
      debuffInitiative
    };

    setFadiga(penalidades);
  };

  const handleAdd = () => {
    if(character.playerName === '') {
      for (let i = 1; i <= quantity; i += 1) {
        setCharacters((prevCharacters) => [...prevCharacters, { 
          charName: quantity > 1 ? name + " " + i.toString(): name,
          playerName: '',
          initiative,
          currentInitiative: initiative,
          currentActions: actions,
          actions,
          image: character.image
        }].sort((a, b) => b.initiative - a.initiative));  
      }
      
    } else {
      setCharacters((prevCharacters) => [...prevCharacters, { 
        charName: character.charName,
        playerName: character.playerName,
        initiative: initiative - Number(armourPenalty) - fadiga.debuffInitiative,
        currentInitiative: initiative - Number(armourPenalty) - fadiga.debuffInitiative,
        currentActions: actions - fadiga.debuffAction,
        actions: actions - fadiga.debuffAction,
        image: character.image
      }].sort((a, b) => b.initiative - a.initiative));
    }

    document.getElementById('my_modal_2').close(); 
  };

  const handleCharacterSelect = ({ target }) => {
    const selectedCharacter = target.value;

    const charInfo = {
      Guts: { charName: "Guts", playerName: "Thi", initiative: 11, actions: 3, image: GutsImage },
      Thorfinn: { charName: "Thorfinn", playerName: "Breno", initiative: 17, actions: 3, image: ThorfinnImage },
      Silva: { charName: "Silva", playerName: "Fer", initiative: 18, actions: 4, image: SilvaImage },
      Nora: { charName: "Nora", playerName: "Gui", initiative: 17, actions: 4, image: NoraImage },
      Gandalf: { charName: "Gandalf", playerName: "Polk", initiative: 14, actions: 3, image: GandalfImage },
      Loyd: { charName: "Loyd", playerName: "Julio", initiative: 15, actions: 3, image: LoydImage },
      Inimigo: { charName: "", playerName: "", initiative: "", actions: "", image: EnemyImage },
    };

    setCharacter(charInfo[selectedCharacter]);
  };

  const handleStart = () => { 
    const unsortedCharacters = characters.map((character) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      
      return {
        charName: character.charName,
        playerName: character.playerName,
        image: character.image,
        initiative: character.initiative,
        currentInitiative: Number(character.initiative) + randomNumber,
        currentActions: character.actions,
        actions: character.actions
      };
    });
    setCharacters(unsortedCharacters.sort((a, b) => b.currentInitiative - a.currentInitiative));

  };

  return (
    <div className="fixed bottom-10 mt-5 w-full flex justify-around">
      <button onClick={handleStart} className="btn btn-outline btn-accent">Começar turno</button>
      <button class="btn btn-outline btn-success" onClick={()=>document.getElementById('my_modal_2').showModal()}>Adicionar personagem</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicionar personagem</h3>
          <select className="select select-primary mt-5 w-full max-w-xs" onChange={handleCharacterSelect}>
            <option disabled selected>Player ou inimigo?</option>
            <option>Guts</option>
            <option>Thorfinn</option>
            <option>Silva</option>
            <option>Nora</option>
            <option>Gandalf</option>
            <option>Loyd</option>
            <option>Inimigo</option>
          </select>
          {character === "" ? <h1></h1> : character.charName === "" ? (
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Nome do inimigo"
                value={name}
                onChange={handleName}
                className="input mt-5 input-bordered input-error w-full max-w-xs" 
              />              
              <div className="flex items-center gap-2 mt-5">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={character.image}
                      alt="ngm do grupo é cego kk" />
                  </div>
                </div>
              <input
                type="number"
                placeholder="Iniciativa"
                value={initiative}
                onChange={handleInitiative}
                className="input input-bordered input-primary w-full max-w-xs" 
              />
              <input
                type="number"
                placeholder="Ações"
                value={actions}
                onChange={handleActions}
                className="input input-bordered input-secondary w-full max-w-xs" 
              />
              </div>
              <input 
                type="number" 
                placeholder="Quantos?"
                value={quantity}
                onChange={handleQuantity}
                className="input input-bordered w-full max-w-xs mt-5" 
              />
              <button onClick={handleAdd} className="mt-5 btn btn-outline btn-success">Adicionar</button>
            </div>
            ) : (
            <div className="flex flex-col">
            <div className="flex items-center gap-2 mt-5">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={character.image}
                    alt="ngm do grupo é cego kk" />
                </div>
              </div>
              <div>
                <div className="font-bold">{character.charName}</div>
                <div className="text-sm opacity-50">{character.playerName}</div>
              </div>
              <input
                type="number"
                placeholder="Iniciativa"
                value={initiative}
                onChange={handleInitiative}
                className="input input-bordered input-primary w-full max-w-xs" 
              />
              <input
                type="number"
                placeholder="Ações"
                value={actions}
                onChange={handleActions}
                className="input input-bordered input-secondary w-full max-w-xs" 
              />
            </div>
              <input
                type="number"
                placeholder="Debuff armadura"
                value={armourPenalty}
                onChange={handleArmourPenalty}
                className="input input-bordered input-warning w-full max-w-xs mt-5" 
              />
              <select className="select select-bordered mt-5 w-full max-w-xs" onChange={handleFadiga}>
                <option disabled selected>Nível de fadiga</option>
                <option>Descansado</option>
                <option>Levemente cansado</option>
                <option>Cansado</option>
                <option>Muito cansado</option>
                <option>Exausto</option>
                <option>Debilitado</option>
                <option>Incapacitado</option>
                <option>Semi consciente</option>
                <option>Inconsciente</option>
                <option>Morto</option>
              </select>
              <button onClick={handleAdd} className="mt-5 btn btn-outline btn-success">Adicionar</button>
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