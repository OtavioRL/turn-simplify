const Options = () => {
  return (
    <div className="mt-5 w-full flex justify-around">
      <button className="btn btn-outline btn-accent">Começar turno</button>
      <button class="btn btn-outline btn-success" onClick={()=>document.getElementById('my_modal_2').showModal()}>Adicionar personagem</button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Adicionar personagem</h3>
          <select className="select select-accent mt-5 w-full max-w-xs">
            <option disabled selected>Player ou inimigo?</option>
            <option>Guts</option>
            <option>Thorfinn</option>
            <option>Silva</option>
            <option>Nora</option>
            <option>Gandalf</option>
            <option>Loyd</option>
            <option>Inimigo</option>
          </select>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>   
    </div>
  ); 
};

export default Options;