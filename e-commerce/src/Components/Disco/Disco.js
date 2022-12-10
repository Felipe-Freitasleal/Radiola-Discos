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
} from '@chakra-ui/react'
import swal from 'sweetalert'

function Disco(props) {

  const { cartData, setCartData, album } = props
  const discos = album.albums


  function addToCart(disco) {
    const novoCartData = [...cartData]
    const procurarDisco = novoCartData.find(item => item === disco)

    if (procurarDisco) {
      swal({
        title: "Houve um problema!",
        text: "Esse álbum já foi adicionado ao carrinho.",
        icon: "error",
      })
    } else {
      novoCartData.push(disco)
      setCartData(novoCartData)
      swal({
        title: "Obrigado!",
        text: "Seu álbum foi adicionado ao carrinho!",
        icon: "success",
      })
    }
  }


  return (
    <Flex
      flexDir={'column'}
      alignItems={'center'}
    >
      <Text as={'b'} fontSize='3xl' margin={4} >{album.name}</Text>
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
                  <Stack>
                    <OrderedList>
                      {disco.songs.map((song) => {
                        return (
                          <ListItem key={song}>{song}</ListItem>
                        )
                      })}
                    </OrderedList>
                  </Stack>
                  <Text color='blue.600' fontSize='2xl'>
                    R$ {disco.value}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='ghost' colorScheme='blue'
                    onClick={() => addToCart(disco)}>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          )
        })}
      </Flex>
    </Flex >
  );
}

export default Disco