import { MyContext } from "../context/context";
import Entity from "./Entity";
import { useContext } from "react";

const Characters = () => {
  const { characters } = useContext(MyContext);

  return (
  <div className="overflow-x-auto max-h-[50vh] max-w-full mt-6">
    <table className="table">
      {/* head */}
      <thead className="">
        <tr>
          <th>
          </th>
          <th>Nome</th>
          <th>Iniciativa</th>
          <th>Ações restantes</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => {
          return (
            <Entity 
            charName={character.charName}
            playerName={character.playerName}
            image={character.image}
            initiative={character.currentInitiative}
            actions={character.currentActions}
          />
          ) 
        })}
      </tbody>
  </table>
  </div>
  ); 
};

export default Characters;