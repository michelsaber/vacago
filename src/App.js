import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./components/NaviBar"
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <NaviBar></NaviBar>
      <Main></Main>
      <footer className="bg-dark py-4 "><p className="text-white text-center">Copyright &copy; Vacago</p></footer>
    </div>
  );
}

export default App;
