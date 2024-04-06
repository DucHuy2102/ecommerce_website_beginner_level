import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/exportComponents';
import { ShopPage, CartPage } from './pages/exportPages';
import { ShopContextProvider } from './context/ShopContext';

const App = () => {
    return (
        <div className='w-screen h-screen'>
            <ShopContextProvider>
                <Router>
                    {/* navbar component */}
                    <Header />

                    {/* pages */}
                    <Routes>
                        <Route path='/' element={<ShopPage />} />
                        <Route path='/cart' element={<CartPage />} />
                    </Routes>
                </Router>
            </ShopContextProvider>
        </div>
    );
};

export default App;
