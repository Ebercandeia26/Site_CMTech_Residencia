import { Navigate } from "react-router-dom";

/* Função para as rotas públicas, onde não precisa de autenticação para acessar*/

export function PublicRoute({ children }) {
  const authUser = JSON.parse(sessionStorage.getItem("authUser"));

  if (authUser && authUser?.token) {
    return <Navigate to="/home" replace={true} />;
  }

  return children;
}
