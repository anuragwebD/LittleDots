
import logo from "../img/logo.png";

function Navbar() {
  
    function closeMenu(){
      document.getElementById("mob-menu").style.marginLeft = "-500px"
    }

    function openMenu(){
      document.getElementById("mob-menu").style.marginLeft = "0px"
    }


    
  
    


  return (
    <>
      <div className="relative">

 
       <div className="md:hidden h-screen w-full absolute z-50 mt-[-70px] bg-white ml-[-500px] transition-all " id="mob-menu"
           onClick={closeMenu}
       > 

       <div className={`navbar `}>
        <div className="flex items-center justify-between">
            <img src={logo} alt="littledots" className="w-56 ml-[-30px]"></img>
            <div className="w-12 h-12 rounded-full flex flex-col gap-2 justify-center items-center bg-[#E03737] md:hidden mr-4" id="menu-remove">

            <div className="border-white border w-6 rotate-45 "></div>
            <div className="border-white border w-6 rotate-[-45deg] mt-[-9px]"></div>
          </div> 

        </div>
        <div className="p-10">
            <ul className="flex flex-col gap-4 text-2xl font-semibold">
              <li className="border-b pb-3">Home</li>
              <li className="border-b pb-3">About Us</li>
              <li className="border-b pb-3">Team</li>
              <li className="border-b pb-3">Gallery</li>
              <li className="border-b pb-3">Blogs</li>
              <li className="border-b pb-3">Internship</li>
              <li className="border-b pb-3">Contact Us</li>

            </ul>
        </div>
       </div>
       
       </div>


        <div className="flex items-center justify-between">
          <div className=" ">
            <img
              src={logo}
              alt="littledots"
              className="md:w-80 w-80 
                mt-[-80px] ml-[-50px] md:ml-auto md:mt-[-100px]"
            ></img>
          </div>
          <div>
            <ul className="hidden md:flex gap-8 mt-[-60px] px-20 text-xl font-semibold">
              <li>Home</li>
              <li>About Us</li>
              <li>Team</li>
              <li>Gallery</li>
              <li>Blogs</li>
              <li>Internship</li>
              <li>Contact Us</li>
            </ul>
          </div>


          <div className="w-12 h-12 rounded-full flex flex-col gap-2 justify-center items-center bg-[#E03737] md:hidden mt-[-70px] mr-4 toggle" id="menu-open" 
          onClick={openMenu}

          >
          {/* {navbarOpen ? "close" : "open"} */}
            <div className="border-white border w-6 "></div>
            <div className="border-white border w-6 "></div>
            <div className="border-white border w-6 "></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
