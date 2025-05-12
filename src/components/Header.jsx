import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="bg-warning py-3 mb-2">
            <div className="container d-flex justify-content-between align-items-center">
                <div>Mike's Movies DB</div>
                <ul className="d-flex list-unstyled m-o gap-2">
                    <li>
                        <NavLink to='/'>Home Page</NavLink>
                    </li>
                    <li>
                        <NavLink to='/movies'>Films</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;