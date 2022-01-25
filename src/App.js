import "./App.css";
import NavBar from "./components/navBar";
import ItemListContainer from "./components/itemListContainer";

function App() {
	return (
		<div className="App">
			<NavBar />
			<ItemListContainer greeting="Productos!" />
		</div>
	);
}

export default App;
