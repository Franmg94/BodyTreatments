import { TESTIMONIALS } from "../constants/index";

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full mt-20 py-16 tracking-tighter">
      <h2 className="title-section md:title-section--lg text-center">
        What People Say
      </h2>
      <div className="mx-auto max-w-3xl">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={index}
            className="mx-4 mb-8 flex flex-col items-center rounded-lg border border-dotted border-gray-600 p-6 md:flex-row"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mb-4 mr-6 h-16 w-16 rounded-full object-cover md:mb-0"
            />
            <div>
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
