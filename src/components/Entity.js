import { useContext } from "react";
import { MyContext } from "../context/context";

const Entity = (props) => {
  const { image, charName, playerName, initiative, actions } = props;
  const { characters, setCharacters } = useContext(MyContext);
  const handleClick = () => {
    const target = characters.find((character) => character.charName === charName);
    target.currentActions = target.currentActions - 1;
    const updatedCharacters = characters.map(character => 
      character.charName === charName ? target : character
    );
    
    setCharacters(updatedCharacters.sort((a, b) => b.currentInitiative - a.currentInitiative));
  };

  return (
        <tr onClick={handleClick}>
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
          <td>
            <span className="badge badge-secondary badge-outline badge-md text-base">{actions}</span>
          </td>
        </tr>
  ); 
};

export default Entity;