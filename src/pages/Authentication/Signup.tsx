import {
  Box,
  Center,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import "./auth.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiLogIn } from "react-icons/fi";
import useAuth from "../../apis/useAuth";
import { useState } from "react";

const Signup = () => {
  const { registerAdmin, loading } = useAuth();

  const [data, setData] = useState<any>({
    username: undefined,
    email: undefined,
    password: undefined,
    phoneNumber: undefined,
    nationalId: undefined,
  });

  const register = async (e: React.FormEvent) => {
    e.preventDefault();
    registerAdmin(data);
  };

  return (
    <Box py={"100px"} w={"100%"}>
      <Center py={"20px"} w={"100%"}>
        <Center
          boxShadow="base"
          bg={"white"}
          className="auth-forms"
          w={"33%"}
          px={"35px"}
          py={"40px"}
          pt={"30px"}
          rounded={"md"}
        >
          <Box w={"100%"} onSubmit={register} as={"form"}>
            <Center w={"100%"} mb={"20px"}>
              <Image src={logo} w={"250px"} />
            </Center>

            <FormControl isRequired isInvalid={false} mb={"10px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                Username
              </FormLabel>
              <Input
                type={"text"}
                placeholder="Username"
                onChange={(e: any) => {
                  setData({ ...data, username: e.target.value });
                }}
              />
            </FormControl>

            <FormControl isRequired mb={"10px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                Email address
              </FormLabel>
              <Input
                onChange={(e: any) => {
                  setData({ ...data, email: e.target.value });
                }}
                type={"email"}
                placeholder="Email address"
              />
            </FormControl>

            <FormControl isRequired mb={"10px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                Phone number
              </FormLabel>
              <Flex>
                <Center
                  borderTopLeftRadius={"5px"}
                  borderBottomLeftRadius={"5px"}
                  px={"7px"}
                  bg={"gray.100"}
                >
                  <Text fontWeight={"semibold"}>+250</Text>
                </Center>
                <Input
                  onChange={(e: any) => {
                    setData({ ...data, phoneNumber: e.target.value });
                  }}
                  borderTopLeftRadius={"0px"}
                  borderBottomLeftRadius={"0px"}
                  type={"number"}
                  maxLength={8}
                  placeholder="Phone number"
                />
              </Flex>
            </FormControl>

            <FormControl isRequired mb={"10px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                National ID
              </FormLabel>
              <Input
                onChange={(e: any) => {
                  setData({ ...data, nationalId: e.target.value });
                }}
                type={"number"}
                placeholder="National ID"
              />
            </FormControl>

            <FormControl isRequired mb={"30px"}>
              <FormLabel fontWeight="medium" fontSize="14px" mb={"2px"}>
                Password
              </FormLabel>
              <Input
                onChange={(e: any) => {
                  setData({ ...data, password: e.target.value });
                }}
                type={"password"}
                placeholder="Password"
              />
            </FormControl>

            <Box>
              <Button
                type={"submit"}
                fontWeight={"bold"}
                fontSize={"16px"}
                colorScheme="standard"
                w={"100%"}
                mb={"20px"}
                isLoading={loading ? true : false}
                loadingText={"Signing up..."}
                display={"flex"}
                columnGap={"5px"}
              >
                <FiLogIn size={20}></FiLogIn>
                Signup
              </Button>
            </Box>

            <Center columnGap={"5px"}>
              <Text>Already have an account?</Text>{" "}
              <Text
                fontWeight={"semibold"}
                color={"text.light"}
                _hover={{ color: "standard.500" }}
              >
                <Link to={"/login"}>Login</Link>
              </Text>
            </Center>
          </Box>
        </Center>
      </Center>
    </Box>
  );
};

export default Signup;
