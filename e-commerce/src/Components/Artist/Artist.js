import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Image,
    Button
} from '@chakra-ui/react';
import { CiMusicNote1 } from "react-icons/ci";
import { useNavigate } from "react-router-dom"
import { goToArtistPage } from '../../Routes/coordinato';

function Artist (props) {
    
    const {
        artista,
        setAlbums
    } = props

    const navigate = useNavigate()

    return (
        <Center py={12}
        maxW={'330px'}
        minW={'300px'}
        maxH={'500px'}
        minH={'450px'}>
            <Box
                display={'flex'}
                flexDir={'column'}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                role={'group'}
                p={2}
                m={1}
                maxW={'330px'}
                minW={'300px'}
                maxH={'500px'}
                minH={'450px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                _hover={{
                    boxShadow:"0px 1px 8px"
                }}
                onClick={()=> setAlbums([artista])}>
                <Image
                    rounded={'lg'}
                    height={230}
                    maxH={230}
                    minH={50}
                    width={282}
                    maxW={282}
                    minW={50}
                    objectFit={'cover'}
                    src={artista.imagem}
                />
                <Heading
                    fontSize={'2xl'}
                    fontFamily={'body'}
                    fontWeight={500}
                    textAlign={'center'}
                    m={1}
                >
                    {artista.name}
                </Heading>
                <Button 
                variant='solid' 
                color={'black'} 
                leftIcon={<CiMusicNote1/>}
                bg={useColorModeValue('gray.100', 'gray.900')}
                onClick={() => goToArtistPage(navigate)}
                >
                    Ver álbuns
                </Button>
            </Box>
        </Center>
    );
}

export default Artist