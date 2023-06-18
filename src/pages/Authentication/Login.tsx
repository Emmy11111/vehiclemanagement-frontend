import {
  Box,
  Center,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Image,
} from "@chakra-ui/react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiLogIn } from "react-icons/fi";
import useAuth from "../../apis/useAuth";
import { useState } from "react";

const Login = () => {
  const { loginAdmin, loading } = useAuth();

  const [data, setData] = useState<any>({
    email: undefined,
    password: undefined,
  });

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    loginAdmin(data);
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
          <Box w={"100%"} onSubmit={login} as={"form"}>
            <Center w={"100%"} mb={"20px"}>
              <Image src={logo} w={"250px"} />
            </Center>

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
                display={"flex"}
                columnGap={"5px"}
              >
                <FiLogIn size={20}></FiLogIn>
                Sign In
              </Button>
            </Box>

            <Center columnGap={"5px"}>
              <Text>Don't have an account yet?</Text>{" "}
              <Text
                fontWeight={"semibold"}
                color={"text.light"}
                _hover={{ color: "standard.500" }}
              >
                <Link to={"/signup"}>Sign up</Link>
              </Text>
            </Center>
          </Box>
        </Center>
      </Center>
    </Box>
  );
};

export default Login;
