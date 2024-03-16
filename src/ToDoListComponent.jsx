import { Container, Stack, StackDivider, Heading, Text, Card, CardHeader, CardBody, CardFooter, Box, Flex, Spacer, Button, Center, ButtonGroup, Input } from '@chakra-ui/react'
import ToDoListItemComponent from './ToDoListItemComponent'
import { useState } from 'react'
import { useEffect, useRef } from 'react';


export default function ToDoListComponent() {

  let [selectedTodoID, setSelectedTodoID] = useState(-1);



  let todoItems = [
    {
      "todoID" : 0,
      "todoTitle" : "Test",
      "todoDesc" : "Desc"
    },{
      "todoID" : 1,
      "todoTitle" : "Test",
      "todoDesc" : "Desc"
    },{
      "todoID" : 2,
      "todoTitle" : "Test",
      "todoDesc" : "Desc"
    }
  ];

    return <>

    <Box w="100%" height="100%" rounded="md" overflowY="auto" position="relative">
      <Flex direction={{ base: 'column'}}>

      <Stack spacing='4'>
        {
          todoItems.map((item, index)=>{
            return <ToDoListItemComponent prevID={selectedTodoID} key={index} todoID={item.todoID} todoTitle={item.todoTitle} todoDesc={item.todoDesc} setClickIndex={setSelectedTodoID}/>
          })
        }
      </Stack>

    </Flex>

  </Box>
    </>
}