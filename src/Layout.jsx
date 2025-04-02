import {Outlet, Link} from "react-router-dom";
import "./App.css"

const Layout = () => {
    return (
        <>
            <div className="navBar">
                <Link to="Home">Home</Link>
                <Link to="Tickets">Tickets</Link>
                <Link to="Map">Map</Link>
                <Link to="Payment">Payment</Link>
                <Link to="Info">Info</Link>
            </div>

            <Outlet/>
        </>
    )
};

export default Layout;