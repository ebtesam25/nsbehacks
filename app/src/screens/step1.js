import { Link } from 'react-router-dom';
import Features from '../components/features'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../index.css'

function Step1() {
  return (
    <div>
        <Navbar/>
      <div className="hero min-h-screen bg-white">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl text-black font-bold">Ready to get started? </h1>
      <ul class="steps">
        <li class="step step-primary text-primary">Select Type</li>
        <li class="step">Select Features</li>
        <li class="step">Upload Document</li>
        <li class="step">View Results</li>
        </ul>
      <p className="py-6">What would you like to Anonymize ?</p>
      <select class="select w-full max-w-xs">
        <option disabled selected>Select</option>
        <option>Job Application</option>
        <option>Rental Application</option>
        <option>Loan Application</option>
        <option>Research Publication</option>
        </select>
      <Link to="/features"><button className="btn bg-black">Next</button></Link>
    </div>
  </div>
</div>
<Footer/>
    </div>
  );
}

export default Step1;
