import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import '../app.css';

function App() {

    return (
        <>
            <NavBar className='navbar'/>
            <Outlet />
            <Footer />
        </>
    );
}

export default App;