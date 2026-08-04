import { FiFacebook, FiInstagram, FiTwitter, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">Clothes Shop</h2>

          <p className="mt-5 leading-7 text-green-100">
            Premium fashion with timeless elegance, quality craftsmanship, and
            modern style designed for everyone.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="rounded-full bg-green-800 p-3 transition hover:bg-green-700"
            >
              <FiFacebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-green-800 p-3 transition hover:bg-green-700"
            >
              <FiInstagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full bg-green-800 p-3 transition hover:bg-green-700"
            >
              <FiTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-green-100">
            <li>
              <Link to="/" className="transition hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="transition hover:text-white">
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/create-product"
                className="transition hover:text-white"
              >
                Add Product
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Contact</h3>

          <div className="space-y-3 text-green-100">
            <p>Cairo, Egypt</p>
            <p>support@clothesshop.com</p>
            <p>+20 100 000 0000</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-xl font-semibold">Newsletter</h3>

          <p className="mb-5 text-green-100">
            Subscribe to receive the latest collections and exclusive offers.
          </p>

          <div className="flex overflow-hidden rounded-xl bg-white">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-gray-800 outline-none"
            />

            <button className="bg-green-700 px-5 transition hover:bg-green-800">
              <FiMail size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-green-200 md:flex-row">
          <p>© 2026 Clothes Shop. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white">
              Terms of Service
            </a>

            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
