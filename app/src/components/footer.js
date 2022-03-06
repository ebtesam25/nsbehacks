export default function Footer () {
    return(
    <footer class="footer p-10 bg-amber-900 text-base-content">
  <div>
    <img src={require('../assets/logo.png')} width="100px"></img>
  </div> 
  <div>
    <span class="footer-title">Product</span> 
    <a class="link link-hover">Equalize</a> 
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div>
</footer>
    )
}