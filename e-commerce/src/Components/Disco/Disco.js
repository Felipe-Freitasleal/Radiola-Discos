import {
  Card,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Button,
  Text,
  Flex,
  ListItem,
  OrderedList,
  Divider,
  ButtonGroup
} from '@chakra-ui/react';
import { CiShoppingCart } from "react-icons/ci"

function Disco(props) {

  const {
    setCartData,
    album
  } = props

  console.log(album.albums)

  const discos = album.albums

  function addToCart(disco) {

  }


  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
    >
      <Text as={'b'} fontSize='4xl' margin={4} >{album.name}</Text>
      <Flex
        flexDir={'row'}
        justifyContent={'space-evenly'}
        flexWrap={"wrap"}
      >
        {discos.map((disco) => {
          return (
            <Card maxW='sm' key={disco.idAlbum}
              _hover={{
                transform: "scale(1.1)",
                transition: "all .3s ease"
              }}>
              <CardBody>
                <Image
                  src={disco.capa}
                  alt='Capa disco'
                  borderRadius='lg'
                  maxH={"50vh"}
                  minH={"50vh"}
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>{disco.nameAlbum}</Heading>
                  <Text>
                    <OrderedList>
                      {disco.songs.map((song) => {
                        return (
                          <ListItem>{song}</ListItem>
                        )
                      })}
                    </OrderedList>
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    R$
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          )
        })}
      </Flex>
    </Flex>
  );
}

export default Disco