const Categories = () => {
  return (
    <section id="categories" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-green-700 uppercase tracking-[4px] font-semibold">
            Categories
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Shop By Category
          </h2>
          <p className="text-gray-500 mt-4">
            Find your perfect outfit from our premium collections.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl duration-500">
            <img
              src="https://img.staticdj.com/7bd4abb3e0f802285c7e5e16550012ce_2056x.png?w=600"
              className="h-80 w-full object-cover group-hover:scale-110 duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">Women</h3>
            </div>
          </div>
          <div className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl duration-500">
            <img
              src="https://i.pinimg.com/736x/90/62/16/906216615d4a20534b679eb751229ff2.jpg?w=600"
              className="h-80 w-full object-cover group-hover:scale-110 duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">Men</h3>
            </div>
          </div>
          <div className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl duration-500">
            <img
              src="https://i.pinimg.com/736x/fa/f0/26/faf0266bafea35b9d7dbdcc429f4e8c1.jpg?w=600"
              className="h-80 w-full object-cover group-hover:scale-110 duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">Shoes</h3>
            </div>
          </div>
          <div className="group bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl duration-500">
            <img
              src="https://i.pinimg.com/736x/6c/57/6d/6c576d44505493d0e0e049712cfbc161.jpg?w=600"
              className="h-80 w-full object-cover group-hover:scale-110 duration-500"
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold">Accessories</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
