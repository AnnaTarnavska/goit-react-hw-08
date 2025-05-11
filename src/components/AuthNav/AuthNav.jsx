import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from './AuthNav.module.css'


const AuthNav = () => {
    const setActiveClass = ({ isActive }) => {
        return clsx(s.link, isActive && s.active)
    };

    return (
        <>
            <NavLink className={setActiveClass} to='/login'>Login</NavLink>
            <NavLink className={setActiveClass} to='/register'>Registration</NavLink>
        </>
    );
};

export default AuthNav;