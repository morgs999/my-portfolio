import { Outlet } from 'react-router-dom';
import NavBarr from './components/NavBar'
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <NavBarr />
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