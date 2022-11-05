import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Phone Contact</h1>
            <div className="nav-menu">
                <NavLink to="/" exact="true" className={({ isActive }) => isActive ? "active" : ''}>Home</NavLink>
                <NavLink to="/create" className={({ isActive }) => isActive ? "active" : ''}>New Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;