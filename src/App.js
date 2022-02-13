import "./App.css";
import NavBar from "./components/navBar";
// import Footer from "./components/footer";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="juegos!" />} />
        <Route
          path="/category/:categoryGame"
          element={<ItemListContainer greeting="juegos!" />}
        />
        <Route path="/product/:prodId" element={<ItemDetailContainer />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
