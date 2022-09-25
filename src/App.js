import MyApi from "./components/MiApi";


function App() {

  return (
    <>
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container">
            <h2>Rick and Morty</h2>
          </div>
        </nav>
        <MyApi />
      </div>

    </>
  );
}
export default App