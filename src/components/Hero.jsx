import React from 'react';
import './Hero.css'

function Hero() {
  return (
    <section className="h-screen  bg-black-dots  flex items-center justify-center relative p-10 ">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-6">We Build Amazing Websites</h1>
        <p className="text-lg mb-6">Our team crafts stunning web experiences to elevate your brand.</p>
        <a

          href="https://wa.me/9843014221?text=Hello!%20I%20would%20like%20to%20contact%20you."
          target="_blank"
          rel="noopener noreferrer"

          className="bg-white animate-pulse text-white bg-brand px-6 py-3 rounded-md">Get in Touch</a>

      </div>
      <div class="custom-shape-divider-bottom-1725690194">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
