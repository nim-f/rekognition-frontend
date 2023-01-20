import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Album } from "./pages/Album/Album";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <div className="App container mx-auto py-8 max-w-7xl">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="album/:label" element={<Album />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
