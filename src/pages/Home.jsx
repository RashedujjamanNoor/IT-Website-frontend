const Home = () => {
  return (
    <div className="mx-[5%] my-16 text-justify md:mx-[10%]">
      <div>
        <div className=" md:flex md:justify-between md:items-center">
          <div className="order-2 mb-8 md:p-20">
            <img src="hero.svg" alt="" />
          </div>
          <div className="text-white order-1 md:w-1/2">
            <h2 className="font-semibold ">We are the World Best IT Company</h2>
            <h1 className="font-bold text-4xl mt-1 mb-3">Welcome to SOFT IT</h1>
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              illum rem sequi ipsa voluptatum nisi nobis quod enim totam magnam,
              ipsum impedit quaerat labore itaque eos commodi harum nemo quidem?
            </p>
            <button className="bg-blue-700 px-2 py-1 font-bold text-sm rounded-md mt-6 mr-5">
              Connect Now
            </button>
            <button className="bg-transparent border-blue-500 list-inside border-2 px-2 py-1 font-bold text-sm rounded-md mt-6 mr-5">
              Learn More
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 my-16 bg-white  text-sm py-4 rounded-lg">
          <div className="border-r-2 border-gray-800 px-1 flex  flex-col justify-center items-center">
            <h1 className="text-xl text-gray-800 font-bold md:text-3xl">50+</h1>
            <p>Companies</p>
          </div>
          <div className="border-r-2 border-gray-800 flex  flex-col justify-center items-center ">
            <h1 className="text-xl text-gray-800 font-bold md:text-3xl">
              10,000+
            </h1>
            <p>Happy Clients</p>
          </div>
          <div className="border-r-2 border-gray-800 px-1 flex  flex-col justify-center items-center">
            <h1 className="text-xl text-gray-800 font-bold md:text-3xl">
              500+
            </h1>
            <p>Developers</p>
          </div>
          <div className="px-1 flex  flex-col justify-center items-center">
            <h1 className="text-xl text-gray-800 font-bold md:text-3xl">
              24/7
            </h1>
            <p>Service</p>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="md:p-20">
            <img src="home2.svg" alt="" />
          </div>
          <div className="text-white mt-10 md:w-1/2">
            <h2 className="font-semibold ">We are the World Best IT Company</h2>
            <h1 className="font-bold text-4xl mt-1 mb-3">Welcome to SOFT IT</h1>
            <p className="text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              illum rem sequi ipsa voluptatum nisi nobis quod enim totam magnam,
              ipsum impedit quaerat labore itaque eos commodi harum nemo quidem?
            </p>
            <button className="bg-blue-700 px-2 py-1 font-bold text-sm rounded-md mt-6 mr-5">
              Connect Now
            </button>
            <button className="bg-transparent border-blue-500 list-inside border-2 px-2 py-1 font-bold text-sm rounded-md mt-6 mr-5">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
