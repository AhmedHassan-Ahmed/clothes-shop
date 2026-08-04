const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Contact
          </p>
          <h2 className="text-5xl font-bold">Get In Touch</h2>
          <p className="text-gray-500 mt-4">We'd love to hear from you.</p>
        </div>
        <form className="bg-white p-10 rounded-3xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-xl p-4 outline-none focus:border-green-700"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-xl p-4 outline-none focus:border-green-700"
          />
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border rounded-xl p-4 outline-none resize-none focus:border-green-700"
          />
          <div className="flex justify-center">
            <button className="bg-green-700 text-white px-10 py-4 rounded-xl hover:bg-green-800 duration-300 font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
