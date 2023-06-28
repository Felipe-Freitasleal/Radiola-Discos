import {
    Button,
    Stack,
    Text,
    useColorModeValue,
    Box
} from "@chakra-ui/react"
import { CiShoppingCart } from "react-icons/ci"
import { goToCartPage, goToHomePage } from "../../Routes/coordinato"
import { useNavigate } from "react-router-dom"


function Header(props) {

    const { cartData } = props
    const navigate = useNavigate()


    return (
        <Stack
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={"center"}
            bg={useColorModeValue('gray.100', 'gray.900')}
            w={"100%"}
            color={useColorModeValue('gray.700', 'gray.200')}
            h={32}
            p={4}>
            <Text
                as={'b'}
                fontSize='4xl'
                textAlign={'center'}
                w={"100%"}
                fontFamily={'initial'}>
                Radiola Discos
            </Text>
            <Box
                display={'flex'}
                flexDir={'row'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                w={'250px'}>
                <Button
                    variant='solid'
                    color={'black'}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    onClick={() => goToHomePage(navigate)}>
                    Home
                </Button>
                <Button
                    leftIcon={<CiShoppingCart />}
                    variant='solid'
                    color={'black'}
                    bg={useColorModeValue('gray.50', 'gray.900')}
                    onClick={() => goToCartPage(navigate)}>
                    {cartData.length}
                </Button>
            </Box>
        </Stack>
    )
}

export default Header