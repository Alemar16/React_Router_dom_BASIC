import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Landing from './components/pages/Landing';
import HomePage from './components/pages/HomePage';
import UsersPage from './components/pages/UsersPage';
import NotFoundPage from './components/pages/NotFoundPage';
import  NavBar  from './components/NavBar/NavBar';
import UserPage from './components/pages/UserPage';
import Dashboard from './components/Dashboard';




function App() {
  

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to="users" />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<h3>Bienvenidos..!</h3>}></Route>
          <Route path="goodbye" element={<h3>Adios..!</h3>}></Route>
        </Route>
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App

//el la funcion Navigate redirecciona a una pagina especificada.
//ideal para el Logout cuando un usuario sale de seccion o expira ls seccion y quieren redireccionarlo a la ruta inicial y no podran.