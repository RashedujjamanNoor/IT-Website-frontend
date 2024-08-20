const About = () => {
  return (
    <div className="mx-[5%] my-6 h-screen overflow-x-hidden md:mx-[10%]">
      <div className=" md:flex md:justify-between md:items-center">
        <div className="order-2 mb-8 md:p-20">
          <img src="hero.svg" alt="" />
        </div>
        <div className="text-white order-1 md:w-1/2">
          <h2 className="font-semibold text-gray-200">
            We are the World Best IT Company
          </h2>
          <h1 className="font-bold text-4xl mt-1 mb-3">Why Choose Us?</h1>
          <div className="flex flex-col justify-center  text-justify gap-3">
            <p className="text-sm  text-gray-200">
              Innovative Solutions: We deliver cutting-edge software that drives
              your business forward.
            </p>
            <p className="text-sm  text-gray-200">
              Expert Team: Our skilled developers and engineers bring years of
              industry experience to every project.
            </p>
            <p className="text-sm  text-gray-200">
              Quality Assurance: We prioritize rigorous testing to ensure
              reliable, high-performance software.
            </p>
            <p className="text-sm  text-gray-200">
              Exceptional Support: We offer ongoing support and maintenance to
              keep your systems running smoothly
            </p>
            <p className="text-sm  text-gray-200">
              Competitive Pricing: Get top-quality software without breaking the
              bank.
            </p>
          </div>
          <button className="bg-blue-700 px-2 py-1 font-bold text-sm rounded-md mt-6 mr-5">
            Connect Now
          </button>
          <button className="bg-transparent border-blue-500 list-inside border-2 px-2 py-1 font-bold text-sm rounded-md mt-6 mr-5">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
