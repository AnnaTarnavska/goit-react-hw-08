import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className="flex justify-end items-center gap-[10px]">
            <span className="text-2xl">Hello,{user.name}</span>
             <button onClick={() => dispatch(logoutThunk())} className='bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition'>Logout ➔ </button>
        </div>
    );
};

export default UserMenu;