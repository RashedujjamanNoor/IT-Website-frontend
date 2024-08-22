import { useState } from "react";
import { useAuth } from "../store/auth";

const defaultContact = {
  username: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [contact, setContact] = useState(defaultContact);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/form/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });

    if (response.ok) {
      alert("message send successfully");
      setContact(defaultContact);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="text-white mx-[5%] md:mx-[10%] md:grid grid-cols-2 justify-items-center items-center my-8">
        <div className="my-12">
          <h1 className=" text-center font-bold text-2xl mb-8">
            <span className="border-b-2 border-blue-700 ">Conta</span>ct Us
          </h1>
          <img src="contact.svg" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-2">
              <label htmlFor="username" className="text-lg font-semibold mb-1">
                Username
              </label>
              <input
                value={contact.username}
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
                value={contact.email}
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
                value={contact.message}
                onChange={handleInput}
                autoComplete="off"
                name="message"
                id=""
                className="w-80 h-44 rounded-md py-1 px-2 text-sm font-semibold text-gray-800 outline-none focus:border-blue-500 border-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 rounded-lg py-1 text-lg font-bold my-4 px-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57500.541308570035!2d88.88611850525591!3d25.744661286017777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3518691a6804f%3A0x6032167fc00bc3d3!2sSaidpur%20Airport!5e0!3m2!1sen!2sbd!4v1724079571197!5m2!1sen!2sbd"
          className="w-screen h-64 rounded-md"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
