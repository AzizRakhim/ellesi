import './App.scss';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";
import Hero from './components/Hero/Hero';
import Advantage from './components/Advantage/Advantage';
import Category from './components/Categories/Category';
import Deal from './components/Deal/Deal';

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
            <Deal countdownTimestampMs={1743673600000} />
          </>
        } />
      </Routes>
    </>
  );
}

export default App;
