import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";

const Landing = () => {
   const navigate = useNavigate();
   const [products, setProducts] = useState([]);

   useEffect(() => {
   api.get("/products")
      .then((res) => {
         setProducts(res.data.data);
      })
      .catch((err) => console.log(err));
   }, []);

   return (
   <>
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
                     Discover premium fashion crafted for confidence,
                     comfort and timeless elegance.
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
         <section
         id="categories"
         className="py-24 bg-gray-50"
         >
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
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
               <p className="uppercase tracking-[4px] text-green-700 font-semibold">
               Featured
               </p>
               <h2 className="text-5xl font-bold mt-3">
               Best Sellers
               </h2>
               <p className="text-gray-500 mt-4">
               Discover our most popular fashion pieces.
               </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {products.slice(0,4).map((product)=>(
               <ProductCard
                  key={product.id}
                  product={product}
               />
               ))}
            </div>
            <div className="flex justify-center mt-12">
               <button
               onClick={() => navigate("/products")}
               className="bg-green-700 text-white px-8 py-4 rounded-xl hover:bg-green-800 duration-300"
               >
               View All Products
               </button>
            </div>
         </div>
      </section>
      <section
         id="about"
         className="py-24 bg-white"
      >
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
            We believe fashion should be simple, elegant, and accessible.
            Our collections combine premium quality with timeless designs,
            helping you express your personality every day.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
               <h3 className="text-4xl font-bold text-green-700">
                  10K+
               </h3>
               <p className="text-gray-500 mt-2">
                  Happy Customers
               </p>
            </div>
            <div>
               <h3 className="text-4xl font-bold text-green-700">
                  250+
               </h3>
               <p className="text-gray-500 mt-2">
                  Premium Products
               </p>
            </div>
            </div>
         </div>
      </div>
   </section>
   <section
      id="contact"
      className="py-24 bg-gray-50"
   >
      <div className="max-w-4xl mx-auto px-6">
         <div className="text-center mb-14">
            <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Contact
            </p>
            <h2 className="text-5xl font-bold">
            Get In Touch
            </h2>
            <p className="text-gray-500 mt-4">
            We'd love to hear from you.
            </p>
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
               <button
                  className="bg-green-700 text-white px-10 py-4 rounded-xl hover:bg-green-800 duration-300 font-semibold"
               >
                  Send Message
               </button>
            </div>
         </form>
      </div>
   </section>
   <footer className="bg-green-900 text-white py-5 mt-0">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
         <div>
            <h2 className="text-3xl font-bold">
            Clothes Shop
            </h2>
            <p className="text-green-100 mt-3 leading-7">
            Premium fashion with timeless elegance,
            quality craftsmanship and modern style.
            </p>
         </div>
         <div>
            <h3 className="text-xl font-semibold mb-4">
            Quick Links
            </h3>
            <ul className="space-y-2 text-green-100">
               <li><a href="#">Home</a></li>
               <li><a href="#categories">Categories</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#contact">Contact</a></li>
            </ul>
         </div>
         <div>
            <h3 className="text-xl font-semibold mb-4">
            Contact
            </h3>
            <p className="text-green-100">
            Cairo, Egypt
            </p>
            <p className="text-green-100 mt-2">
            support@clothesshop.com
            </p>
            <p className="text-green-100 mt-2">
            +20 100 000 0000
            </p>
         </div>
      </div>
      <div className="border-t border-green-700 mt-10 pt-4 text-center text-green-200">
         © 2026 Clothes Shop. All rights reserved.
      </div>
   </footer>
   </>
   );
};

export default Landing;