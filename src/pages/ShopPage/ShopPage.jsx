import { PRODUCTS } from '../../products';
import CartShopping from './CartShop';

const ShopPage = () => {
    return (
        <div className='w-full h-full mt-5 mb-5'>
            <div className='grid grid-cols-3 gap-y-5 place-items-center'>
                {PRODUCTS.map((item) => (
                    <CartShopping data={item} key={item.id} />
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
