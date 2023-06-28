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

export const CartPage = (props) => {

    const {
        cartData,
        setCartData,
        total
    } = props


    return (
        <div>
            <Header cartData={cartData}/>
            <Box
                maxW={{ base: '3xl', lg: '7xl' }}
                mx="auto"
                px={{ base: '4', md: '8', lg: '12' }}
                py={{ base: '6', md: '8', lg: '12' }}
                minH={"60vh"}>
                <Stack
                    direction={{ base: 'column', lg: 'row' }}
                    align={{ lg: 'flex-start' }}
                    spacing={{ base: '8', md: '16' }}>
                    <Stack spacing={{ base: '8', md: '10' }} flex="2">
                        <Heading fontSize="2xl" fontWeight="extrabold">
                            Carrinho de compras:
                        </Heading>
                        <Stack spacing="6">
                            {cartData.map((produto) => (
                                <CartItem
                                    key={produto.idAlbum}
                                    produto={produto}
                                    cartData={cartData}
                                    setCartData={setCartData} />
                            ))}
                        </Stack>
                    </Stack>

                    <Flex direction="column" align="center" flex="1">
                        <CartOrderSummary total={total}/>
                    </Flex>
                </Stack>
            </Box>
            <Footer />
        </div>
    )
}
