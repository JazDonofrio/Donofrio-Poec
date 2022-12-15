import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";


export default function Profile(){
  {/*estados de los botones y la imagen/"skeleton" */}
  const [loading, setLoading] = useState(true);
  const [editando, setEditando] = useState(false);

  {/* estados del nombre e imagen*/}
  const [nombre, setNombre] = useState("");
  const [apellido, setApelllido] = useState("");
  const [edad, setEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [dni, setDni] = useState("");
  const [cosaFav, setCosaFav] = useState("");
  const [img, setImg] = useState("");

  {/*Funcion para guardar el nombre al editarlo */}
  function save() {
    console.log("Nombre: ", nombre);
    setEditando(false);
  }

  {/* Utilizamos el useEffect para darle un effecto,
en este caso "retardante" para la imagen
Si cargando es False, muestra la imagen segundos mas tarde, dando
el efecto que este se cargara*/}

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setImg(
        "https://thumbs.dreamstime.com/b/paisaje-marino-colorido-fondo-cuadrado-83134907.jpg"
      );
    }, 1050);
  }, []);

  return(
    <div className="Datos">
      <h1 style={{color: "white"}}>Formulario De Perfil</h1>
      <form>

        {/* Imagen y estilo de imagen */}
      <img style={{
        borderRadius: 250,
      }}
        width={240}
        src={img ? img : null}
        height={240}
      /><br></br>


      {/* Campos para los datos */}


      {/*  NOMBRE */}
      {editando ? (
        <input className="input"
        style={{
          width: 200,
          marginTop: 20,
        }}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          type="text"
          placeholder="Nombre"
        />
      ) : (
        <Typography
          style={{color: "white" }}
          className={loading ? "skeleton" : ""}>Nombre:{nombre}
        </Typography>
      )}<br></br>

      {/*  APELLIDO */}

      {editando ? (
        <input
        style={{
          width: 200,
          marginTop: 5,

        }}
          value={apellido}
          onChange={(e) => setApelllido(e.target.value)}
          type="text"
          placeholder="Apellido"
        />
      ) : (
        <Typography
          style={{ color: "white" }}
          className={loading ? "skeleton" : ""}>Apellido:{apellido}
        </Typography>
      )}<br></br>

      {/* EDAD */}
      {editando ? (
        <input
        style={{
          width: 200,
          marginTop: 5,

        }}
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          type="number"
          placeholder="Edad"
        />
      ) : (
        <Typography
          style={{ color: "white" }}
          className={loading ? "skeleton" : ""}>Edad:{edad}
        </Typography>
      )}<br></br>


      {/* FECHA DE NACIMIENTO */}
      {editando ? (
        <input
        style={{
          width: 200,
          marginTop: 5,

        }}
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          type="date"
          placeholder="Fecha de nacimiento"
        />
      ) : (
        <Typography
          style={{ color: "white" }}
          className={loading ? "skeleton" : ""}>Fecha Nacimiento:{fecha}
        </Typography>
      )}<br></br>


      {/* DNI */}
      {editando ? (
        <input
        style={{
          width: 200,
          marginTop: 5,

        }}
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          type="number"
          placeholder="Dni"
        />
      ) : (
        <Typography
          style={{ color: "white" }}
          className={loading ? "skeleton" : ""}>DNI:{dni}
          </Typography>
      )}<br></br>


      {/* COSA FAVORITA */}
      {editando ? (
        <input
        style={{
          width: 200,
          marginTop: 5,

        }}
          value={cosaFav}
          onChange={(e) => setCosaFav(e.target.value)}
          type="description"
          placeholder="Cosa Favorita"
        />
      ) : (
        <Typography
          style={{ color: "white" }}
          className={loading ? "skeleton" : ""}>Cosa favorita:{cosaFav}
        </Typography>
      )}<br></br>
      </form>

        {/*Boton que al cambiar su estado cambia el color y su nombre, si esta editando pasa violeta y aparece
        "Editar", de lo contario aparece "Guarda" y pasa a azul.*/}

      <Button
      style={{
        width: 210,
        marginTop: 25,

      }}
        variant="contained"
        color={editando ? "info" : "warning"}
        onClick={() => (editando ? save() : setEditando(true))}
      > {editando ? "Guardar" : "Editar"}
      </Button>
    </div>
  )
}

