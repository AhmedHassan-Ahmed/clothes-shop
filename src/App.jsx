export default function App() {
  const products = [
    {
      id: 1,
      name: "Classic Hoodie",
      price: "$49.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: "$79.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 3,
      name: "White Sneakers",
      price: "$59.99",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    },
    {
      id: 4,
      name: "Casual T-Shirt",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-indigo-600">Clothes Shop</h1>

          <ul className="hidden gap-8 text-gray-700 md:flex">
            <li className="cursor-pointer hover:text-indigo-600">Home</li>
            <li className="cursor-pointer hover:text-indigo-600">Shop</li>
            <li className="cursor-pointer hover:text-indigo-600">About</li>
            <li className="cursor-pointer hover:text-indigo-600">Contact</li>
          </ul>

          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
            Cart
          </button>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20 text-center text-white">
        <h2 className="text-5xl font-bold">Discover Your Style</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
          Shop the latest fashion trends with premium quality and unbeatable
          prices.
        </p>

        <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:scale-105">
          Shop Now
        </button>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h3 className="mb-10 text-center text-3xl font-bold">
          Featured Products
        </h3>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-5">
                <h4 className="text-xl font-semibold">{product.name}</h4>

                <p className="mt-2 text-lg font-bold text-indigo-600">
                  {product.price}
                </p>

                <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-white transition hover:bg-indigo-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-900 py-6 text-center text-gray-400">
        © 2026 Clothes Shop. All rights reserved.
      </footer>
    </div>
  );
}
