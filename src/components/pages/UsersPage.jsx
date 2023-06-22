import { useNavigate } from "react-router-dom";


export default function UsersPage() {
  const navigate = useNavigate();
    const handleClick = () => {
      navigate("/dashboard");
    };

  return(
  <div>
      <h3>UsersPage</h3>;
      <h4>Sustituye [/users] en la barra de direccion por:
      </h4>
      <h2>/dashboard</h2>
      <br />
      <h4>ó</h4>
      <br />
      <h4>Presiona</h4>
      <button onClick={handleClick}>
        Dashboard
      </button>
  </div>
  
  )
}
