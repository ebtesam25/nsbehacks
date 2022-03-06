import { useState } from 'react';
import { Link } from 'react-router-dom';
import Features from '../components/features'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../index.css'

function Step3() {
  const [doc, setdoc] = useState(null)
  return (
    <div>
        <Navbar/>
      <div className="hero min-h-screen bg-white">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl text-black font-bold">Upload your documents</h1>
      <ul class="steps">
        <li class="step step-primary text-primary">Select Type</li>
        <li class="step step-primary text-primary">Select Features</li>
        <li class="step step-primary text-primary">Upload Document</li>
        <li class="step">View Results</li>
        </ul>
      <p className="py-6 text-black">Please upload your application </p>

      <div class="flex justify-center">
      <form method="post" enctype="multipart/form-data">
  <div class="mb-3 w-96">
    <label for="formFileSm" class="form-label inline-block mb-2 text-gray-700"></label>
    <input class="form-control
    block
    w-full
    px-2
    py-1
    text-sm
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    onChange={(e) => {setdoc(e.target.files[0]); console.log(e.target.files[0])}} id="formFileSm" type="file"></input>
  </div>
  </form>
</div>
   
      <Link to="/results"><button className="btn w-60 bg-black" style={{marginTop:'5%'}}>Next</button></Link>
    </div>
  </div>
</div>
<Footer/>
    </div>
  );
}

export default Step3;
