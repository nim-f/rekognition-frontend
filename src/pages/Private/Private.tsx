import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";

export const Private: React.FC = () => {
    const [{ AccessToken }] = useCookies(["AccessToken"]);
    return !!AccessToken ? <Outlet /> : <Navigate to="login" />;
};
