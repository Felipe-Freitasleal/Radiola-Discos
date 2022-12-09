import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
    Button
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>

            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>

                <Text>© 2022 Felipe Leal. All rights reserved</Text>

                <Stack direction={'row'} spacing={6}>
                    
                    <Button label={'Twitter'} href={'#'}>
                        <FaLinkedin />
                    </Button>

                    <Button label={'YouTube'} href={'#'}>
                        <FaGithub />
                    </Button>

                    <Button label={'Instagram'} href={'#'}>
                        <FaInstagram />
                    </Button>

                </Stack>

            </Container>

        </Box>
    );
}

export default Footer