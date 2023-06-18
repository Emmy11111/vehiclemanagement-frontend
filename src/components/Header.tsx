import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Img,
  Center,
  useBreakpointValue 
} from "@chakra-ui/react";
import DEFAULT_AVATAR from "../assets/images/user.png";
import { FiChevronDown } from 'react-icons/fi';
import useAuth from "../apis/useAuth";
import { useEffect } from "react";

const Header = ({ isMobile, isSmMobile, isMdDesktop }: { isMobile: boolean | undefined, isSmMobile: boolean | undefined, isMdDesktop: boolean | undefined }) => {
  const { logout, userInfo, getLoggedInUser }: any = useAuth();
  
  useEffect(() => {
    getLoggedInUser();
  }, []);
  
  return (
        <>
      <Box
     w={`calc(100% - ${isMdDesktop ? "93px" : "260px"})`}
     h="70px"
     bg="neutral.300"
     borderBottom="1px"
     borderBottomColor="neutral.400"
     px="25px"
     py="0px"
     position="fixed"
     top="0px"
     zIndex="999"
      >
        <Box w={"100%"} h={"100%"} display={"flex"} justifyContent={"flex-end"}>

          <Center pr={'40px'} gridGap={'40px'}>
           
          </Center>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              h={"100% !important"}
              paddingBottom={"0px"}
              backgroundColor={"transparent !important"}
              borderRadius={"0px !important"}
              borderRight={"none !important"}
              borderBottom={"none !important"}
              variant="outline"
            >
              <Flex
                fontSize={"14px"}
                fontWeight={"500"}
                color={"#030b16"}
                position={"relative"}
                top={"1px"}
              >
                <Center
                  h={"100% !important"}
                  px={"20px"}
                  borderRight={"none !important"}
                                >
                                    {!isMobile &&(
                                        <Text> {userInfo?.username}
                                            &nbsp;&nbsp;</Text>)
                                    }
                  <Box h={"55px"} width={"55px"}>
                    <Img
                      h={"100%"}
                      w={"100%"}
                      borderRadius={"50%"}
                      src={DEFAULT_AVATAR}
                      alt=""
                    />
                  </Box>
                  &nbsp;&nbsp;
                  <Text>
                    <FiChevronDown size={22}></FiChevronDown>
                  </Text>
                </Center>
              </Flex>
            </MenuButton>

            <MenuList boxShadow="xl" rounded="md">
                            <MenuItem style={{ fontSize: 15 }}>Your profile</MenuItem>
              <MenuItem style={{ fontSize: 15 }}>Settings</MenuItem>
              <MenuItem
                onClick={() => {
                  logout();
                }}
                style={{ fontSize: 15 }}
              >
               Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </>
    )
}

export default Header;