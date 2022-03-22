import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react'
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
                </Box>

            </Flex>

        </Box>
    )
}