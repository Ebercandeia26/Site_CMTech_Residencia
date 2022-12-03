import { Navigate } from "react-router-dom";
import DefaultLayout from "../Layouts/Default";

/* Função para as rotas privadas, sendo ela só para quem está logado(a)*/

export function PrivateRoute({ children }) {
  const authUser = JSON.parse(sessionStorage.getItem("authUser"));

  if (!authUser?.token) {
    return <Navigate to="/" replace={true} />;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
}
