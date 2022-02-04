import {
  Box,
  Container,
  Flex,
  Avatar,
  Text,
  Heading,
  Button,
  Input,
  HStack,
} from "@chakra-ui/react";
import { CKEditor } from "ckeditor4-react";
import SearchBox from "components/SearchBox";

import { FaHome } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";

const Dashboard = () => {
  const onChange = () => { };
  return (
    <Box bg="gray.400" minH="100vh">
      <Flex
        as="nav"
        bg="white"
        p="4"
        alignItems="center"
        justifyContent="space-between"
      >
        <SearchBox width="30%" onChange={() => console.log("log")} />
        <Flex alignItems="center">
          <HStack spacing="1rem" mr="4">
            <FaHome size="30" color="gray" />
            <BsYoutube size="30" color="gray" />{" "}
            <IoMdNotifications size="30" color="gray" />{" "}
          </HStack>
          <Avatar></Avatar>
          <Button ml="4">Ask Question</Button>
        </Flex>
      </Flex>
      <Container bg="white" mt="8" borderRadius="md" p="8">
        <Flex alignItems="center">
          <Avatar /> <Text ml="2">First Name Last</Text>
        </Flex>
        <Heading mt="4"> Ask your question</Heading>
        <Text fontWeight="bold" fontSize="20px" my="4">
          Body
        </Text>
        <Text>Input all information needed to answer your question</Text>
        <CKEditor
          data={"props.formData.description"}
          // onChange={(event) => {
          //   props.onChange({
          //     target: {
          //       name: "description",
          //       value: event.editor.getData(),
          //     },
          //   });
          // }}
          onChange={onChange}
          required
        />
        <Text my="4">Tags</Text>
        <Text>Add up to 5 tags to describe what your question is about</Text>
        <Button my="4">Post your question</Button>
      </Container>
    </Box>
  );
};

export default Dashboard;
