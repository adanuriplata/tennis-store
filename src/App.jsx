// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Footer } from './components/';
import { Hero } from './components/';
import { Cta } from './components/';
import { Carousel } from './components/';
import { Banner } from './components/';
import './styles/style.scss';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero />
      <Cta />
      <Carousel />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
