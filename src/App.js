import "./App.css";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Productos!" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
