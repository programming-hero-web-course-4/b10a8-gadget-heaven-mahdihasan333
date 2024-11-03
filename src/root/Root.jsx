import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
    return (
        <div>
            {/* Navbar Section */}
            <Navbar />
            {/* main Section */}
            <Outlet />
            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default Root;