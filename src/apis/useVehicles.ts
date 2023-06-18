import { useState } from "react";
import axiosInstance from "../util/axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useVehicles = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [registerLoading, setRegisterLoading] = useState(false);

  const registerVehicle = async (data: any) => {
    try {
      setRegisterLoading(true);
      await axiosInstance.post("/vehicles/", data);
      setRegisterLoading(false);

      toast({
        title: "Success",
        description: "Vehicle registered successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });

      return "success"; 
    } catch (error:any) {
      setRegisterLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error || "Failed to register Vehicle",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return {
    registerVehicle,
    registerLoading,
  };
};

export default useVehicles