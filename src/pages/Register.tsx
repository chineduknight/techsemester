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
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PUBLIC_PATHS } from "routes/pagePath";
import { userRequest } from "services";
import { useMutationWrapper, postRequest } from "services/apiHelper";



const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useNavigate();
  const onError = (error) => {
    const errors = error.response.data?.errors || [];
    const invaildEmail = error.response.data?.email || [];
    const errorMsg = [...invaildEmail, ...errors];
    toast.error(errorMsg[0]);
  };
  const [hasAgreedTerms, setHasAgreedTerms] = useState(true);
  const onSuccess = () => {
    toast.success("Please check your email. Then click the link to confirm");
  };
  const { mutate, isLoading } = useMutationWrapper(postRequest, onSuccess, onError);
  const onSubmit: SubmitHandler<any> = (data) => {
    if (data.password1 !== data.password2) {
      return toast.error("Passwords do not match");
    }
    mutate({
      url: userRequest.REGISTER,
      data
    });
  };

  const formItems = [
    {
      label: "First Name",
      name: "first_name",
      type: "text",
      errorMessage: "Please input your First name",
    },
    {
      label: "Last Name",
      name: "last_name",
      type: "text",
      errorMessage: "Please input your Last name"
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "text",
      errorMessage: "Please input your phone number"
    },
    {
      name: "email",
      type: "email",
      errorMessage: "Please input your email address",
      label: "Email"
    },
    {
      name: "password1",
      type: "password",
      errorMessage: "Please input a password",
      label: "Password"
    },
    {
      name: "password2",
      type: "password",
      errorMessage: "Please input your email address",
      label: "Confirm Password"
    },

  ];

  const onChecked = (event) => {
    setHasAgreedTerms(event.target.checked);
  };
  return (
    <AuthLayout>
      <Container
        maxW="container.sm"
        display="flex"
        justifyContent="center"
        flexDir="column"
        mb="8"
      >
        <Text mt={{ base: "12", lg: "0" }} mb="8" fontWeight="bold" fontSize="22px" color="#173E67">
          Register
        </Text>
        <Text mb="8" fontWeight="bold" fontSize="22px" color="#173E67">
          Manage all your lottery efficiently
        </Text>
        <Text mb="8" fontWeight="600" w="80%" color="#98A2BF" fontSize="12px">
          Let us get you all set up so you can verify your personal account and
          begin setting up your profile{" "}
        </Text>
        <Divider />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid mt="4" gridTemplateColumns={{ lg: "1fr 1fr", md: "1fr 1fr", base: "1fr" }} gap="2rem">
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

          <Box mt="8">
            <Checkbox fontSize="12px">   <Text display="inline" fontSize="12px">Yes, I want to receive Lottery Display emails</Text></Checkbox>
            <Checkbox defaultChecked onChange={onChecked}> <Text display="inline" fontSize="12px">I agree to all the <Text display="inline" color="primary" fontSize="12px">Terms, Privacy Policy</Text> and <Text display="inline" color="primary" fontSize="12px">Fees</Text></Text></Checkbox>
          </Box>
          <Button w="200px" mt="12" type="submit"
            isLoading={isLoading}
            isDisabled={!hasAgreedTerms}
          >Create Account</Button>
        </form>

        <Flex mt="4">
          <Text fontWeight="400" color="secondary"> Already have an account?</Text> <Link onClick={() => history(PUBLIC_PATHS.LOGIN)} color="primary" ml="2">Log in</Link>
        </Flex>
      </Container>
    </AuthLayout>
  );
};

export default Register;
