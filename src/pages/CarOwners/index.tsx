import OwnersTable from "./OwnersTable";
import { useEffect, useState } from "react";
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
import CreateCarOwnerModal from "./CreateCarOwnerModal";
import { useLocation, useNavigate } from "react-router-dom";
import useCarOwners from "../../apis/useCarOwners";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const { getAllLoading, getAllCarOwners,owners,getTotalCarOwners,totalOwners } = useCarOwners();
  const itemsPerPage = 10;
  const location = useLocation();
  const [pageNum, setPageNum] = useState<number>(1);
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  useEffect(() => {
    const page: any = searchParams.get("page");
    if (parseInt(page) > 0) {
      return setPageNum(page);
    }
    return navigate("/carowners?page=1");
  }, [searchParams]);

    const headers: any = [
        {
          name: "Owner names",
        },
        {
          name: "National ID",
          sortable: true,
        },
        {
          name: "Phone number",
        },
        {
          name: "Address",
        },
        {
          name: "Signup date",
          sortable: true,
        },
        {
          name: "Manage",
        },
  ];
  
  const getOwnersByPageNum = (pageNum:any) => {
    getAllCarOwners(itemsPerPage,pageNum);
  }
  
    useEffect(() => {
      getOwnersByPageNum(pageNum);
    }, [pageNum]);
  
  //get total car owners to set pagination total
  useEffect(() => {
    getTotalOwners();
  },[])
  
  const getTotalOwners = async () => {
    getTotalCarOwners(0, 0);
  }
    
    return(
        <>
                <Box pl='25px' pr='25px' mx='25px' pt={'30px'}>
    
                <Box className="table-nav">
          <Box className="tb-title">
            <Text>Car Owners</Text>
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
              &nbsp;Add Car Owner
            </Button>
          </Box>
        </Box>
                
                <Box
        className="customers-table-container w-full"
        marginBottom={"40px"}
      >
            <OwnersTable
                headers={headers}
                data={owners}
                loading={getAllLoading}
              totalNum={totalOwners}
              itemsPerPage={itemsPerPage}
                pageNum={pageNum}
                setSortBy={'created_at'}
                searching={false}
                />
                </Box>
            </Box>
            
            <CreateCarOwnerModal
          onSuccess={() => {
            getOwnersByPageNum(pageNum)
            setIsOpen(false);
            getTotalCarOwners(0, 0);
          }}
          isOpen={isOpen}
          onOpen={() => setIsOpen(true)}
          onClose={() => {
            setIsOpen(false);
          }}
        ></CreateCarOwnerModal>
        </>
    )
}

export default Dashboard; 