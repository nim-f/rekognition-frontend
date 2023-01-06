import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Album } from "./pages/Album/Album";

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <div className="App container mx-auto py-8 max-w-7xl">
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="album/:label" element={<Album />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
