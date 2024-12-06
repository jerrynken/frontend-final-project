import { Link } from "react-router-dom";

function Nav(){
    return(
        <nav className="navbar">
            <>
            <header className = "logo" >
            <img
            height={50}
            src={require("../assets/logo.jpg")}
            alt="little lemon restaurant"
            />
            </header>
            </>
            <ul className="nav-links">
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/about" className="nav-item">About</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/reservation" className="nav-item">Reservation</Link>
                <Link to="/order" className="nav-item">Order Online</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </ul>
        </nav>
    )
}

export default Nav;