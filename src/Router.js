import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import OAuth from './pages/OAuth/OAuth';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/oauth/kakao" element={<OAuth />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
