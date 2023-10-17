import { useState, useEffect, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

//Context
import { DetailContext } from "../context/DetailContext";
import { SearchContext } from "../context/SearchContext";

//Custom Hooks
import useDataCharacters from "../customHooks/useDataCharacters";

//Images
import logoDesktop from "../assets/logo.png";
import logoMobile from "../assets/logoMobile.png";
import banner from "../assets/banner.jpg";
import bgSearch from "../assets/bg-search7.png";

//React icons
import { AiFillHome, AiFillStar, AiFillInfoCircle } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

//Awesome Reveal Animations
import { Zoom } from "react-awesome-reveal";

export default function Header() {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      icon: <AiFillHome />,
    },
    {
      id: 2,
      name: "Favorites",
      path: "/favorites",
      icon: <AiFillStar />,
    },
    {
      id: 3,
      name: "About",
      path: "/about",
      icon: <AiFillInfoCircle />,
    },
  ];

  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState(logoDesktop);
  const { showDetail } = useContext(DetailContext);
  const { setCurrentPage } = useDataCharacters([]);
  const { search, setSearch } = useContext(SearchContext);

  useEffect(() => {
    const handleResize = () => {
      setBackgroundImage(window.innerWidth <= 1024 ? logoMobile : logoDesktop);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [logoMobile, logoDesktop]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleChangeInput(e) {
    setCurrentPage(1);
    setSearch(e.target.value);
    navigate("/");
  }

  function top() {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    })
  }

  return (
    <header className="w-full flex flex-col flex-grow">
      <div
        className={`side-nav ${isMenuOpen ? "openMenu" : "closeMenu"}
          ${
            showDetail ? "blur-[2px] brightness-[0.5]" : ""
          } w-[70px] h-full bg-gradient-to-r from-[#07250a] via-[#0e3c12] to-[#144f18] rounded-br-[40px] fixed top-0 left-0 px-2 py-[40px] lg:shadow-[0_0_20px_0px_rgb(57,218,2,44%)] lg:translate-x-0 lg:w-[250px] lg:py-5 lg:px-[30px]`}
      >
        
        <Link
          to="/"
          onClick={() => {
            setSearch(""),
            openMenu(),
            setSearch("")
           }}
          className="logo bg-[#0c0a48] rounded-full w-[50px] h-[44px] block my-5 lg:mb-[70px] bg-no-repeat bg-contain bg-center lg:bg-[#B5C75E] lg:w-[180px] lg:h-[180px] shadow-[1px_1px_20px_7px_rgba(145,218,2,65%)]"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></Link>
        <ul className="nav-links relative list-none">
          {menuItems.map(({ id, name, path, icon }) => (
            <li key={id}>
              <NavLink
                to={path}
                className="link flex justify-center items-center text-xl rounded-md text-[#f6eadd] py-[15px] px-2.5 lg:justify-start"
                activeclassname="active"
                onClick={() => {
                  openMenu(),
                  top(),
                  setSearch("")
                 }}
              >
                {icon}
                <p className="hidden lg:flex lg:ml-5">{name}</p>
              </NavLink>
            </li>
          ))}
          <div className="activeHover bg-[#B5C75E] w-full h-[50px] absolute left-0 top-[2.6%] z-[-1] rounded-md shadow-[0px_5px_20px_0px_rgba(145,218,2,65%)] hidden transition transition-[top] duration-[0.5s] lg:h-[58px]"></div>
        </ul>
      </div>
      <div
        className={`${
          showDetail ? "blur-[2px] brightness-[0.5]" : ""
        } h-[300px] relative bg-[#00800052] bg-no-repeat bg-[length:1100px_760px] bg-center mb-[50px] lg:ml-[215px] shadow-[0_0_20px_0px_rgb(57,218,2,44%)] flex flex-col items-center justify-center md:bg-cover lg:h-[500px]`}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <button onClick={() => openMenu()} className="lg:hidden">
          {isMenuOpen ? (
            <IoMdClose className="fixed text-[2rem] m-4 z-20 top-0 left-0 rounded-md text-[#35923b] bg-[#f6eadd]" />
          ) : (
            <GiHamburgerMenu className="absolute text-[2rem] m-4 top-0 left-0 rounded-md text-[#35923b] bg-[#f6eadd] border-2 border-[#f6eadd]" />
          )}
        </button>
        <Zoom cascade triggerOnce>
          <h1 className="font-['Shlop'] text-[50px] text-[#1f9227] font-semibold md:text-[70px] lg:text-[7rem]">
            Rick and Morty App
          </h1>
        </Zoom>
        <div className="w-full top-[80%] absolute flex flex-col grow mb-[-150px] lg:top-[83%]">
          <div
            className="flex flex-col items-center h-[145px] mt-8 bg-no-repeat bg-contain bg-center lg:h-[220px]"
            style={{ backgroundImage: `url(${bgSearch})` }}
          >
            <div className="w-[250px] top-[-9px] flex justify-center items-start relative left-0 lg:w-[370px] lg:top-[12px]">
              <input
                onChange={handleChangeInput}
                className="w-[245px] font-black capitalize py-2 px-10 mt-[25px] bg-[#cbc7c726] rounded-full text-[#062a06] text-sm outline-0 placeholder:text-[#0936099b] lg:w-[370px] lg:text-xl"
                type="text"
                placeholder="Search by name. . ."
                autoFocus
                value={search}
              />
              <ImSearch className="text-[#062a06] mt-[35px] text-xl absolute right-[19px]" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
