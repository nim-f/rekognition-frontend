import { useCookies } from "react-cookie";

export const NavBar: React.FC = () => {
    const [,, removeCookie] = useCookies([
        "AccessToken",
        "RefreshToken",
        "userId",
    ]);
    const logout = () => {
        removeCookie("AccessToken");
        removeCookie("RefreshToken");
        removeCookie("userId");
    };
    return (
        <div className="bg-gray-800">
            <div className="mx-auto px-2 max-w-7xl">
                <div className="relative flex h-16 items-center justify-between">
                    <a href="/" className="text-white">
                        Home
                    </a>
                    <button className="text-white" onClick={logout}>
                        Log out
                    </button>
                </div>
            </div>
        </div>
    );
};
