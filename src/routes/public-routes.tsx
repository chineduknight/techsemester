import { PUBLIC_PATHS } from "./pagePath";
import { AppRoute } from "./types";
import WithSuspense from "components/WithSuspense";
import { lazy } from "react";

const { LOGIN, REGISTER } = PUBLIC_PATHS;

const Login = WithSuspense(lazy(() => import("pages/Login")));
const Register = WithSuspense(lazy(() => import("pages/Register")));


export const PUBLIC_ROUTES: AppRoute[] = [
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  { path: "/", element: <Login /> },
  { path: "*", element: <div>Page not found</div> }

];