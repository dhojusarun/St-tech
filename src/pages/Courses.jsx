import React from "react";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import Uiux from "../assets/Homeimage/Uiux.png";
import Nancy from "../assets/Homeimage/Nancy.png";
import Graphics from "../assets/Homeimage/Graphics.png";
import Datascience from "../assets/Homeimage/Datascience.png";
import Henry from "../assets/Homeimage/Henry.png";
import Mern from "../assets/Homeimage/Mern.png";
import Charlotte from "../assets/Homeimage/Charlotte.png";
import Web from "../assets/Homeimage/Web.png";
import Jordan from "../assets/Homeimage/Jordan.png";
import Project from "../assets/Homeimage/Project.png";
import Digital from "../assets/Homeimage/Digital.png";
import Ethan from "../assets/Homeimage/Ethan.png";
import Business from "../assets/Homeimage/Business.png";
import Brand from "../assets/Homeimage/Brand.png";
import Public from "../assets/Homeimage/Public.png";
import Modeling from "../assets/Homeimage/Modeling.png";
import { NavLink } from "react-router-dom";
import { useCartWishlist } from "../context/CartWishlistContext";

function Courses() {
  const { addToCart, addToWishlist, wishlist, removeFromWishlist } = useCartWishlist();
  const isWish = (id) => wishlist.some((i) => i.id === id);

  return (
    <>
      <div className="bg-gray-200">
        <h2 className="font-medium text-black p-6 ml-25  text-2xl">Our Courses</h2>
        <div className="flex justify-around p-4">
          {/* Category Sidebar */}
          <div className="bg-white w-55 h-80 rounded-lg shadow-md p-5 ml-28">
            <h4 className="font-semibold border-b-2 border-gray-200 pb-1 mb-2 text-lg">Category</h4>
            <ul className="list-none p-0 m-0">
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> All Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> Free Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> IT Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> Designing Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> Marketing Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> Business Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> Public Development Courses</li>
              <li className="flex gap-1 text-sm text-gray-800 mb-2"><input type="checkbox" /> Creative Arts Courses</li>
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-20 mx-auto ">
            {/* Card 1 */}
            <div className="bg-white rounded-xl w-[250px] shadow p-4">
              <img src={Uiux} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">UI/UX Design | 2.5 Months</h3>
              <p className="text-sm text-gray-500 flex mt-2 items-center gap-2">
                <img src={Nancy} alt="" className="rounded-full object-cover w-8 h-8" />By Nancy White
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'uiux', title: 'UI/UX Design', price: 10000, img: Uiux })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('uiux')
                      ? removeFromWishlist('uiux')
                      : addToWishlist({ id: 'uiux', title: 'UI/UX Design', price: 10000})
                  }
                  aria-label="wishlist-uiux"
                >
                  <FaHeart
                    className={`${isWish('uiux') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/nancycourse">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 2 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Graphics} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Graphic Design | 2.5 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Nancy} alt="" className="rounded-full object-cover w-8 h-8" />By Nancy White
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'graphic', title: 'Graphic Design', price: 10000, img: Graphics })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('graphic')
                      ? removeFromWishlist('graphic')
                      : addToWishlist({ id: 'graphic', title: 'Graphic Design', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('graphic') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/nancygraphic">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 3 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Datascience} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Data Science | 3 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Henry} alt="" className="rounded-full object-cover w-8 h-8" />By Henry Smith
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'datascience', title: 'Data Science', price: 10000, img: Datascience })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('datascience')
                      ? removeFromWishlist('datascience')
                      : addToWishlist({ id: 'datascience', title: 'Data Science', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('datascience') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/henrydata">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 4 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Mern} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Mern Stack Development | <br /> 3 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Henry} alt="" className="rounded-full object-cover w-8 h-8" />By Henry Smith
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'mern', title: 'Mern Stack Development', price: 10000, img: Mern })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('mern')
                      ? removeFromWishlist('mern')
                      : addToWishlist({ id: 'mern', title: 'Mern Stack Development', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('mern') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/henrymern">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 5 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Web} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Web Development | 2.5 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Charlotte} alt="" className="rounded-full object-cover w-8 h-8" />By Charlotte
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'web', title: 'Web Development', price: 10000, img: Web })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('web')
                      ? removeFromWishlist('web')
                      : addToWishlist({ id: 'web', title: 'Web Development', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('web') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/charweb">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 6 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Project} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Project Management | 2.5 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Jordan} alt="" className="rounded-full object-cover w-8 h-8" />By Jordan
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'project', title: 'Project Management', price: 10000, img: Project })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('project')
                      ? removeFromWishlist('project')
                      : addToWishlist({ id: 'project', title: 'Project Management', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('project') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/jordanproject">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 7 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Digital} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Digital Marketing | 3 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Nancy} alt="" className="rounded-full object-cover w-8 h-8" />By Nancy White
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'digital', title: 'Digital Marketing', price: 10000, img: Digital })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('digital')
                      ? removeFromWishlist('digital')
                      : addToWishlist({ id: 'digital', title: 'Digital Marketing', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('digital') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/nancydigital">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 8 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Business} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Business Analytics | 3 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Ethan} alt="" className="rounded-full object-cover w-8 h-8" />By Ethan
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'business', title: 'Business Analytics', price: 10000, img: Business })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('business')
                      ? removeFromWishlist('business')
                      : addToWishlist({ id: 'business', title: 'Business Analytics', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('business') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/ethanbusiness">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 9 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Brand} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Free</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Brand Management | 1.5 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Charlotte} alt="" className="rounded-full object-cover w-8 h-8" />By Charlotte
              </p>
              <div className="flex items-center justify-between mb-4">
                <button className="bg-yellow-300 w-30 justify-center mt-3 py-1 px-2 gap-2 rounded-xl flex text-[#003372]">
                  Free
                </button>
                <button
                  onClick={() =>
                    isWish('brand')
                      ? removeFromWishlist('brand')
                      : addToWishlist({ id: 'brand', title: 'Brand Management', price: 0 })
                  }
                >
                  <FaHeart
                    className={`${isWish('brand') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/charbrand">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 10 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Public} className="w-full  h-[140px] object-cover" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Free</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">Public Speaking & Presentation Skills | 1 Month</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Jordan} alt="" className="rounded-full object-cover w-8 h-8" />By Jordan
              </p>
              <div className="flex items-center justify-between mb-4">
                <button className="bg-yellow-300 w-30 justify-center mt-3 py-1 px-2 gap-2 rounded-xl flex text-[#003372]">
                  Free
                </button>
                <button
                  onClick={() =>
                    isWish('public')
                      ? removeFromWishlist('public')
                      : addToWishlist({ id: 'public', title: 'Public Speaking', price: 0 })
                  }
                >
                  <FaHeart
                    className={`${isWish('public') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/jordanpublic">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

            {/* Card 11 */}
            <div className="bg-white w-[250px] rounded-xl shadow p-4">
              <img src={Modeling} className="w-full h-[140px] object-contain" />
              <div className="flex justify-between mt-2">
                <span className="bg-yellow-300 px-2 py-1 text-sm rounded-full">Rs. 10,000</span>
                <span className="text-xs text-gray-400">REVIEWS</span>
              </div>
              <h3 className="font-semibold mt-4">3D Modeling and Animation | 3 Months</h3>
              <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                <img src={Ethan} alt="" className="rounded-full object-cover w-8 h-8" />By Ethan
              </p>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() =>
                    addToCart({ id: 'modeling', title: '3D Modeling and Animation', price: 10000, img: Modeling })
                  }
                  className="bg-yellow-300 w-30 items-center mt-3 py-1.5 px-2 gap-2 rounded-xl flex"
                >
                  <FaCartShopping className="text-[#003372] size-4" /> Add to cart
                </button>
                <button
                  onClick={() =>
                    isWish('modeling')
                      ? removeFromWishlist('modeling')
                      : addToWishlist({ id: 'modeling', title: '3D Modeling and Animation', price: 10000 })
                  }
                >
                  <FaHeart
                    className={`${isWish('modeling') ? 'text-red-500' : 'text-gray-400'} size-5 mt-2`}
                  />
                </button>
              </div>
              <hr />
              <NavLink to="/ethan3d">
                <button className="border-2 border-[#003372] text-[#003372] text-medium w-40 mt-2 ml-7 py-1  rounded">
                  View Course
                </button>
              </NavLink>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
