import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import Advantage from './components/Advantage/Advantage';
import Category from './components/Categories/Category';
import Deal from './components/Deal/Deal';
import Featured from './components/Featured/Featured';
import Shop from './components/Shop/Shop';
import TopRated from './components/TopRated/TopRated';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <Advantage />
            <Category />
            <Deal countdownTimestampMs={1991973600000} />
            <Featured />
            <Shop />
            <TopRated />
            <Sponsors />
            <Footer />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
