import VehiclesTable from "./VehiclesTable";
import { useState ,useEffect} from "react";
import { CiCircleQuestion, CiSearch } from "react-icons/ci";
import {
    Flex,
    Text,
    Input,
    Menu,
    MenuButton,
    MenuList,
    IconButton,
    useToast,
    Spinner,
    Box,
    Center,
    Heading,
    Button,
} from "@chakra-ui/react";
import "../../dashboard.css";
import { AiFillCalendar, AiFillPlusCircle } from "react-icons/ai";
import CreateVehicleModal from "./CreateVehicleModal";
import useCarOwners from "../../apis/useCarOwners";

const Vehicles = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { getAllLoading, getAllCarOwners, owners, getTotalCarOwners, totalOwners } = useCarOwners();
  
  useEffect(() => {
    getAllCarOwners(0, 0);
  },[])

  const headers: any = [
    {
      name: "Model name",
    },
        {
          name: "Chasis number",
        },
        {
          name: "Plate number",
    },
    {
      name: "Owner name",
    },
        {
          name: "Manufacture company",
        },
    {
      name: "Manufacture year",
    },
    {
      name: "Price",
    },
        {
          name: "Manage",
        },
      ];

    const [carOwners, setCarOwners] = useState<any>([{
        modelName: "Barbus",
        chasisNumber: "2003450123456668",
        plateNumber: "950791741745",
      owner: {ownerName:"Juvenal Picco"},
      manufactureCompany: "RITCO",
      manufactureYear: 2023,
        price: 45000000
    },
    {
      modelName: "Manz",
      chasisNumber: "2003450123456668",
      plateNumber: "150791741745",
    owner: {ownerName: "Manzi Thiery"},
    manufactureCompany: "RITCO",
    manufactureYear: 2023,
      price: 45000000
      },
      {
        modelName:"Taxi34",
        chasisNumber: "2003450123456668",
        plateNumber: "550791741745",
      owner: {ownerName: "James henry"},
      manufactureCompany: "RITCO",
      manufactureYear: 2023,
        price: 45000000
    },
    ]);
    
    return(
        <>
                <Box pl='25px' pr='25px' mx='25px' pt={'30px'}>
    
                <Box className="table-nav">
          <Box className="tb-title">
            <Text>Vehicles</Text>
          </Box>

          <Box className="flex">
            <Center className="flex">
              <Input
                bg="#ffff"
                borderColor="#ffff"
                placeholder="Search..."
                colorScheme="primary"
                type={"text"}
                boxShadow="xs"
                className="search-field"
              />
              <Text className={"search-icon"}>
                <CiSearch size={20} />
              </Text>
            </Center>

            <Button
              colorScheme="primary"
              fontSize={"15px"}
              fontWeight={400}
              borderRadius={"10px"}
              onClick={() => setIsOpen(true)}
            >
              <AiFillPlusCircle size={18} color={"white"}></AiFillPlusCircle>
              &nbsp;Add vehicle
            </Button>
          </Box>
        </Box>
                
                <Box
        className="customers-table-container w-full"
        marginBottom={"40px"}
      >
            <VehiclesTable
                headers={headers}
                data={carOwners}
                loading={false}
                totalNum={50}
              pageNum={1}
                setSortBy={'created_at'}
                searching={false}
                />
                </Box>
            </Box>
            
            <CreateVehicleModal
          onSuccess={() => {
           
          }}
          isOpen={isOpen}
          carOwners={owners}
          onOpen={() => setIsOpen(true)}
          onClose={() => {
            setIsOpen(false);
          }}
        ></CreateVehicleModal>
        </>
    )
}

export default Vehicles; 