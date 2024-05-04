import { NavLink } from "react-router-dom";
import { ROUTES } from "../../router/routes";

const Navbar = () => {
    return (
        <nav
            className="bg-zinc-800 border-b border-zinc-400
            flex items-center justify-between
            w-full px-4 sm:px-8 py-4">
            <h1 className="text-2xl sm:text-3xl font-bold">Todo App</h1>

            <NavLink to={ROUTES.HOME}>Home</NavLink>
        </nav>
    );
};

export default Navbar;
