
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";

import Patient from '../HOC/PatientSummary.jsx';
import Prescription from '../HOC/Prescription/Prescription';
import Profile from '../HOC/Profile/Profile';
import Printing from '../HOC/Printing/PrintingPrescription';
import Visit from '../HOC/Visit/ThisVisit.jsx';
function Home() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/profile' index element={<Profile />}  />
        <Route path='/patient' element={<Patient key="ps" />}  />
        <Route path='/visit' element={<Visit />} />
        <Route path='/prescription' element={<Prescription />} />
        <Route path='/printing' element={<Printing />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default Home;
