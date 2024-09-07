import React from 'react';

function Testimonials() {
  const testimonials = [
    { name: 'John Doe', text: 'They transformed our website into a lead generation machine!' },
    { name: 'Sadhik', text: 'Highly professional and great to work with!' },
  ];

  return (
    <section id="testimonials" className="py-12 bg-gradient-to-t from-emerald-100 via-emerald-600 to-emerald-800 relative">
      <div className="mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Testimonials</h2>
        <div className="space-y-8 mx-9 lg:mx-80 mb-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic">"{testimonial.text}"</p>
              <p className="font-semibold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
        <div class="custom-shape-divider-bottom-1725690194">

      </div>
       
      </div>
    </section>
  );
}

export default Testimonials;
