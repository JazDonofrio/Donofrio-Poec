import { Navbar, Nav } from "react-bootstrap";
import MenuModels from "renderer/Models/MenuModel";
import Menu from "./Menu";
import CloseIcon from '@mui/icons-material/Close';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import ClearAllIcon from '@mui/icons-material/ClearAll';
type PropsMenus = {
  nombre: string;
  options: string[];
};
export default function Menus() {

  const menus: MenuModels[] = [
    { nombre: 'Archivo', options: ['Nuevo', 'Abrir', 'Cerrar'] },
    { nombre: 'Edicion', options: ['Copiar', 'Cortar', 'Pegar'] },
    { nombre: 'Herramientas', options: ['Configuracion'] },
    { nombre: 'Ayuda', options: ['Actualizaciones', 'Mas'] },
  ]
  return (
    <div className="Barra">

      <Navbar bg="light" expand="lg">
        <Nav style={{ height: 40 }}>
          {menus.map((menu, i) => (
            <Menu
            nombre ={menu.nombre}
            options ={menu.options}
            />
          ))}
        </Nav>
        <div>
        <DragHandleIcon onClick= { () => window.nativeFunctions.minimize()}/>
        <ClearAllIcon />
        <CloseIcon onClick= { () => window.nativeFunctions.close()}/>
        </div>

      </Navbar>
      <div
        style={{
          margin: 0,
          width: "100%",
          display: "flex"
        }}
      >

        <div
          style={{
            color: "black",
            background: "black",
            textAlign: "center"
          }}>
        </div>
      </div>
  </div>
  );
}
