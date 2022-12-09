import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { CartOrderSummary } from '../../Components/CartOrderSummary/CartOrderSummary'
import CartItem from '../../Components/CartItem/CartItem'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'

export const Cart = (props) => {

    const [
        cartData,
        setCartData
    ] = props

    return (
        <div>
            <Header />
            <Box
                maxW={{ base: '3xl', lg: '7xl' }}
                mx="auto"
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '6', md: '8', lg: '12' }}
            >
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    align={{ lg: 'flex-start' }}
                    spacing={{ base: '8', md: '16' }}
                >
                    <Stack spacing={{ base: '8', md: '10' }} flex="2">
                        <Heading fontSize="2xl" fontWeight="extrabold">
                            Shopping Cart (3 items)
                        </Heading>

                        <Stack spacing="6">
                            {cartData.map((produto) => (
                                <CartItem key={produto.id} produto={produto}/>
                            ))}
                        </Stack>
                    </Stack>

                    <Flex direction="column" align="center" flex="1">
                        <CartOrderSummary />
                        <HStack mt="6" fontWeight="semibold">
                            <p>or</p>
                            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
                        </HStack>
                    </Flex>
                </Stack>
            </Box>
            <Footer />
        </div>
    )
}
