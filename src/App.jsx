import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/exportComponents';
import { HomePage, CartPage } from './pages/exportPages';

const App = () => {
    return (
        <div className='w-screen h-screen'>
            <Router>
                {/* navbar component */}
                <Header />

                {/* pages */}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cart' element={<CartPage />} />
                </Routes>

                {/* footer component */}
                <Footer />
            </Router>
        </div>
    );
};

export default App;
