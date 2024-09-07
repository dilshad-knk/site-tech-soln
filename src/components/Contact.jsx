import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

function Contact() {
  return (
    <section id="contact" className="py-12 px-9 lg:px-80 bg-black-dots relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Contact Us</h2>


        <div className="text-white mb-8">
          <p>Techish Solution</p>
          <p>Edakkara</p>
          <p>Nilambur</p>
          <p>Malappuram</p>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/9843014221?text=Hello!%20I%20would%20like%20to%20contact%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-400 hover:font-bold "
          >
            <FaWhatsapp className="mr-2 text-3xl" /> 
            Contact us on WhatsApp
          </a>
        </div>
      </div>

      <div className="custom-shape-divider-top-1725691990">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Contact;
