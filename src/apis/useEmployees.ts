import { useState } from "react";
import axiosInstance from "../util/axios";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const useEmployees = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [registerLoading, setRegisterLoading] = useState(false);
  const [owners, setOwners] = useState<any>([
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
    {
      first_name: "John",
      last_name: "Doe",
      national_identity: "1234567890123456",
      telephone: BigInt("9876543210987654"),
      email: "johndoe@example.com",
      department: "IT",
      position: "Software Engineer",
      laptop_manufacturer: "Apple",
      model: "MacBook Pro",
      serial_number: "82342"
    },
  ]);
  const [totalOwners, setTotalOwners] = useState<number>(30);

  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [getAllLoading, setGetAllLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  const registerCarOwner = async (data: any) => {
    try {
      setRegisterLoading(true);
      await axiosInstance.post("/carOwners/", data);
      setRegisterLoading(false);

      toast({
        title: "Success",
        description: "Car owner registered successfully",
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
        description: error?.response?.data?.error || "Failed to register car owner",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const updateCarOwner = async (carOwnerId: string, data: any) => {
    try {
      setUpdateLoading(true);
      await axiosInstance.put(`/carOwners/${carOwnerId}`, data);
      setUpdateLoading(false);

      toast({
        title: "Success",
        description: "Car owner updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error:any) {
      setUpdateLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error ||  "Failed to update car owner",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const deleteCarOwner = async (carOwnerId: string) => {
    try {
      setDeleteLoading(true);
      await axiosInstance.delete(`/carOwners/${carOwnerId}`);
      setDeleteLoading(false);

      toast({
        title: "Success",
        description: "Car owner deleted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    } catch (error:any) {
      setDeleteLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error ||  "Failed to delete car owner",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const getAllCarOwners = async (limit: number, skip: number) => {
    try {
      setGetAllLoading(true);
      const res: any = await axiosInstance.get(`/carOwners/${limit}/${skip}`);
      setOwners(res.data);
      setGetAllLoading(false);
    } catch (error:any) {
      setGetAllLoading(false);
      toast({
        title: "Failed",
        description: error?.response?.data?.error || "Failed to retrieve car owners",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const getTotalCarOwners = async (limit: number, skip: number) => {
    try {
      const res: any = await axiosInstance.get(`/carOwners/${limit}/${skip}`);
      setTotalOwners(res.data?.length);
    } catch (error:any) {
      toast({
        title: "Failed",
        description: error?.response?.data?.error || "Failed to retrieve total car owners",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  const searchCarOwners = async (ownerName: string) => {
    try {
      setSearchLoading(true);
      await axiosInstance.get(`/carOwners/search?ownerName=${ownerName}`);
      setSearchLoading(false);
    } catch (error) {
      setSearchLoading(false);
      toast({
        title: "Failed",
        description: "Failed to search car owners",
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return {
    registerCarOwner,
    updateCarOwner,
    deleteCarOwner,
    getAllCarOwners,
    searchCarOwners,
    registerLoading,
    updateLoading,
    deleteLoading,
    getAllLoading,
    searchLoading,
    owners,
    totalOwners,
    getTotalCarOwners
  };
};

export default useEmployees;