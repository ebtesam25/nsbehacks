import Features from '../components/features'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../index.css'

function Step4() {
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
        <li class="step step-primary text-primary">View Results</li>
        </ul>
      <p className="py-6 text-black">View anonymized document </p>

      <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th>Feature</th>
        <th>Original</th>
        <th>Anonymized</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name</td>
        <td>Guang Zhou</td>
        <td>John Doe</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td>Female</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>Baltimore</td>
        <td>McLean</td>
      </tr>
    </tbody>
  </table>
</div>
   
      <button className="btn w-60 bg-black" style={{marginTop:'5%'}}>Approve</button>
    </div>
  </div>
</div>
<Footer/>
    </div>
  );
}

export default Step4;
