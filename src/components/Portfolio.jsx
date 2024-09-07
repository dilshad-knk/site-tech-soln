import React from 'react';
import './Portfolio.css'
function Portfolio() {
  const portfolioItems = [
    { title: 'E-commerce Site' },
    { title: 'Corporate Website' },
    { title: 'Portfolio Design' },
  ];

  return (
    <section id="portfolio" className="py-20  bg-black-dots relative">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Work</h2>
        <div className="flex flex-col mx-9 lg:mx-80  gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white hover:ring-4 hover:ring-emerald-700 p-10 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mt-4 ">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div class="custom-shape-divider-top-1725691990">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="custom-shape-divider-bottom-1725690194">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}

export default Portfolio;
