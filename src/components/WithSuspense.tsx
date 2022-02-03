import { Suspense } from "react";
import { Spinner as Loader } from "@chakra-ui/react";
import styled from "@emotion/styled";
const SpinnerWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 20;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;
const PreLoader = () => {
  return (
    <SpinnerWrapper>
      <Loader thickness="4px" speed="0.65s" emptyColor="gray.200" color="black" size="xl" />
    </SpinnerWrapper>
  );
};

const RenderComponent = (Component, props) => {
  return (
    <Suspense fallback={<PreLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

const WithSuspense = (Component) => (props) => RenderComponent(Component, props);

export default WithSuspense;
