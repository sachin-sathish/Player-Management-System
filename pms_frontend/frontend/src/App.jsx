import Footer from "./components/Footer";
import Header from "./components/Header";
import ListPlayer from "./components/ListPlayer";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addplayer from "./components/Addplayer";

function App() {
  return (
    // <>
    <div className="app-container d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <main className="flex-grow-1">
          <Routes>
            {/* http://localhost:3000 */}
            <Route path="/" element={<ListPlayer />}></Route>

            {/* http://localhost:3000/Player */}
            <Route path="/Player" element={<ListPlayer />}></Route>

            {/* http://localhost:3000/addplayer */}
            <Route path="/addplayer" element={<Addplayer />}></Route>

            {/* http://localhost:3000/updateplayer/id */}
            <Route path="/updateplayer/:id" element={<Addplayer />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
    // </>
  );
}

export default App;
