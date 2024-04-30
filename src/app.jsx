import { Outlet } from 'react-router-dom';
import Nav from './components/NavBar'
import Header from './components/Header';
import Footer from "./components/Footer";

function App() {

    return (
        <>
            <Nav />
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