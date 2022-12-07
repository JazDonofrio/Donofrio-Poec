type PropsBotones = {
  nombre: string;
  link: string;
};

function Botones({nombre, link} : PropsBotones) {
  return (
    <div className="Botones">
        <a target="_blank" href={link}>
        <button>{nombre}</button>
        </a>
    </div>
  );
}

export default Botones;
