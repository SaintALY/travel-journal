import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Card from './components/Card';
import Data from './data/data';

function App() {
  const cards = Data.map(card => {
    return (
      <Card 
        key={card.id}
        item={card}
       />
    );
  });
  return (
    <div className="App">
      <Navigation />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;

      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>