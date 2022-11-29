import {Routes,Route, BrowserRouter} from 'react-router-dom';
import {Home} from './components/home/home.component';
import {Login} from './components/login/login.component';
import {Layout} from './components/layout/layout.component';
import {Addpatient} from './components/addpatient/addpatient.component';
import {Medicine} from './components/medicine_details/medicine_details.component';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <fetchapi/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login/>} />     
      <Route path="/layout" element={<Layout/>} />
      <Route path="/addpatient" element={<Addpatient/>} />
      <Route path="/medicine_details/:id" element={<Medicine/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
