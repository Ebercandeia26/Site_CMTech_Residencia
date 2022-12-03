import { Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import Users from "../pages/Users";
import UsersAdd from "../pages/Users/includes/UsersAdd";
import UsersEdit from "../pages/Users/includes/UsersEdit";
import Clients from "../pages/Clients";
import ClientsAdd from "../pages/Clients/includes/ClientsAdd";
import ClientsEdit from "../pages/Clients/includes/ClientsEdit";
import Chat from "../pages/Chat";
import Relatories from "../pages/Relatories";
import AlteracaoSenha from "../pages/AlteracaoSenha";
import RecupSenha from "../pages/RecupSenha";

/*Componente principal das rotas , contendo todas as rotas e o tipo delas. Componete este que é exportado*/

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/forgot"
        element={
          <PublicRoute>
            <RecupSenha />
          </PublicRoute>
        }
      />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/relatorios"
        element={
          <PrivateRoute>
            <Relatories />
          </PrivateRoute>
        }
      />
      <Route
        path="/usuarios"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />
      <Route
        index
        path="/usuarios/add"
        element={
          <PrivateRoute>
            <UsersAdd />
          </PrivateRoute>
        }
      />
      <Route
        index
        path="/usuarios/edit/:id"
        element={
          <PrivateRoute>
            <UsersEdit />
          </PrivateRoute>
        }
      />
       <Route
        path="/clientes"
        element={
          <PrivateRoute>
            <Clients/>
          </PrivateRoute>
        }
      />
      <Route
        index
        path="/clientes/add"
        element={
          <PrivateRoute>
            <ClientsAdd />
          </PrivateRoute>
        }
      />
      <Route
        index
        path="/clientes/edit/:id"
        element={
          <PrivateRoute>
            <ClientsEdit />
          </PrivateRoute>
        }
      />
       <Route
        index
        path="/chat"
        element={
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        }
      />
       <Route
        index
        path="/alteracao-senha"
        element={
          <PrivateRoute>
            <AlteracaoSenha />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
