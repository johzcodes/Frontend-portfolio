import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Tools from './components/Tools';


const App = () => {
  return (
    <>
    <div>
      <Navbar />
      <Intro />
      <Tools />
      <Contact /> 
      <Footer />
    </div>
    </>
  )
}

export default App