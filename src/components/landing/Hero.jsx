import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (

      <section className="bg-white pt-3">
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 pt-20 gap-16">
            <div>
              <p className="uppercase tracking-[5px] text-green-700 font-semibold">
                New Collection 2026
              </p>
              <h1 className="text-6xl lg:text-7xl font-bold text-green-900 mt-5 leading-tight">
                Elevate
                <br />
                Your Style
              </h1>
              <p className="text-gray-500 text-lg mt-7 leading-8 max-w-lg">
                Discover premium fashion crafted for confidence, comfort and
                timeless elegance.
              </p>
              <div className="flex gap-5 mt-10">
                <button
                  onClick={() => navigate("/products")}
                  className="bg-green-800 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-900 transition duration-300"
                >
                  Shop Now
                </button>
                <button className="border-2 border-green-800 font-bold text-green-800 px-8 py-4 rounded-xl hover:bg-green-800 hover:text-white transition duration-300">
                  Explore
                </button>
              </div>
              <section className="py-20 bg-green-50 p-10 mt-10">
                <div className="max-w-4xl mx-auto px-6 text-center">
                  <p className="text-6xl text-green-700 mb-6"></p>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-relaxed">
                    Style is a way to say
                    <span className="text-green-700"> who you are </span>
                    without having to speak.
                  </h2>
                  <p className="mt-8 text-gray-600 text-lg italic">
                    — Rachel Zoe
                  </p>
                </div>
              </section>
            </div>
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-52 h-52 rounded-full bg-green-100 blur-3xl"></div>
              <img
                src="https://i.pinimg.com/736x/8c/23/e1/8c23e1d39923de1c59a8493e4fda720c.jpg?w=600"
                alt="Fashion"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
