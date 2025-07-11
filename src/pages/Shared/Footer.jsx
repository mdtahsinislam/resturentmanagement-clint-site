import React from 'react';

const Footer = () => {
    return (
        <div>
                <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  
  <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<nav>
    <div className="grid grid-flow-col gap-4">
      {/* <!-- Facebook --> */}
<a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://i.imghippo.com/files/kmNk9143cdU.png" alt="Facebook" width="40" />
</a>

{/* <!-- Instagram --> */}
<a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://i.imghippo.com/files/pJw9544BD.png" alt="Instagram" width="40" />
</a>

{/* <!-- X (Twitter) --> */}
<a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
  <img className='bg-white ' src="https://i.imghippo.com/files/JOc7583sY.png" alt="Twitter/X" width="40" />
</a>
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
  <img className="w-10 rounded-full" src="https://i.imghippo.com/files/hAaz1192FaQ.png" alt="GitHub" />
</a>


    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;