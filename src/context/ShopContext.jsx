import { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getPrice = () => {
        let totalPrice = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let infoItem = PRODUCTS.find((product) => product.id == item);
                totalPrice += infoItem.price * cartItems[item];
            }
        }
        return totalPrice;
    };

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    };

    const deleteCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: 0 }));
    };

    const contextValue = { cartItems, addToCart, removeFromCart, deleteCart, getPrice };
    // console.log(cartItems);

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
