import './App.css'
import { Route, Routes } from 'react-router-dom';
import Contacts from './container/Contact/Contact';
import Layout from './container/Layout/Layout';
import NoMatch from './container/NoMatch/NoMath';
import Homepage from './container/Homepage/Homepage';
import About from './container/About/About';
import Services1 from './container/Services1/Services1';
import Cases from './container/Cases/Cases';
import Team from './container/Team/Team';
import Blog from './container/Blog/Blog';

import 'animate.css';

function App() {
  
  return(<div>
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Homepage />} />
        <Route path="services" element={<Services1/>} />
        <Route path="cases" element={<Cases/>} />
        <Route path="team" element={<Team/>} />
        <Route path="blog" element={<Blog/>} />
        <Route path="about" element={<About/>} />
        <Route path="contacts" element={<Contacts/>} />
        <Route path="*" element={<NoMatch/>} />
      </Route>
    </Routes>
  </div>)
}
export default App;
