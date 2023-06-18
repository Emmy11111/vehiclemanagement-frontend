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
  Flex,
  Select
} from "@chakra-ui/react";
import React, { useState,useEffect } from "react";
import SelectInput from 'react-select';

export default function CreateVehicleModal({
  isOpen,
  onOpen,
  onClose,
  onSuccess,
  carOwners
}: any) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const toast = useToast();
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const [years, setYears] = React.useState<any>([]);
  const [models, setModels] = React.useState<any>([
    {
    name: "AN12334"
    },
    {
      name: "Toyota"
    },
    {
      name: "2005"
    },
    {
      name: "13 million"
    },
    {
      name: "RAC234M"
    },
    {
      name: "Toyota RAV4"
    }
  ]);

  const [owners,setOwners] = useState<any>([]);

  useEffect(() => {
    setOwners(carOwners?.map((o: any) => {
      return {
        value: o?._id,
        label: o?.ownerName
      }
    }))
  },[carOwners])

  useEffect(() => {
    const data = [];
    for (let i = new Date().getFullYear(); i >= 1900; i--){
      data.push(i)
    }
    setYears(data);
  },[])

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        isCentered
        onClose={() => {
          onClose();
        }}
        size={"xl"}
      >
        <ModalOverlay  />
        <ModalContent>
          <form>
            <ModalHeader className="modal-header">Add vehicle</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={3}>

              <FormControl>
                <FormLabel className="input-labels">Model name</FormLabel>
                <Select className={`form-inputs `}>
                <option disabled={true} selected={true}>Select model name</option>
                {
                  models?.map((model: any) => {
                    return (
                      <option value={model?.name}>{model?.name}</option>
                    )
                  })
                }
                </Select>
              </FormControl>
              
              <FormControl mt={3}>
                <FormLabel className="input-labels">Vehicle Owner</FormLabel>
                <SelectInput
     defaultValue={selectedOption}
     onChange={setSelectedOption}
        options={owners}
      />
                </FormControl>

              <Flex  columnGap={'20px'} w={'100%'}>
              <FormControl mt={3}>
                <FormLabel className="input-labels">Chasis number</FormLabel>
                <Input
                  onChange={(e: any) => {}}
                  type={"number"}
                  className={`form-inputs`}
                  placeholder="Chasis number"
                />
              </FormControl>

              <FormControl mt={3}>
                <FormLabel className="input-labels">Plate number</FormLabel>
                <Input
                  onChange={(e: any) => {}}
                  type={"number"}
                  className={`form-inputs `}
                  placeholder="Plate number"
                />
              </FormControl>
             </Flex>

              <Flex columnGap={'20px'} w={'100%'}>
              <FormControl mt={3}>
                <FormLabel className="input-labels">Manufacture company</FormLabel>
                <Input
                  onChange={(e: any) => {}}
                  type={"text"}
                  className={`form-inputs `}
                  placeholder="Manufacture company"
                />
              </FormControl>

              <FormControl mt={3}>
                <FormLabel className="input-labels">Price</FormLabel>
                <Input
                  onChange={(e: any) => {}}
                  type={"number"}
                  className={`form-inputs `}
                  placeholder="Price"
                />
              </FormControl>
             </Flex>

              <FormControl mt={3}>
                <FormLabel className="input-labels">Manufacture year</FormLabel>
                <Select className={`form-inputs `}>
                <option disabled={true} selected={true}>Select manufacture year</option>
                {
                  years?.map((year: any) => {
                    return (
                      <option value={year}>{year}</option>
                    )
                  })
                }
                </Select>
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
                fontSize={"14px"}
                colorScheme="primary"
              >
                Save
                {/* {
                    !creating ?
                      'Save'
                      :
                      <>
                         <Spinner size='sm' color={"#fff"} />
                  &nbsp;Saving
                      </>
                  }
                  */}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
