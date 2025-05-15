import { Outlet } from "react-router-dom"
import Header from "../components/Header";
// import Footer from "../components/Footer";
import Loader from "../components/Loader";
//utilities per il contesto
import { useContext } from "react";
import GlobalContext from "../contexts/globalContext";

const DefaultLayout = () => {
    //globalcontext si porta da app.jsx come oggetto {isLoading, setIsLoading}, qui mi serve solo isLoading e destrutturo
    const { isLoading } = useContext(GlobalContext)

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            {/* se isLoading è vero allora mostro il componente Loader */}
            {isLoading && <Loader />}
            {/* <Footer /> */}
        </>
    )
};

export default DefaultLayout;