import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import {RiUserAddLine} from 'react-icons/ri'




export default function UserList() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius="8" bg="gray.800" p="8"
                >
                    <Flex mb="8" justify="space-between" align="center">

                        <Heading size="lg" fontWeight="normal">
                            Usuários
                        </Heading>

                        <Button as="a" fontSize="sm" colorScheme="pink" size="sm" leftIcon={<Icon as={RiUserAddLine}/>}>Criar Novo</Button>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                </Th>

                                <Th>Usuario</Th>
                                <Th>Data de Cadastro</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6">
                                <Checkbox colorScheme="pink"/>
                                </Td>
                                <Td>

                                    <Box>
                                        <Text fontWeight="bold" >Thiago Messias</Text>
                                        <Text fontSize="sm" >Thiagomessiasdebr@gmail.com</Text>
                                    </Box>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </Box>

            </Flex>

        </Box>
    )
}