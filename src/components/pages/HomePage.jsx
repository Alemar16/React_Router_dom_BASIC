import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
    <h1>Acerca de mi</h1>
      <h3>Ejemplo de uso de la etiqueta Link de ReactRouter</h3>
      <Link to="/users">Llévame a Usuarios</Link>
   </div>
  );
}

// La etiqueta "Link" no necesita de la accion que tiene NavLink como colorear la etiqueta
//solo sirve para direccionar alguna pagina dentro de la app, sin refrescar la pagina