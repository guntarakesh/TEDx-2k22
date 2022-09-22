import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Gallery from './Gallery/Gallery'
import Home from './Home/Home'
import Members from './Members/Members'
import Merchandise from './Merchandise/Merchandise'
import Speakers from './Speakers/Speakers'
import Sponsors from './Sponsors/Sponsors'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/merchandise" element={<Merchandise/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/sponsors" element={<Sponsors/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
