import {
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Spinner,
  Center,
  Skeleton,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { FiChevronDown} from "react-icons/fi";
import { RiDatabase2Fill } from 'react-icons/ri'
import { RxDotsHorizontal } from "react-icons/rx";
import "../../dashboard.css";
import TablePagination from "../../components/shared/TablePagination";
import {useNavigate, useParams } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import * as moment from 'moment-timezone';

const EmployeesTable = ({
  headers,
  data,
  loading,
  totalNum,
  pageNum,
  setSortBy,
  searching,
  itemsPerPage
}: any) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<any>(1);

  useEffect(() => {
    setCurrentPage(pageNum);
  }, [pageNum]);

  const pagNation: any = useRef();

  const tds: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
  const rows: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Box minH={'60vh'}>
      <Table className="customers-table">
        <Thead>
          <Tr>
            {headers?.map((header: any, index: number) => (
              <Th textTransform={"none"}>
                  <Text fontWeight={'bold'}>{header?.name}{" "}</Text>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            rows?.map((r:any)=>{
              return (
                <>
                <Tr>
              {
                tds?.map((d:any)=>{
                  return (
                    <Td><Box py={'7px'}><Skeleton startColor={'#F4F4F4'} borderRadius={'20px'} endColor={'#dddddd'} h={'20px'} /></Box></Td>
                  )
                })
              }
            </Tr>
                </>
              )
            })
          ) : (
            <>
              {!loading && data?.length == 0 ? (
                <>
                  <Tr _hover={{ bg: "white !important" }}>
                    <Td colSpan={12} bg={"white"} _hover={{ bg: "white" }}>
                      <Center bg={"white"} py={"45px"} w={"100%"} minW={"100%"}>
                        {searching ? (
                          <Text>No result found</Text>
                        ) : (
                          <>
                            <Center>
                              <Box textAlign={"center"}>
                                <Center mb={"18px"}>
                                  <Box
                                    py={6}
                                    px={6}
                                    borderRadius={"10px"}
                                    bg={"#F2F4F6"}
                                  >
                                    <RiDatabase2Fill
                                      color={"#bcc5d1"}
                                      size={35}
                                    ></RiDatabase2Fill>
                                  </Box>
                                </Center>
                                <Text
                                  fontSize={"19px"}
                                  fontWeight={500}
                                  mb={"9px"}
                                  color={"#637184"}
                                >
                                Employees
                                </Text>
                                <Text fontSize={"14px"} color="text.lightest">
                                  This table is currently empty, but it will
                                  soon be populated with the list of employees.
                                </Text>
                              </Box>
                            </Center>
                          </>
                        )}
                      </Center>
                    </Td>
                  </Tr>
                </>
              ) : (
                <>
                  {data?.map((data: any) => {
                    return (
                      <Tr>
                        <Td>
                          {data?.first_name}
                        </Td>
                        <Td>
                          {data?.last_name}
                        </Td>
                        <Td>{data?.national_identity}</Td>
                        <Td>{data?.telephone?.toString()?.slice(0,3) == "" ? data?.telephone: ""+data?.telephone}</Td>
                        <Td>{data?.email}</Td>
                        <Td>{ data?.department}</Td>
                        <Td>{ data?.position}</Td>
                        <Td>{data?.laptop_manufacturer}</Td>
                        <Td>{ data?.model}</Td>
                        <Td>{ data?.serial_number}</Td>
                        {/* <Td> */}
                          {/* <Menu>
                            <MenuButton
                              as={IconButton}
                              aria-label="Options"
                              icon={
                                <RxDotsHorizontal size={23}></RxDotsHorizontal>
                              }
                              className={"custom_dropdown_button"}
                              variant="outline"
                            />
                            <MenuList
                              boxShadow="xl"
                              rounded="md"
                              className="menuListContainer menuListContainer_nopad"
                            >
                              <MenuItem  className="menu-list menu-list-edit">
                                {" "}
                                <Box mr={'2px'} className="dropdown-icon">
                                  <MdEdit size={18}></MdEdit>
                                  {"   "}
                                </Box>
                              Edit
                              </MenuItem>
                              <MenuItem
                                className="menu-list delete-menu-item"
                                _hover={{color: "text.error"}}
                              >
                                <Box _hover={{color: "text.error"}}  mr={'2px'} className="dropdown-icon">
                                  <BsFillTrashFill size={18}></BsFillTrashFill>{" "}
                                </Box>
                                Delete
                              </MenuItem>
                            </MenuList>
                          </Menu> */}
                        {/* </Td> */}
                      </Tr>
                    );
                  })}
                </>
              )}
            </>
          )}
        </Tbody>
      </Table>

      {totalNum > itemsPerPage ? (
        <Box ref={pagNation} className="pag-cont bottom-0 w-full pb-20">
          <TablePagination
            length={totalNum}
            initialPage={parseInt(currentPage)}
            currentItems={data?.length}
            pageNum={pageNum}
            itemsPerPage={itemsPerPage}
            setPage={(page: any) => {
              setCurrentPage(parseInt(page));
              navigate(`/carowners?page=${page}`);
            }}
          />
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default EmployeesTable;
