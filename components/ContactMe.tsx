import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:aak.aniq.a.khan@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen flex flex-col items-center relative text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 ">
        <h4 className="text-3xl font-semibold text-center">
          I have got just what you need. Lets talk.
        </h4>

        <div className="space-y-12">
          <div className="flex justify-center items-center space-x-5">
            <FaEnvelope className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">aak.aniq.a.khan@gmail.com</p>
          </div>
          <div className="flex justify-center items-center space-x-5">
            <FaLocationDot className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Toronto, ON, Canada</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput ml-2"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-4 px-8 rounded-lg text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
