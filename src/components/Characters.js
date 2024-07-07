import guts from "../images/guts.webp"
import Entity from "./Entity";

const Characters = () => {
  return (
  <div className="overflow-x-auto max-w-full mt-6">
    <table className="table">
      {/* head */}
      <thead className="">
        <tr>
          <th>
          </th>
          <th>Nome</th>
          <th>Iniciativa</th>
          <th>Ações</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <Entity 
          image={guts} 
          charName="Guts" 
          playerName="Thiago" 
          initiative="9"
          actions="2"
        /> 
      </tbody>
  </table>
  </div>
  ); 
};

export default Characters;