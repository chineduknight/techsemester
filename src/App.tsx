import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Pages from "pages";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

const RenderDevTool = () => {
  if (process.env.NODE_ENV === "development") {
    return <ReactQueryDevtools initialIsOpen={false} />;
  }
  return null;
};

const App = () => {
  return <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Pages />
      <RenderDevTool />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider>
  </ChakraProvider>;
};

export default App;
