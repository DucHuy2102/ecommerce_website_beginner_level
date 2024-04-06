import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    ButtonGroup,
    Button,
} from '@chakra-ui/react';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartShop = (props) => {
    const { id, productImage, productName, description, price } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartAmount = cartItems[id];
    return (
        <Card key={id} maxW='sm'>
            <CardBody>
                <Image
                    className='w-full h-full object-cover rounded-lg'
                    src={productImage}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{productName}</Heading>
                    <Text>{description}</Text>
                    <Text color='blue.600' fontSize='2xl'>
                        ${price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter className='flex items-center justify-end'>
                <ButtonGroup spacing='2'>
                    {/* buy now */}
                    <Link to='/cart'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                    </Link>

                    {/* add to cart */}
                    <Button onClick={() => addToCart(id)} variant='ghost' colorScheme='blue'>
                        Add to cart {cartAmount > 0 && <>({cartAmount})</>}
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default CartShop;
