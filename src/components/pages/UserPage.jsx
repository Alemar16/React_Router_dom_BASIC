import { useParams } from "react-router-dom";

export default function UserPage() {
  const {id} = useParams()
  

  return (
    <div>
      User <h1>{id}</h1>
    </div>
  );
}
//el useParams es un parametro.
//se usa para renderizar un parametro u objeto con la finalidad de cambiar la informacion en una ruta.
//cabe destacar que el sus de este hook sirve para establecer la busqueda para el id de un usuario dentro de una base de datos.