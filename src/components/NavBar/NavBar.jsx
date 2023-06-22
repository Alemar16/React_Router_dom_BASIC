import logo from "../../assets/image/Logo historia.jpg";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

export default function NavBar() {
  return (
    <div>
      <div className="nav_i">
        <img
          src={logo}
          alt=""
          width="100px"
        />
        <h1>El Rincón del Sabiondo</h1>
      </div>
      <br />
      <div>
        {/* <NavLink className={(data)=> console.log(data)} to="/">Home</NavLink> */}
        <NavLink className={({isActive}) => (isActive ? "active": "blue")} to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/users">Usuaio</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div></div>
    </div>
  );
}

//NavLink tiene una accion con un objeto que tiene una propiedad llamada "isActive" y depende donde se coloque un console.log(data) este se mostrara con un valor en true.

//      Para pruebas:
//      <NavLink className={(data)=> console.log(data)} to="/">Home</NavLink>
//                            {isActive: true}

//      para definir:
//<NavLink className={({isActive}) => (isActive ? "active": "")} to="/">Home</NavLink>

// si isActive es true, quiero que utilices la clase active de lo contrario quiero que utilices un estring vacio
// que pasa con los otras rutas que no tengan implementado la funcion? esta mostrará el objeto pero con valor de false


//NavLink permite colorearlo dentro de una url