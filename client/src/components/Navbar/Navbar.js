import React from "react";

const Navbar = () => {
  const btn = document.querySelector("button.mobile-menu-button");
  

  // btn.addEventListener("click", () => {
  //   menu.classList.toggle("hidden");
  // });
  const handleCollapse = ( ()=>{
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
   
  });
  return (
    <div>
      <nav className="bg-white shadow-lg ">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              
              <a href="" className="flex items-center py-4 px-2">
                <img src="" className="h-8 w-8 mr-2" alt="" />
                <span className="font-semibold text-gray-700 text-lg">
                  My Books
                </span>
              </a>
              <div className="hidden md:flex items-center space-x-1">
                  <a href="" className="nav-btn">Home</a>
                  <a href="" className="nav-btn-others">Services</a>
                  <a href="" className="nav-btn-others">About</a>
                  <a href="" className="nav-btn-others">Contact Us</a>
              </div>
             
					
            </div>
            <div className="hidden md:flex items-center space-x-3 ">
						<a href="" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
						<a href="" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
					</div>
          <div className="md:hidden flex items-center">
						<button onClick={handleCollapse} className="outline-none mobile-menu-button transform transition-transform duration-200">
						<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
          </div>
        </div>
        <div className="hidden mobile-menu">
				<ul className="">
					<li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
					<li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
					<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
				</ul>
			</div>
		
      </nav>
    </div>
  );
};

export default Navbar;
