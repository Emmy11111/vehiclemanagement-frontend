import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Button,
  Input,
  useToast,
  Spinner,
  Text,
  Center,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useCarOwners from "../../apis/useEmployees";

export default function CreateCarOwnerModal({
  isOpen,
  onOpen,
  onClose,
  onSuccess,
}: any) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();

  const { registerCarOwner, registerLoading } = useCarOwners();

  const [carOwnerData, setCarOwnerData] = useState<any>({
    ownerName: "",
    nationalID: "",
    phoneNumber: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCarOwnerData((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res: any = await registerCarOwner(carOwnerData);
    //reset form data after registering car owner
    if (res == "success") {
      onSuccess();
      setCarOwnerData({
        ownerName: "",
        nationalID: "",
        phoneNumber: "",
        address: "",
      });
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        isCentered
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit}>
            <ModalHeader className="modal-header">Add Employee laptop</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={3}>
             
              <Flex columnGap={'20px'}>
              <FormControl isRequired>
                <FormLabel className="input-labels">First Name</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="firstName"
                  placeholder="First Name"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="input-labels">Last Name</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="lastName"
                  placeholder="Last Name"
                />
              </FormControl>
              </Flex>

              <Flex columnGap={'20px'}>
              <FormControl isRequired mt={3}>
                <FormLabel className="input-labels">National ID</FormLabel>
                <Input
                  onChange={handleInputChange}
                  value={carOwnerData.nationalID}
                  name="nationalID"
                  maxLength={16}
                  type={"number"}
                  className={`form-inputs`}
                  placeholder="National ID"
                />
              </FormControl>

              <FormControl mt={3} isRequired mb={"10px"}>
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
                    onChange={handleInputChange}
                    value={carOwnerData.phoneNumber}
                    name="phoneNumber"
                    borderTopLeftRadius={"0px"}
                    borderBottomLeftRadius={"0px"}
                    type={"number"}
                    className={`form-inputs `}
                    placeholder="Phone number"
                    maxLength={8}
                  />
                </Flex>
              </FormControl>
             </Flex>

             <Flex columnGap={'20px'}>
              <FormControl isRequired mt={3}>
                <FormLabel className="input-labels">Email</FormLabel>
                <Input
                  onChange={handleInputChange}
                  value={carOwnerData.address}
                  name="email"
                  type={"text"}
                  className={`form-inputs `}
                  placeholder="Email address"
                />
                </FormControl>
                <FormControl isRequired mt={3}>
                <FormLabel className="input-labels">Serial Number</FormLabel>
                <Input
                  onChange={handleInputChange}
                  value={carOwnerData.serialNumber}
                  name="serialNumber"
                  type={"text"}
                  className={`form-inputs`}
                  placeholder="Serial Number"
                />
                </FormControl>
                </Flex>

              <Flex mt={3} columnGap={'20px'}>
              <FormControl isRequired>
                <FormLabel className="input-labels">Department</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="department"
                  placeholder="Department"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="input-labels">Position</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="position"
                  placeholder="Position"
                />
              </FormControl>
              </Flex>

              <Flex mt={3} columnGap={'20px'}>
              <FormControl isRequired>
                <FormLabel className="input-labels">Laptop Manufacturer</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="manufacturer"
                  placeholder="Laptop Manufacturer"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel className="input-labels">Model</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="model"
                  placeholder="Model"
                />
              </FormControl>
              </Flex>

            </ModalBody>

            <ModalFooter className="modal-pad">
              <Button
                fontWeight={500}
                fontSize={"14px"}
                type="button"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                fontWeight={500}
                type="submit"
                isLoading={registerLoading ? true : false}
                loadingText={"Saving..."}
                fontSize={"14px"}
                colorScheme="primary"
              >
                Save
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
