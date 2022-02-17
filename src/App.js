import "./App.css";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import Cart from "./components/cart";
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
        <Route path="/item/:prodId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
