import {
    Button,
    Stack,
    Text,
    useColorModeValue,
    Box
} from "@chakra-ui/react"
import { CiShoppingCart } from "react-icons/ci";

function Header() {

    return (
        <Stack
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={"center"}
            bg={useColorModeValue('gray.100', 'gray.900')}
            w={"100%"}
            color={useColorModeValue('gray.700', 'gray.200')}
            h={"24vh"}>
            <Text
                as={'b'}
                fontSize='5xl'
                textAlign={'center'}
                w={"100%"}>
                Loja de Músicas
            </Text>
            <Box
                display={'flex'}
                flexDir={'row'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                w={'250px'}
                p={"16px"}>
                <Button
                    variant='solid'
                    color={'black'}
                    bg={useColorModeValue('gray.50', 'gray.900')}>
                    Home
                </Button>
                <Button
                    leftIcon={<CiShoppingCart />}
                    variant='solid'
                    color={'black'}
                    bg={useColorModeValue('gray.50', 'gray.900')}>
                    0
                </Button>
            </Box>
        </Stack>
    )
}

export default Header