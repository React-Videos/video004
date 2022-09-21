import logo from './logo.svg';
import './App.css';

/* Aqui recibimos parametros, pero en React los llamamos propiedades (props)*/
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Aqui podemos llamar a las props que recibimos */}
          { /* props.saludo */ }
          {props.children}
        </a>
      </header>
    </div>
  );
}

export default App;
