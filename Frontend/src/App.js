import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages/Home/Navbar';
import Herosection from './Pages/Home/Herosection';
import Homeslide from './Pages/Home/Homeslide';
import Newssection from './Pages/Home/Newssection';
import Homenews from './Pages/Home/Homenews';
import Footer from './Pages/Home/Footer';
import News1 from './Pages/Home/News/News1';

export default function App() {
  return (
    
      <>
        <Navbar />
        <Herosection />
        <Homeslide />
        <Newssection />
        <Homenews />
        <Footer />
        <News1 />
      </>
    
  );
}






