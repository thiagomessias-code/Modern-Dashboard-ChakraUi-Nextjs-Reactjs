import { Box, Stack, Text, Link, Icon} from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";



export function Sidebar ( ) {
    return (
<Box as="aside" w="64" mr="8">
    <Stack spacing="12" align="flex-start">
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">Geral</Text>
        <Stack spacing="4" mt="8" align="stretch">

            <Link display="flex"  alignItems="center"  color="pink.400">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text fontWeight="medium" ml="4">Dasboard</Text>
            </Link>

            <Link display="flex"  alignItems="center"  color="pink.400">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text fontWeight="medium" ml="4">Usuarios</Text>
            </Link>

            <Link display="flex"  alignItems="center"  color="pink.400">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text fontWeight="medium" ml="4">Automação</Text>
            </Link>
            
        </Stack>
        </Box>
        <Box>
            <Text fontWeight="bold" color="gray.400" fontSize="small">Automação</Text>
        <Stack spacing="4" mt="8" align="stretch">

            <Link display="flex"  alignItems="center"  color="pink.400">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text fontWeight="medium" ml="4">Formularios</Text>
            </Link>

            <Link display="flex"  alignItems="center"  color="pink.400">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text fontWeight="medium" ml="4">Automação</Text>
            </Link>
            
        </Stack>
        </Box>
    </Stack>
    
</Box>
    )
}