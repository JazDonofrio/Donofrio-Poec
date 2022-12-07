type PropsBotones = {
  nombre: string;
  link: string;
};

function Botones({nombre, link} : PropsBotones) {
  return (
    <div className="Botones">
        <a target="blank" href={link}></a>
        <button>{nombre}</button>
    </div>
  );
}

export default Botones;
