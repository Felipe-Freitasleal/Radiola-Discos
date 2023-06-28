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

  console.log(cartData)

  function addToCart(disco) {
    console.log(disco)
    const novoCartData = [...cartData]

    const acharItem = cartData.find(item => item.idAlbum === disco.idAlbum)
    console.log(acharItem)

    if (Array.isArray(cartData)) {
      console.log(`cartData é um array!`)
      if (!acharItem) {
        novoCartData.push(disco)
        setCartData(novoCartData)
        swal({
          title: "Obrigado!",
          text: "Seu álbum foi adicionado ao carrinho!",
          icon: "success",
        })
      } else {
        swal({
          title: "Houve um problema!",
          text: "Esse álbum já foi adicionado ao carrinho.",
          icon: "error",
        })
      }
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
            <Card
              maxW='350px'
              minW='330px'
              key={disco.idAlbum}
              _hover={{
                boxShadow: "0px 1px 8px"
              }}
              m={2}
            >
              <CardBody>
                <Image
                  src={disco.capa}
                  alt='Capa disco'
                  borderRadius='lg'
                  rounded={'lg'}
                  height={230}
                  maxH={230}
                  minH={50}
                  width={282}
                  maxW={282}
                  minW={50}
                  objectFit={'cover'}
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
                    Adicionar ao carrinho
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