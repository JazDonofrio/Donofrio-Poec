type PropsBotones = {
  nombre: string;
};

function Botones({nombre} : PropsBotones) {
  return (
    <div>
        <button>{nombre}</button>
    </div>
  );
}

export default Botones;
