import {
  Box,
  Container,
  Flex,
  Avatar,
  Text,
  Heading,
  Button,
  HStack,
  MenuList,
  MenuButton,
  MenuItem,
  Menu,
  Input
} from "@chakra-ui/react";
import { CKEditor } from "ckeditor4-react";
import SearchBox from "components/SearchBox";

import { FaHome } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { useState } from "react";
import { KEY_USER } from "util/constant";
import { questionRequest } from "services";
import { useMutationWrapper, postRequest } from "services/apiHelper";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [userQuestion, setUserQuestion] = useState();
  const [tagInput, setTagInput] = useState("");
  const userInfo = JSON.parse(localStorage.getItem(KEY_USER) || "{}");
  const onChange = (event) => {
    setUserQuestion(event.editor.getData());
  };
  const onSuccess = () => {
    toast.success("You have successfully posted your question");
  };
  const { mutate, isLoading } = useMutationWrapper(postRequest, onSuccess);
  const submitQuestion = () => {
    mutate({
      url: questionRequest.QUESTION,
      data: {
        user: userInfo.id,
        tags: tagInput.split(",").map(item => item.length),
        body: userQuestion
      }
    });
  };
  return (
    <Box bg="gray.400" minH="100vh">
      <Flex
        as="nav"
        bg="white"
        px="12"
        py="4"
        alignItems="center"
        justifyContent="space-between"
        flexDir={{ base: "column", lg: "row" }}
      >
        <SearchBox width="30%" />
        <Flex
          alignItems="center"
          flexDir={{ base: "column", lg: "row" }}
        >
          <HStack spacing="1rem" mr="12">
            <FaHome size="30" color="#1d9bf0" />
            <BsYoutube size="30" color="gray" />
            <IoMdNotifications size="30" color="gray" />
          </HStack>
          <Menu>
            <MenuButton>
              <Avatar src="https://avatarfiles.alphacoders.com/115/115265.png" />
            </MenuButton>
            <MenuList>
              <MenuItem
                onClick={() => {
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >Logout</MenuItem>
            </MenuList>
          </Menu>

          <Button ml="4">Ask Question</Button>
        </Flex>
      </Flex>
      <Container bg="white" mt="8" borderRadius="md" p="8">
        <Flex alignItems="center">
          <Avatar src="https://avatarfiles.alphacoders.com/115/115265.png" />
          <Text ml="2">{`${userInfo.first_name} ${userInfo.last_name}`} </Text>
        </Flex>
        <Heading mt="4"> Ask your question</Heading>
        <Text fontWeight="bold" fontSize="20px" my="4">
          Body
        </Text>
        <Text>Input all information needed to answer your question</Text>
        <CKEditor
          initData={<p>Please input question here</p>}
          onChange={onChange}
          required
        />
        <Text my="4">Tags</Text>
        <Text>Add up to 5 tags to describe what your question is about</Text>
        <Input mt="2" placeholder='eg (mysql,html)'
          onChange={(event: any) => setTagInput(event.target.value)}
        />
        <Button my="4"
          onClick={submitQuestion}
          isLoading={isLoading}
        >Post your question</Button>
      </Container>
    </Box>
  );
};

export default Dashboard;
