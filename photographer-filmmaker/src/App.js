import './App.css';
import Header from './components/Header'
import AnimeRoutes from './components/AnimRoutes'
import {BrowserRouter as Router} from 'react-router-dom'
import {motion} from 'framer-motion'
function App() {
  return (
    <>
    <Router>
      <Header/>
      <AnimeRoutes/>
    </Router>
    </>
  );
}

export default App;
