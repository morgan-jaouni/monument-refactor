
import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Blog from './pages/Blog';
import Article from './components/LandingArticles';
import About from './components/LandingAbout';
import Gallery from './components/LandingGallery';
import Contact from './components/LandingContact';
import Footer from './components/LandingFooter';

function App() {
  return (
    <div className="App">
      <Landing /> 
      <Article /> 
      <About /> 
      <Gallery /> 
      <Contact /> 


      <Blog />
      <Navbar />
      <Footer />
    </div>

  );
}

export default App;
