import { Box, Flex, Spacer, Button, Center, ButtonGroup, Input, Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure, Select, FormControl, FormLabel, Divider, AbsoluteCenter, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import { GetPersonIcon, GetSettingsIcon } from "./ThirdPartyIcons"
import NewTaskCreatorForm from "./NewTaskCreatorFormComponent"
import { useState, useRef } from 'react';


export default function HeaderComponent() {

    const { settingsIsOpen, settingsOnOpen, settingsOnClose } = useDisclosure()
    const { profileIsOpen, profileOnOpen, profileOnClose } = useDisclosure()


    const [newTodoDrawerDrawerOpen, setNewTodoDrawerDrawerOpen] = useState(false);
    const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);

    const settingsFirstField = useRef()
    const profileFirstField = useRef()

    return <>
        <Box bg="gray.200" boxShadow='base' w="100%" height="75">

            <Flex p="4">

                <Spacer />

                <Box flex="1">
                    <Button colorScheme='teal' onClick={() => setNewTodoDrawerDrawerOpen(true)}>
                        Ekle
                    </Button>
                    <NewTodoDrawer isOpen={newTodoDrawerDrawerOpen} onClose={() => setNewTodoDrawerDrawerOpen(false)} firstField={profileFirstField} ></NewTodoDrawer>
                </Box>

                <Spacer />

                <Box flex="3">
                    <Input bg="white" variant='outline' placeholder='Ara' />
                </Box>

                <Spacer />
                
                <Box flex="1">
                    <Button colorScheme='teal' onClick={() => setSettingsDrawerOpen(true)}>
                        Ayarlar
                    </Button>
                    <SettingsDrawer isOpen={settingsDrawerOpen} onClose={() => setSettingsDrawerOpen(false)} firstField={settingsFirstField} ></SettingsDrawer>
                </Box>

                <Spacer />
                
            </Flex>

        </Box>
    </>
}


export function NewTodoDrawer({ isOpen, onClose, firstField}) {
  
    return (
      <>
        <Drawer
        isOpen={isOpen}
        placement='left'
        initialFocusRef={firstField}
        onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Yeni ToDo</DrawerHeader>
  
            <DrawerBody>

            <NewTaskCreatorForm></NewTaskCreatorForm>

            </DrawerBody>
  
            <DrawerFooter w="100%">
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export function SettingsDrawer({ isOpen, onClose, firstField}) {
  
    return (
      <>
        <Drawer
        isOpen={isOpen}
        placement='right'
        initialFocusRef={firstField}
        onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Ayarlar</DrawerHeader>
  
            <DrawerBody>

            <Box position='relative' py="5">
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Tema Ayarları
                </AbsoluteCenter>
            </Box>

            <FormControl pb="5">
                <FormLabel>Tema</FormLabel>
                <Select>
                    <option>Sisteme Bağlı</option>
                    <option>İnci Beyazı</option>
                    <option>Huzurlu Karanlık</option>
                    <option>Sabah Seranatı</option>
                    <option>Kızıl Rüya</option>
                    <option>Kızıl Rüya</option>
                    <option>Yeşil Işıltı (Neon)</option>
                    <option>Yeşil Gölgeler (Neon)</option>
                    <option>Mor Işıltı (Neon)</option>
                    <option>Mor Gölgeler (Neon)</option>
                </Select>
            </FormControl>

            <Box position='relative' py="5">
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    Yedekleme
                </AbsoluteCenter>
            </Box>

            <FormControl>
                <FormLabel>Yedeklenecek Platformlar</FormLabel>
                <Stack spacing={2} direction='column'>
                    <Checkbox colorScheme='green' isDisabled  defaultChecked>
                        Bulut
                    </Checkbox>
                    <Checkbox colorScheme='red' isDisabled  defaultChecked>
                        Lokal (Bu Cihaz)
                    </Checkbox>
                </Stack>
            </FormControl>

            </DrawerBody>
  
            <DrawerFooter w="100%">
                        
                    <ButtonGroup spacing='2'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                        Cancel
                        </Button>
                        <Button colorScheme='green'>Save</Button>
                    </ButtonGroup>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }