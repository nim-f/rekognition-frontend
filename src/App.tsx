import "./App.css";
import { ImagesList } from "./components/ImagesList/ImagesList";
import { NavBar } from "./components/NavBar/NavBar";
import { Uploader } from "./components/Uploader/Uploader";

function App() {
    return (
        <div>
            <NavBar />
            <div className="App container mx-auto py-8 max-w-7xl">
                <Uploader />
                <ImagesList />
            </div>
        </div>
    );
}

export default App;
