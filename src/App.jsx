import {Home, Contact, Gallery, About, NotFound, Plans, Trainers} from './pages';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, Navbar } from './component';

function App() {
  

  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/plans' element={<Plans />} />
      <Route path='/trainers' element={<Trainers />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
   </BrowserRouter>
  )
}

export default App
