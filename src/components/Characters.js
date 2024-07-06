import guts from "../images/guts.webp"

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
        {/* row 1 */}
        <tr>
          <th>
          </th>
          <td>
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={guts}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Guts</div>
                <div className="text-sm opacity-50">Thiago</div>
              </div>
            </div>
          </td>
          <td>
            <span className="badge badge-ghost badge-md text-base">15</span>
          </td>
          <td>
            <span className="badge badge-ghost badge-md text-base">15</span>
          </td>
        </tr>
    </tbody>
  </table>
  </div>
  ); 
};

export default Characters;