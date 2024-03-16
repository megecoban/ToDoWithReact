import { useState } from 'react';
import { Collapse, SlideFade , ScaleFade, Slide, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Container, Stack, StackDivider, Heading, Text, PopoverCloseButton, Card, CardHeader, CardBody, CardFooter, Box, Flex, Spacer, Button, Center, ButtonGroup, Input, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody, PopoverFooter } from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'

export default function ToDoListItemComponent({todoID, todoTitle, todoDesc, setClickIndex, prevID}) {

    let isOpen = prevID == todoID ? true : false

    
    const [alertModal, setAlertModal] = useState(false);

    return <>

          <Box position="relative" px="4" py="4" rounded="md" boxShadow="base" bg="gray.100" onClick={() => { if(prevID == todoID) { setClickIndex(-1) } else { setClickIndex(todoID) }}}> 
            <Heading size='xs'>
              {todoID}. {todoTitle}
            </Heading>
            <Text pt='1' fontSize='sm'>
              {todoDesc}
            </Text>
            
            
            {

              <Collapse in={isOpen} animateOpacity>
                <Box position="absolute" top="0px" left="0px" rounded="md" w="100%" h="100%" bg="gray.700" opacity="0.5" backdropFilter='auto'>
                
                </Box>
                <Box position="absolute" top="0px" left="0px" rounded="md" w="100%" h="100%" opacity="1">
                    <Center w="100%" h="100%" >
                      <ButtonGroup spacing='6'>
                        <Button colorScheme='blue'>Preview</Button>
                        <Button colorScheme='green'>Edit</Button>
                        <Button colorScheme='red' onClick={()=>{setAlertModal(true)}}>Delete</Button>
                        <Button>Back</Button>
                      </ButtonGroup>
                    </Center>
                </Box>
              </Collapse  >
              
              

            }
            
          </Box>

            <AreYouSureModal todoID={todoID} todoTitle={todoTitle} alertModal={alertModal} closeAlertModal={()=>{setAlertModal(false)}}></AreYouSureModal>



    </>
}

function AreYouSureModal({todoID, todoTitle, alertModal, closeAlertModal}) {
  return (
    <>
      <Modal isOpen={alertModal} onClose={closeAlertModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Emin Misiniz?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>İşleme devam ederseniz {todoTitle} göreviniz silinecektir. Emin misiniz?</p><br></br>

            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="center">
                      <Text as="b">Görev Detayları</Text>
                    </Box>
                    <AccordionIcon/>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <Heading as='h5' size='md' mb={0} textAlign="center">{todoTitle}</Heading>
                    <Text fontSize="xs" textAlign="center"  >(ID: {todoID})</Text>
                    
                    <Flex my={2}>
                      <Box flex="1" textAlign="right" mr={1}>
                        <Text fontSize="md" as="b" textAlign="right">
                          Açıklama:
                        </Text>
                      </Box>
                      <Box flex="1" textAlign="left" ml={1}>
                        <Text fontSize="md">
                          ---
                        </Text>
                      </Box>
                    </Flex>

                    <Flex my={2}>
                      <Box flex="1" textAlign="right" mr={1}>
                        <Text fontSize="md" as="b">
                          Bitiş Tarihi:
                        </Text>
                      </Box>
                      <Box flex="1" textAlign="left" ml={1}>
                        <Text fontSize="md">
                        00.00.0000
                        </Text>
                      </Box>
                    </Flex>

                    <Flex my={2}>
                      <Box flex="1" textAlign="right" mr={1}>
                        <Text fontSize="md" as="b">
                          Hatırlatıcı:
                        </Text>
                      </Box>
                      <Box flex="1" textAlign="left" ml={1}>
                        <Text fontSize="md">
                        Yok
                        </Text>
                      </Box>
                    </Flex>



                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='red' mr={3}>
              Sil
            </Button>
            <Button colorScheme='teal' mr={3} onClick={closeAlertModal}>
              Geri Dön
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}