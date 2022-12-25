import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import TestAlbum from './components/pages/TestAlbum';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<Home />} path='/' exact/> 
        <Route element={<TestAlbum />} path='/testAlbum' exact/> 
      </Routes> 
    </Router>
    </>
  );
}

export default App;
