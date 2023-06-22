import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Dashboard() {
const navigate = useNavigate()

  const handleClick = () => {
  navigate("/")
}


  return (
    <div>
      <Outlet />
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Logout</button>
      <br />
      <br />

      <Link to="welcome">¿Puedes dar la Bienvenidad?</Link>
      <br />
      <Link to="goodbye">¿Puedes despedirte?</Link>
    </div>
  );
}


//la funcion useNavigate es excelente para cuando quieres que al terminar alguan accion, logueo o compra de algun articulo, registro, etc , esta funcionalidad te redirige a una seccion de la app que especifiques.



//el uso de rutas anidadas o rutas de rutas, es una excelente opcion cuando dentro de un componente queremos redirigirnos a varias instancias estableciendo con el uso de un aterisco ("xxxxxxx/*") en la ruta principal de la app y un <Outlet/> en el componente o page se definirá  la redireccion establecida apartir del componente donde se quiere desplegar hasta donde se desplegará.