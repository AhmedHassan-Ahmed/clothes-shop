const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <img
          src="https://i.pinimg.com/1200x/22/a3/4f/22a34f669b9420a178fe6d809f660764.jpg?w=500"
          alt="About"
          className="rounded-3xl shadow-xl"
        />
        <div>
          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            About Us
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mt-4">
            Fashion Designed
            <br />
            For Everyone
          </h2>
          <p className="mt-6 text-gray-600 leading-8">
            We believe fashion should be simple, elegant, and accessible. Our
            collections combine premium quality with timeless designs, helping
            you express your personality every day.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <h3 className="text-4xl font-bold text-green-700">10K+</h3>
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-700">250+</h3>
              <p className="text-gray-500 mt-2">Premium Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
