import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/LoginModal/LoginModal';
import Main from './pages/Main/Main';
import List from './pages/List/List';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import OAuth from './pages/OAuth/OAuth';
import Reservations from './pages/Reservations/Reservations';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/" element={<Main />} />
        <Route path="/oauth/kakao" element={<OAuth />} />
        <Route path="/book/:id" element={<Reservations />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
