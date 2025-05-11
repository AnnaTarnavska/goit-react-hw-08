import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active)
};

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={s.header}>
            <nav className="flex justify-between items-center px-6 py-4">
                <div>
                <NavLink className={setActiveClass} to='/'>Home</NavLink>
                </div>
                <div className="flex items-center gap-[10px]">
                <NavLink className={setActiveClass} to='/contacts'>Contacts</NavLink>
                {!isLoggedIn && <AuthNav/> }
                {isLoggedIn && <UserMenu/>}
                </div>
                
                
            </nav>
        </header>
        
    )
};

export default Navigation;



