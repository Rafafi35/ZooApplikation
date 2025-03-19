import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="Home">Home</Link>
                    </li>
                    <li>
                        <Link to="Tickets">Tickets</Link>
                    </li>
                    <li>
                        <Link to="Map">Map</Link>
                    </li>
                    <li>
                        <Link to="Payment">Payment</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Layout;