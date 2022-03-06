import { Link } from 'react-router-dom';
import Features from '../components/features'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../index.css'

function Step2() {
  return (
    <div>
        <Navbar/>
      <div className="hero min-h-screen bg-white">
  <div className="hero-content text-center">
    <div className="">
      <h1 className="text-5xl text-black font-bold">What features would you like to anonymize? </h1>
      <ul class="steps">
        <li class="step step-primary text-primary">Select Type</li>
        <li class="step step-primary text-primary">Select Features</li>
        <li class="step">Upload Document</li>
        <li class="step">View Results</li>
        </ul>
      <p className="py-6 text-black">Please select the relevant factors you wish to anonymize in your document  </p>
      <div style={{display:'-webkit-inline-flex'}} className="gap-x-4 place-self-start">
          <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1508061538535-6effdf9eb6f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3869&q=80" alt="Name tags"/></figure>
  <div class="card-body">
    <h2 class="card-title">Name</h2>
    <p className="text-left">People with non english names tend to experience some form of bias duting selection processes</p>
    <div class="card-actions justify-end">
    <input type="checkbox" class="toggle toggle-lg bg-primary" checked></input>    </div>
  </div>
  </div>
  <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1605818363303-7073f9171de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80" alt="Shoes"/></figure>
  <div class="card-body">
    <h2 class="card-title">Gender</h2>
    <p className="text-left">Gender based bias still exists ; this would anonymizes your gender in the application system</p>
    <div class="card-actions justify-end">
    <input type="checkbox" class="toggle toggle-lg bg-primary" checked></input>
    </div>
  </div>
  </div>
  <div class="card w-96 bg-base-100 shadow-xl">
  <figure><img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80" alt="Shoes"/></figure>
  <div class="card-body">
    <h2 class="card-title">Location</h2>
    <p className="text-left">Location based bias still exists ; this would anonymizes your location in the application system</p>
    <div class="card-actions justify-end">
    <input type="checkbox" class="toggle toggle-lg bg-primary" checked></input>
    </div>
  </div>
  </div>
</div>
      <Link to="/upload"><button className="btn w-60 bg-black" style={{marginTop:'5%'}}>Next</button></Link>
    </div>
  </div>
</div>
<Footer/>
    </div>
  );
}

export default Step2;
