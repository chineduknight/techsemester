import {
  Container,
  Grid,
  Text,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Link,
  Flex,
  Checkbox,
  Box
} from "@chakra-ui/react";
import AuthLayout from "components/AuthLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PUBLIC_PATHS } from "routes/pagePath";
import { userRequest } from "services";
import { postRequest, useMutationWrapper } from "services/apiHelper";
import { KEY_TOKEN, KEY_USER } from "util/constant";



const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const onSuccess = (res) => {
    localStorage.setItem(KEY_TOKEN, res.access_token);
    localStorage.setItem(KEY_USER, JSON.stringify(res.user));
    toast.success("Success");
    window.location.href = "/";
  };
  const { mutate, isLoading } = useMutationWrapper(postRequest, onSuccess);
  const onSubmit: SubmitHandler<any> = (data) => {
    mutate({
      url: userRequest.LOGIN,
      data
    });
  };
  const formItems = [
    {
      label: "Email",
      name: "email",
      type: "text",
      errorMessage: "Please input your email",
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      errorMessage: "Please input your password"
    },
  ];
  return <AuthLayout
    gridTemplateColumns="2fr 4fr"
  >
    <Container
      maxW="container.sm"
      display="flex"
      justifyContent="center"
      flexDir="column"
    >
      <Text mt={{ base: "12", lg: "0" }} mb="8" fontWeight="bold" fontSize="22px" color="#173E67">
        Login
      </Text>
      <Text mb="8" fontWeight="bold" fontSize="22px" color="#173E67">
        Login to your account
      </Text>
      <Text mb="8" fontWeight="600" w="80%" color="#98A2BF" fontSize="12px">
        Welcome back to, input your details to start viewing all your assets and those of your friends
      </Text>
      <Divider />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid mt="4" gridTemplateColumns="1fr" gap="1rem">
          {formItems.map((formItem) => (
            <FormControl key={formItem.name} isInvalid={errors[formItem.name]}>
              <FormLabel fontSize="12px" color="#173E67" htmlFor={formItem.name}> {formItem.label} </FormLabel>
              <Input
                id={formItem.name}
                type={formItem.type}
                {...register(formItem.name, { required: true })}
              />
              <FormErrorMessage> {formItem.errorMessage}</FormErrorMessage>
            </FormControl>
          ))}
        </Grid>

        <Box mt="2">
          <Checkbox fontSize="12px">   <Text display="inline" fontSize="12px">Remember me</Text></Checkbox>
        </Box>
        <Button isFullWidth mt="12" type="submit"
          isLoading={isLoading}
        >Sign In</Button>
      </form>

      <Flex mt="4">
        <Text fontWeight="400" color="secondary"> Do not have an account?</Text> <Link onClick={() => history(PUBLIC_PATHS.REGISTER)} color="primary" ml="2">
          Register
        </Link>
      </Flex>
    </Container>
  </AuthLayout>;
};

export default Login;
