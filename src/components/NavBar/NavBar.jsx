import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <Link to="/">
        <h6>LANDIG</h6>
      </Link>
      <Link to="/tareas">
        <h6>TAREAS</h6>
      </Link>
      <Link to="/form">
        <h6>NUEVA TAREA</h6>
      </Link>
      <Link to="/about">
        <h6>ABOUT</h6>
      </Link>

      <hr />
    </div>
  );
};

export default NavBar;
