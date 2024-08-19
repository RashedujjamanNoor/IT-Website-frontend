import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  console.log(contact);

  return (
    <div>
      <div className="text-white mx-[5%] md:mx-[10%] md:grid grid-cols-2 justify-items-center items-center my-8">
        <div className="my-12">
          <h1 className=" text-center font-bold text-2xl mb-8">
            <span className="border-b-2 border-blue-700 ">Conta</span>ct Us
          </h1>
          <img src="contact.svg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <form action="">
            <div className="flex flex-col my-2">
              <label htmlFor="username" className="text-lg font-semibold mb-1">
                Username
              </label>
              <input
                onChange={handleInput}
                type="text"
                placeholder="Enter your name"
                name="username"
                className="w-80 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
              />
            </div>
            <div className="flex flex-col mb-2">
              <label htmlFor="email" className="text-lg font-semibold mb-1">
                Email
              </label>
              <input
                onChange={handleInput}
                type="email"
                placeholder="Enter your email"
                name="email"
                className="w-80 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold mb-1">
                Message
              </label>
              <textarea
                onChange={handleInput}
                name="message"
                id=""
                className="w-80 h-44 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
