import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

function App() {
  return (
    <div >
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>

    </div>
  );
}

export default App;
