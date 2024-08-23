import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <div>
        <div className="mx-[5%] text-white md:mx-[10%] ">
          <h1 className="text-center text-white font-bold text-2xl md:text-4xl border-gray-200 border-b-2 my-2">
            Services
          </h1>
          <div className=" flex flex-col justify-center items-center md:grid grid-cols-3 justify-items-center">
            {services &&
              services.data.map((item, index) => (
                <div
                  key={index}
                  className="w-96 p-4 border-gray-600 border-2 my-3 rounded-md shadow-md bg-slate-900"
                >
                  <img src="home2.svg" alt="" className="w-96" />
                  <div className="flex justify-between items-center mt-4">
                    <p>
                      <span className="font-semibold">Provider:</span>{" "}
                      {item.provider}
                    </p>
                    <h1 className="font-semibold">Price: ${item.price}</h1>
                  </div>
                  <h1 className="my-3">
                    <span className="font-semibold">Service: </span>
                    {item.service}
                  </h1>
                  <p className="text-sm">
                    <span className="font-semibold">Description:</span>{" "}
                    {item.description.substring(0, 65)}...
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
