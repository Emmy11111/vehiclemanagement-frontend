import { useState } from "react";
import axiosInstance from "../util/axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

    const toast = useToast();
    const [loading, setLoading] = useState<Boolean>(false);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState<any>({});

    const logout = () => {
        window.localStorage.removeItem("access_token");
        navigate("/");
    }

    const loginAdmin = async (data:any) =>{
        try {
            setLoading(true);
            const res: any = await axiosInstance.post("/users/login", data);
            setLoading(false);

            if (res?.data?.status == true) {
                toast({
                    title: "Success",
                    description: res?.data?.message,
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position: "top-right",
                });
                window.localStorage.setItem("access_token", res?.data?.access_token);
                navigate("/carowners")
            }
        }
        catch (error: any) {
            setLoading(false);
            toast({
                title: "Failed",
                description: error?.response?.data?.message || error?.message,
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top-right",
            });
        }
    }

    const getLoggedInUser = async () => {
      try {
          const res:any = await axiosInstance.get(
              `/users/loggedInUserInfo`
        );
            
        setUserInfo(res?.data);
            
        }
      catch (error: any) {
          
          if (error?.response?.status == 401) {
              logout();
            toast({
                title: "Failed",
                description: "Please login first",
                status: "error",
                duration: 2000,
                isClosable: true,
                position: "top-right",
            });
              return;
          }
          toast({
            title: "Failed",
            description: error?.response?.data?.message || error?.message,
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
        });
        }
  };

    return {
        loading,
        logout,
        loginAdmin,
        getLoggedInUser,
        userInfo
    }
} 

export default useAuth;