import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

type PropsMenu = {
  nombre: string;
  options: string[];

};
function Menu({ nombre, options }: PropsMenu) {

  return (
        <NavDropdown
            title={nombre}
            id="navBar">
                  {options.map(option => (
            <NavDropdown.Item href="#action">{option}</NavDropdown.Item>
                  ))}
          </NavDropdown>

  );
}

export default Menu;
