import { useContext } from "react";
import { MyContext } from "../context/context";

const Entity = (props) => {
  const { image, charName, playerName, initiative, actions } = props;
  const { characters, setCharacters, setSelectedCharacter } = useContext(MyContext);
  const handleClick = () => {
    const target = characters.find((character) => character.charName === charName);
    if(target.currentActions !== 0) {
      target.currentActions = target.currentActions - 1;
    }
    const updatedCharacters = characters.map(character => 
      character.charName === charName ? target : character
    );
    
    setCharacters(updatedCharacters.sort((a, b) => b.currentInitiative - a.currentInitiative));
  };

  const handleEdit = () => {
    const target = characters.find((character) => character.charName === charName);
    setSelectedCharacter(target);

    document.getElementById('my_modal_3').showModal()
  };

  return (
        <tr className={Number(actions) === 0 ? 'opacity-10': ''}>
          <th>
          </th>
          <td>
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{charName}</div>
                <div className="text-sm opacity-50">{playerName}</div>
              </div>
            </div>
          </td>
          <td>
            <span className="badge badge-primary badge-outline badge-md text-base">{initiative}</span>
          </td>
          <td className="" onClick={handleClick} >
            <span className="badge badge-secondary badge-outline badge-md text-base">{actions}</span>
          </td>
          <td>
            <button onClick={handleEdit} className="btn btn-outline btn-warning">Edit</button>
          </td>
        </tr>
  ); 
};

export default Entity;