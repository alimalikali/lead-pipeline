import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarketHead from './components/MarketHead';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Experience from './components/Experience';
import Community from './components/Community';
import Platform from './components/Platform';
import Questions from './components/Questions';
import AccordinData from './data/AccordinData';
import Form from './components/Form'
import Footer from './components/Footer';
// 

function App() {
  let s=2
  setTimeout(()=>{
    console.log(s)
  },1000)
  s=40
  return (
    <>
    <Header/>
    <HeroSection/>
    <Banner/>
    <Testimonials/>
    <MarketHead/>
    <Features reviews="Reviews"        left={null} />
    <Features reviews="Webchat"        left={1}    />
    <Features reviews="Messaging"      left={null} />
    <Features reviews="Text compaigns" left={2}    />
    <Experience/>
    <Community/>
    <Platform />
    <Questions AccordinData={AccordinData} />
    <Form />
    <Footer />
    </>
  );
}

export default App;
