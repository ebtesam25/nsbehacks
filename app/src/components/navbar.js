export default function Navbar() {
    return(
        <>
<div class="navbar bg-amber-900">
  <div class="navbar-start">
    
    <img src={require('../assets/logo.png')} className="object-scale-down w-40" width="150px" height="auto"></img>
  </div>
 
  
  <div class="navbar-end self-end">
    <a class="btn">Login</a>
  </div>
</div>
</>)}