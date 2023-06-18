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
import useCarOwners from "../../apis/useCarOwners";

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
    setCarOwnerData((prevState:any) => ({
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
            <ModalHeader className="modal-header">Add car owner</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={3}>
              <FormControl isRequired>
                <FormLabel className="input-labels">Owner names</FormLabel>
                <Input
                  className={`form-inputs`}
                  onChange={handleInputChange}
                  value={carOwnerData.ownerName}
                  name="ownerName"
                  placeholder="Owner names"
                />
              </FormControl>

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

              <FormControl isRequired mt={3}>
                <FormLabel className="input-labels">Address</FormLabel>
                <Input
                  onChange={handleInputChange}
                  value={carOwnerData.address}
                  name="address"
                  type={"text"}
                  className={`form-inputs `}
                  placeholder="Address"
                />
              </FormControl>
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
