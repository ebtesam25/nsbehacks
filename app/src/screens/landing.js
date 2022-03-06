import { Link } from 'react-router-dom';
import Features from '../components/features'
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import '../index.css'

function Landing() {
  return (
    <div>
        <Navbar/>
      <div className="hero min-h-screen bg-white">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl text-black font-bold">Equal opportunity for Black and Underepresented Communities. </h1>
      <p className="py-6">Your best foot foward, and in the door. Anonymize application details that stop you or your work from getting recognized or approved.</p>
      <Link to="/start"><button className="btn bg-black">Get Started</button></Link>
    </div>
  </div>
</div>
<Features/>
<Footer/>
    </div>
  );
}

export default Landing;
