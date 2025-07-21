import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Section from './components/Section';

function App() {
  return (
    <div className="App">  
    <Header/>   
    <Section/>
    <Projects/>
    <Footer/>   
    </div>
  );
}

export default App;
