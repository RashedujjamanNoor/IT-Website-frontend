import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const Error = () => {
  return (
    <div className="text-4xl text-gray-400 font-bold text-center flex flex-col justify-center items-center w-screen h-screen">
      <div>
        <img src="404.svg" alt="" className="w-96 mb-4" />
        <h2>404</h2>
        <h1>Page Not Found</h1>
        <Link to="/" className="mt-3">
          <button className="bg-blue-500 text-gray-200 rounded-lg py-1 text-lg font-bold my-4 px-2 flex justify-center items-center gap-2 hover:bg-blue-800 duration-100">
            <IoArrowBackCircle />
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
