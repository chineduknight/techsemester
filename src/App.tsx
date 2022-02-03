import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Pages from "pages";
import "./App.css";


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
    </QueryClientProvider>
  </ChakraProvider>;
};

export default App;
