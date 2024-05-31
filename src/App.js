import './App.scss';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home';

function App() {
  return (
    <div className="App">
      <Nav />      
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
