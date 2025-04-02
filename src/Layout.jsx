import {Outlet, Link} from "react-router-dom";
import "./App.css"

const Layout = () => {
    return (
        <>
            <div className="navBar">
                <a> <Link to="Home">Home</Link></a>
                <a> <Link to="Tickets">Tickets</Link></a>
                <a> <Link to="Map">Map</Link></a>
                <a> <Link to="Payment">Payment</Link></a>
            </div>

            <Outlet/>
        </>
    )
};

export default Layout;