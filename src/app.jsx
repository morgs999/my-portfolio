import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from './components/Header';

function App() {

    return (
        <>
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