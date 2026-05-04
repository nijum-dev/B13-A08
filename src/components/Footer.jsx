import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#104216f6] text-base-content p-10">
  <aside>
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      className="fill-current">    
    </svg>
   
  </aside>
    <nav>
      <h2 className='text-2xl text-amber-50 font-bold'><span className='text-3xl'>🐄</span>Qurbani<span className='text-[#bb8c29]'>Hat</span></h2>
     <div> <p className='text-gray-400 text-sm'>Bangladesh's most trusted platform for finding and <br /> booking the finest Qurbani livestock. We connect <br /> buyers with verified farmers.</p>
</div>
    </nav>
  <nav>
    <h6 className="footer-title text-[#e1b556] font-bold">Quick Links</h6>
    <a className="link link-hover text-gray-400">Home</a>
    <a className="link link-hover text-gray-400">All Animals</a>
    <a className="link link-hover text-gray-400">Login</a>
    <a className="link link-hover text-gray-400">Register</a>
  </nav>
  <nav>
    <h6 className="footer-title text-[#e1b556] font-bold">Categories</h6>
    <a className="link link-hover text-gray-400">Cows</a>
    <a className="link link-hover text-gray-400">Goats</a>
    <a className="link link-hover text-gray-400">Large Animals</a>
    <a className="link link-hover text-gray-400">Small Animals</a>
  </nav>
  <nav>
    <h6 className="footer-title text-[#e1b556] font-bold">Contact Us</h6>
    <a className="link link-hover text-gray-400">Dhaka, Bangladesh</a>
    <a className="link link-hover text-gray-400">+880 1700-000000</a>
    <a className="link link-hover text-gray-400">Sat–Thu: 9AM–6PM</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;