import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage.js';
import APropos from './components/APropos/APropos.js';
import Page404 from './components/Page404/Page404.js';
import Detail from './components/Detail/Detail.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/a-propos' element={<APropos />} />
        <Route path='/lodging/:lodgingid' element={<Detail />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
