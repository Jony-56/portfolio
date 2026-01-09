import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "e1c2953b-55a2-48ee-a4fd-500a6a78fb7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      setResult("Something went wrong. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-14 px-6 md:px-12 bg-gray-900 text-gray-300 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-20 pointer-events-none"></div>

      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4 relative z-10">
        Get in Touch
      </h2>

      <p className="text-gray-400 text-center mb-8 relative z-10 max-w-xl mx-auto text-sm">
        Let’s discuss projects, ideas, or opportunities.
      </p>

      <div className="relative z-10 max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl space-y-3"
        >
          <input type="hidden" name="subject" value="New Contact Message" />
          <input type="hidden" name="from_name" value="Portfolio Website" />

          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none transition"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none transition"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="3"
              name="message"
              required
              className="w-full px-3 py-2 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-primary outline-none transition"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-2 bg-gradient-to-r from-orange-500 to-primary py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition"
          >
            Send Message
          </button>

          {result && (
            <p className="text-center text-sm text-green-400 mt-2">
              {result}
            </p>
          )}
        </form>

        {/* CONTACT INFO */}
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center space-y-3">
          <h3 className="text-xl font-bold text-white">Contact Info</h3>
          <p className="text-gray-400 text-sm text-center">
            Reach me via social platforms
          </p>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/jony-56"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/toriquil-islam-jony/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:toriquilislam56@gmail.com"
              className="hover:text-red-400 hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
