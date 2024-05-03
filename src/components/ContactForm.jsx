import React,{useState,useEffect,useContext} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../components/ThemeProvider.jsx";





const ContactForm = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  useEffect(() => emailjs.init("fbnwi2wcipEDkS1-g"), []);

  const [formData,setFormData] = useState({
    name: "",
    email:"",
    subject: "",
    message: "",
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    let toast_id;
    e.preventDefault();
    try {
      const serviceId = "service_g1fvcr7";
      const templateId = "template_59gltjm";

      
      toast_id = toast.loading("Please wait...", {
        position: "bottom-center",
        isLoading: true,
        theme: darkMode? "dark" : "light", // Show loading state
      });
  
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });
  
      toast.update(toast_id, {
        render: "Message sent successfully!",
        type: "success",
        position: "bottom-center",
        isLoading: false, // Hide loading state
        autoClose: 2000,
        theme: darkMode? "dark" : "light", // Show loading state
      });
  
      // Reset form fields after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
        subject: "",
      });
    } catch (error) {
      console.error("Error sending email: ", error);
      toast.update(toast_id, {
        render: `Message not sent! ${error.message}`, // Show error message
        type: "error",
        position: "bottom-center",
        isLoading: false, // Hide loading state
        autoClose: 2000,
        theme: darkMode? "dark" : "light", // Show loading state

      });
    }
  };


  return (
    <div className="flex flex-col w-full my-12 lg:mr-16 ">
      <form onSubmit={handleSubmit} action="">
      <div className="flex gap-8 my-3 flex-col md:flex-row">
        <div className="flex flex-col gap-2 w-full ">
          <div>
            <span className="uppercase font-SagarFont font-semibold text-md pl-5 text-black dark:text-white ">
              Your full name
            </span>
            <span className="font-SagarFont font-bold text-[#29a587]"> *</span>
          </div>
          <div>
            <input
              className="text-black dark:text-white font-SagarFont p-4 rounded-full w-full outline outline-1 bg-white dark:bg-[#1d222a] outline-black dark:outline-white"
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              required
              
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div>
            <span className="text-black dark:text-white uppercase font-SagarFont font-semibold text-md pl-5">
              Your Email Address
            </span>
            <span className="font-SagarFont font-bold text-[#29a587]"> *</span>
          </div>
          <div>
            <input
              className="text-black dark:text-white font-SagarFont p-4 rounded-full w-full outline outline-1 outline-black dark:bg-[#1d222a] bg-white dark:outline-white"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full my-3">
        <div>
          <span className="uppercase text-black dark:text-white font-SagarFont font-semibold text-md pl-5">
            Your Subject
          </span>
          <span className="font-SagarFont font-bold text-[#29a587]"> *</span>
        </div>
        <div>
          <input
            className="dark:text-white text-black font-SagarFont p-4 rounded-full w-full outline outline-1 bg-white dark:bg-[#1d222a] outline-black dark:outline-white"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full my-6">
        <div>
          <span className="uppercase text-black dark:text-white font-SagarFont font-semibold text-md pl-5">
            Your Message
          </span>
          <span className="font-SagarFont font-bold text-[#29a587]"> *</span>
        </div>
        <div>
          <textarea
            className="dark:text-white h-32 text-black font-SagarFont p-4 rounded-2xl w-full outline outline-1 bg-white dark:bg-[#1d222a] outline-black dark:outline-white"
            type="text"
            required
            value={formData.message}
            onChange={handleChange}
            name="message"
          />
        </div>
      </div>

      {/* for button  */}

      <div className="w-full flex justify-end items-center my-3">
        <div className="group relative w-[80%] lg:w-1/2 flex justify-center items-center">
          <button type="submit" className="w-full flex justify-center items-center uppercase font-SagarFont border-[2px] rounded-full border-black dark:border-white py-3 px-10 font-semibold text-sm z-10 group-hover:text-white dark:text-white dark:group-hover:text-black transition ease-in-out duration-500 group-hover:cursor-pointer active:scale-[95%]">
            send message
          </button>
          <span className="absolute w-full bg-[#29a587] rounded-full py-[22px] px-[93px] invisible group-hover:visible transform scale-x-0 transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-active:scale-[95%]"></span>
        </div>
      </div>
      </form>
    </div>
  );
};

export default ContactForm;
