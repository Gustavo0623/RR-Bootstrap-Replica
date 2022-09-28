import './App.css';
import Navigation from './components/Navigation';
import Background from './components/Form';
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Background />
      <Listings />
    </div>
  );
}

export default App;
