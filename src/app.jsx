import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar'
import Header from './components/Header';
import Footer from "./components/Footer";
import '../app.css';

function App() {

    return (
        <>
            <NavBar />
            {/* <div className="parallax"></div> */}
            <Header />
            <main>
                <div className="page-view">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default App;