import { PROTECTED_PATHS } from "./pagePath";
import { AppRoute } from "./types";
import WithSuspense from "components/WithSuspense";
import { lazy } from "react";

const { DASHBOARD } = PROTECTED_PATHS;

const Dashboard = WithSuspense(lazy(() => import("pages/Dashboard")));


export const PROTECTED_ROUTES: AppRoute[] = [
  { path: DASHBOARD, element: <Dashboard /> },
  { path: "/", element: <Dashboard /> },
  { path: "*", element: <div>Page not found</div> }

];