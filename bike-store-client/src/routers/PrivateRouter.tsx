import { logout, TUser, useCurrentToken } from "../redux/features/Auth/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { verifyToken } from "../utils/verifytoken";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type TPrivateRoute = {
    role: string | undefined,
    children: ReactNode
}

const PrivateRouter = ({ children, role }: TPrivateRoute) => {
    const token = useAppSelector(useCurrentToken);
    const dispatch = useAppDispatch();
    let user;
    if (token) {
        user = verifyToken(token) as TUser;
    }

    if ( user?.role != role) {
        dispatch(logout());
        return <Navigate to={"/login"} replace={true}></Navigate>
    }

    console.log({ user, role });

    return children
}

export default PrivateRouter;