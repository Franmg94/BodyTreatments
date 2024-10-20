import { TREATMENTS } from "../constants";

const Treatments = () => {
  return (
    <section id="treatments">
      <div className="container mx-auto p-5 max-w-screen-xl">
        <div>
          {TREATMENTS.map((treatment, index) => (
            <div key={index}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center mb-16 gap-20`}
              >
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                  <h3 className="text-lg mb-2 uppercase font-raleway">
                    {treatment.subTitle}
                  </h3>
                  <h2 className="text-5xl font-abril uppercase mb-10">
                    {treatment.treatmentName}
                  </h2>
                  <p className="font-heebo mb-5">{treatment.description}</p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={treatment.image}
                    alt="Treatment Image"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
              <hr className=" mb-5 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
