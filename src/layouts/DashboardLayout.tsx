import Sidebar from "../components/Sidebar";
import { ReactNode, useEffect, useState, useMemo } from "react";
import { Box, Flex, Center, Img, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LogoIcon from "../assets/images/logoicon.png";
import Logo from "../components/Logo";
import { Navigate } from "react-router-dom";

interface DashboardLayoutProps {
    children?: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [width, setWidth] = useState<any>('260px');
    const [isMdDesktop, setIsMdDesktop] = useState<any>(false);
  
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isSmMobile = useBreakpointValue({ base: true, sm: false });
    const isDesktop = useBreakpointValue({ base: true, lg: false });

    useEffect(() => {
        setIsMdDesktop(isDesktop)
        setWidth(isDesktop ? '93px' : '260px');
      }, [isDesktop])
    
      useEffect(() => {
        setWidth(isMdDesktop ? '93px' : '260px');
      }, [isMdDesktop])
  
      if (!localStorage.getItem("access_token")) {
        // return <Navigate to="/login" />;
      }

    return (
        <Flex width={"100%"} position={"relative"}>
      <Box
        w={"width"}
        position={"fixed"}
        minW={"width"}
        top={0}
        left={0}
        height={"100%"}
        zIndex={100}
        borderRight={"1px solid #E6EAEF00"}
      >
        <Center
          w="100%"
          h="70px"
          p="14px"
          borderBottom="1px"
          borderBottomColor="neutral.400"
        >
          {isMdDesktop ? (
            <Box alignSelf="start">
              <Link to="/">
                <Img src={LogoIcon} alt="Logo" h="34px" />
              </Link>
            </Box>
          ) : (
            <Logo />
          )}
        </Center>

        <Box>
          <Sidebar width={width} isMdDesktop={isMdDesktop} setIsMdDesktop={setIsMdDesktop} />
        </Box>
      </Box>

      <Box
        w={`calc(100% - ${width})`}
        float={"right"}
        position={"absolute"}
        right={"0px"}
        h={"100vh"}
        overflowY={"auto"}
        backgroundColor={"#F2F4F6"}
        pt={"0px"}
        pl={"0px"}
        transitionDuration={"0.3s"}
      >
        <Header isMobile={isMobile} isSmMobile={isSmMobile} isMdDesktop={isMdDesktop} />
        <Box h={"70px"}></Box>
        <Box>
          {children}
        </Box>
      </Box>
    </Flex>
    );
}

export default DashboardLayout;