import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';
import LoginForm from './components/LoginForm';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import Owners from './pages/Owners';
import RoutesFile from './routes';
import Apply from './pages/Apply';
import './App.css';
import AppRoutes from './routes';

function App() {
    return (
      <div className="App">
        <h1>AA Property Management</h1>
        <LoginForm />
        <PropertyForm />
        <PropertyList />
        <Apply />
        <Footer />
      </div>
    );
  }
  
  export default App;