import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import '../app.css';

import { createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(0,0,0,0.81)',
        },
        secondary: {
            main: 'rgba(9,0,129,0.78)',
        },
    },
});

function App() {

    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;