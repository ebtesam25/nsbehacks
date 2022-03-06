import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from './screens/landing';
import Step1 from './screens/step1';
import Step2 from './screens/step2';
import Step3 from './screens/step3';
import Step4 from './screens/step4';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/start" element={<Step1 />}></Route>
        <Route path="/features" element={<Step2 />}></Route>
        <Route path="/upload" element={<Step3 />}></Route>
        <Route path="/results" element={<Step4 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}