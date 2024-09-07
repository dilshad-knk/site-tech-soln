import React from 'react';

function Services() {
  const services = [
    { title: 'Web Design', description: 'Custom, responsive websites tailored to your needs.' },
    { title: 'SEO Optimization', description: 'Increase traffic and improve your website’s ranking.' },
    { title: 'OnlineBranding', description: 'Build a brand identity that resonates with your audience.' },
  ];

  return (
    <section id="services" className="py-12 bg-gradient-to-t from-emerald-100 via-emerald-600 to-emerald-800 relative ">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Services</h2>
        <div className="flex flex-col gap-8 mx-9 md:mx-48 lg:mx-80 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-20 hover:bg-black-dots hover:text-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
