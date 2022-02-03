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


const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
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
  return (
    <AuthLayout>
      <Container
        maxW="container.sm"
        display="flex"
        justifyContent="center"
        flexDir="column"
      >
        <Text mb="8" fontWeight="bold" fontSize="22px" color="#173E67">
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
          <Grid mt="4" gridTemplateColumns="1fr 1fr" gap="2rem">
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
            <Checkbox > <Text display="inline" fontSize="12px">I agree to all the <Text display="inline" color="primary" fontSize="12px">Terms, Privacy Policy</Text> and <Text display="inline" color="primary" fontSize="12px">Fees</Text></Text></Checkbox>
          </Box>
          <Button w="200px" mt="12" type="submit">Create Account</Button>
        </form>

        <Flex mt="4">
          <Text fontWeight="400" color="secondary"> Already have an account?</Text> <Link onClick={() => alert("cliecked")} color="primary" ml="2">Log in</Link>
        </Flex>
      </Container>
    </AuthLayout>
  );
};

export default Register;
