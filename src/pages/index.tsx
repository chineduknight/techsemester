import UnAuthenticated from "./UnAuthenticated";
import Authenticated from "./Authenticated";

const Pages = () => {
  const auth = false;
  if (auth) {
    return <Authenticated />;
  }

  return <UnAuthenticated />;
};

export default Pages;