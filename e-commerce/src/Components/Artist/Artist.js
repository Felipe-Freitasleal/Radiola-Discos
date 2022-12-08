import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Image,
    Button
} from '@chakra-ui/react';
import { CiMusicNote1 } from "react-icons/ci";

const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

function Artist() {
    return (
        <Center py={12}>
            <Box
                display={'flex'}
                flexDir={'column'}
                role={'group'}
                p={2}
                maxW={'330px'}
                minW={'330px'}
                maxH={'500px'}
                minH={'500px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                _hover={{
                    boxShadow: '0px 1px 12px -5px black'
                }}
                alignItems={'center'}
                justifyContent={'space-evenly'}>
                <Image
                    rounded={'lg'}
                    height={230}
                    maxH={230}
                    minH={230}
                    width={282}
                    maxW={282}
                    minW={282}
                    objectFit={'cover'}
                    src={IMAGE}
                />
                <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                    textAlign={'center'}
                    m={1}
                >
                    A Banda Mais bonita da Cidade
                </Heading>
                <Button variant='solid' bg='darkgrey' color={'black'} leftIcon={<CiMusicNote1/>}>
                    Ver Albuns
                </Button>
            </Box>
        </Center>
    );
}

export default Artist