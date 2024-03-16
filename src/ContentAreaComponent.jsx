import { Container, Heading, Text, Card, CardHeader, CardBody, CardFooter, Box, Flex, Spacer, Button, Center, ButtonGroup, Input } from '@chakra-ui/react';

import ToDoListComponent from "./ToDoListComponent";

export default function ContentAreaComponent() {
    return <>
    <Container py="6">
        <Box rounded='md' p="6" h="800" position="relative" bg="gray.300">
            <Box h="100%" position="relative" rounded="md">
                <ToDoListComponent/>
            </Box>
        </Box>
    </Container>
    </>
}