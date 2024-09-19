import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS
import { HomeIcon, InformationCircleIcon, PhoneIcon, UserIcon, UserAddIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/solid';
import productDataJson from '../product.json'; // Import the JSON data
import logo from "./Logo.jpeg"

export default function Product() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');
  const [heartFilled, setHeartFilled] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    // Simulate loading delay and fetch data from JSON
    const timer = setTimeout(() => {
      setProductData(productDataJson);
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setCurrentIndex(0); // Reset the carousel index when color changes
  };

  const handleHeartClick = () => {
    setHeartFilled(!heartFilled);
  };

  const handleAddToCart = () => {
    if (productData) {
      setCartItems([...cartItems, { name: productData.name, price: productData.price }]);
      alert("Added to cart!");
    }
  };

  const handleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  if (isLoading || !productData) {
    return (
      <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Site Name */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Snapcart Logo"
                className="h-10 w-10 mr-3 rounded-full border-2 border-white"
              />
              <span className="text-2xl font-extrabold text-white tracking-wide">
                Snapcart
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="flex items-center text-white text-lg hover:text-blue-200 transition duration-300"
              >
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </a>
              <a
                href="#about"
                className="flex items-center text-white text-lg hover:text-blue-200 transition duration-300"
              >
                <InformationCircleIcon className="h-5 w-5 mr-1" />
                About
              </a>
              <a
                href="#contact"
                className="flex items-center text-white text-lg hover:text-blue-200 transition duration-300"
              >
                <PhoneIcon className="h-5 w-5 mr-1" />
                Contact
              </a>
              <button className="flex items-center text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 px-4 py-2 rounded-full border-2 border-white">
                <UserIcon className="h-5 w-5 mr-1" />
                Login
              </button>
              <button className="flex items-center text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 px-4 py-2 rounded-full border-2 border-white">
                <UserAddIcon className="h-5 w-5 mr-1" />
                Signup
              </button>
              <button onClick={handleCartOpen} className="text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 p-2 rounded-full">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Menu button for mobile devices */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none transition transform hover:scale-110 duration-200"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-wrap justify-center items-center gap-3 px-4 pt-2 pb-3">
            <a
              href="#home"
              className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-3 py-2 rounded-md"
            >
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </a>
            <a
              href="#about"
              className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-3 py-2 rounded-md"
            >
              <InformationCircleIcon className="h-5 w-5 mr-1" />
              About
            </a>
            <a
              href="#contact"
              className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-3 py-2 rounded-md"
            >
              <PhoneIcon className="h-5 w-5 mr-1" />
              Contact
            </a>
            <button className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2 rounded-full border-2 border-white">
              <UserIcon className="h-5 w-5 mr-1" />
              Login
            </button>
            <button className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2 rounded-full border-2 border-white">
              <UserAddIcon className="h-5 w-5 mr-1" />
              Signup
            </button>
            <button onClick={handleCartOpen} className="text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 p-2 rounded-full">
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
          </div>
        )}
      </nav>
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
      </>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Site Name */}
            <div className="flex items-center">
              <img
                src={logo}
                alt="Snapcart Logo"
                className="h-10 w-10 mr-3 rounded-full border-2 border-white"
              />
              <span className="text-2xl font-extrabold text-white tracking-wide">
                Snapcart
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="flex items-center text-white text-lg hover:text-blue-200 transition duration-300"
              >
                <HomeIcon className="h-5 w-5 mr-1" />
                Home
              </a>
              <a
                href="#about"
                className="flex items-center text-white text-lg hover:text-blue-200 transition duration-300"
              >
                <InformationCircleIcon className="h-5 w-5 mr-1" />
                About
              </a>
              <a
                href="#contact"
                className="flex items-center text-white text-lg hover:text-blue-200 transition duration-300"
              >
                <PhoneIcon className="h-5 w-5 mr-1" />
                Contact
              </a>
              <button className="flex items-center text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 px-4 py-2 rounded-full border-2 border-white">
                <UserIcon className="h-5 w-5 mr-1" />
                Login
              </button>
              <button className="flex items-center text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 px-4 py-2 rounded-full border-2 border-white">
                <UserAddIcon className="h-5 w-5 mr-1" />
                Signup
              </button>
              <button onClick={handleCartOpen} className="text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 p-2 rounded-full">
                <ShoppingCartIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Menu button for mobile devices */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white focus:outline-none transition transform hover:scale-110 duration-200"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-wrap justify-center items-center gap-3 px-4 pt-2 pb-3">
            <a
              href="#home"
              className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-3 py-2 rounded-md"
            >
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </a>
            <a
              href="#about"
              className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-3 py-2 rounded-md"
            >
              <InformationCircleIcon className="h-5 w-5 mr-1" />
              About
            </a>
            <a
              href="#contact"
              className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-3 py-2 rounded-md"
            >
              <PhoneIcon className="h-5 w-5 mr-1" />
              Contact
            </a>
            <button className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2 rounded-full border-2 border-white">
              <UserIcon className="h-5 w-5 mr-1" />
              Login
            </button>
            <button className="flex items-center text-white hover:bg-blue-700 hover:text-white transition duration-300 px-4 py-2 rounded-full border-2 border-white">
              <UserAddIcon className="h-5 w-5 mr-1" />
              Signup
            </button>
            <button onClick={handleCartOpen} className="text-white bg-transparent hover:bg-white hover:text-blue-500 transition duration-300 p-2 rounded-full">
              <ShoppingCartIcon className="h-6 w-6" />
            </button>
          </div>
        )}
      </nav>
      <div className="max-w-7xl mx-auto p-4">
        {/* Product Detail Section */}
        <div className="rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/5">
              <Carousel
                selectedItem={currentIndex}
                onChange={(index) => setCurrentIndex(index)}
                showArrows={true}
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                emulateTouch={true}
                autoPlay={true}
                swipeable={true}
                className="p-4 hover:cursor-zoom-in hover:scale-110 transition-transform duration-300 ease-in-out"

              >
                {productData.images[selectedColor].map((image, index) => (
                  <div key={index} onClick={() => handleThumbnailClick(index)}>
                    <img src={image} alt={`Product ${index}`} className="w-full h-96 object-contain" />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-3xl font-bold text-gray-900">{productData.name}</h1>
              <p className="text-gray-700 mt-2">{productData.description}</p>
              <div className="flex items-center mt-2">
                <span className="text-xl font-semibold text-gray-900">${productData.price.toFixed(2)}</span>
                <span className="ml-4 text-green-500">{productData.availability}</span>
              </div>
              <div className="mt-4">
                <label htmlFor="size" className="block text-gray-700 font-medium">Size</label>
                <select
                  id="size"
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                  className="mt-1 block w-auto shadow-xl border-2  border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select Size</option>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 font-medium">Color</label>
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => handleColorChange('blue')}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === 'blue' ? 'border-blue-500' : 'border-gray-300'} bg-blue-500`}
                  />
                  <button
                    onClick={() => handleColorChange('red')}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === 'red' ? 'border-red-500' : 'border-gray-300'} bg-red-500`}
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <button
                  onClick={handleHeartClick}
                  className="flex items-center text-red-500 hover:text-red-700 transition duration-300"
                >
                  {heartFilled ? <HeartSolidIcon className="h-6 w-6" /> : <HeartOutlineIcon className="h-6 w-6" />}
                  <span className="ml-2">{heartFilled ? 'Added to Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>
              <div className="mt-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900">Similar Products</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            {productData.similarProducts.map((product) => (
              <div key={product.id} className="w-full sm:w-1/2 md:w-1/4 p-2">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-contain" />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <p className="text-gray-700 mt-2">{product.price.toFixed(2)}/-</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-96 p-4">
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
            {cartItems.length > 0 ? (
              <div>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b">
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="text-red-500 hover:text-red-700 transition duration-300"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold">${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <button
              onClick={handleCartOpen}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
