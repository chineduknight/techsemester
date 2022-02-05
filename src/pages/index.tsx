import UnAuthenticated from "./UnAuthenticated";
import Authenticated from "./Authenticated";
import { KEY_TOKEN } from "util/constant";

const Pages = () => {
  const isAuthenticated = getToken();
  if (isAuthenticated) {
    return <Authenticated />;
  }

  return <UnAuthenticated />;
};

export function getToken(): boolean {
  let token: any = localStorage.getItem(KEY_TOKEN);
  return typeof token === "string" && token !== "";
}

export default Pages;