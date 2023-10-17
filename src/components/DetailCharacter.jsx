import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

//Context
import { DetailContext } from "../context/DetailContext";

//Custom Hooks
import useDataCharacters from "../customHooks/useDataCharacters";

//Awesome Reveal Animations
import { Fade } from "react-awesome-reveal";

//Images
import idCard from "../assets/idCard1.png";
import codeBar from "../assets/bar-code.png";
import noImageGif from "../assets/noImageGif.gif";

//Icons
import { FaRegWindowClose } from "react-icons/fa";

export default function DetailCharacter() {
  const { getData, data } = useDataCharacters([]);
  const { id } = useParams();

  useEffect(() => {
    getData(`https://rickandmortyapi.com/api/character/${id}`);
  }, []);

  const { handleShowDetail } = useContext(DetailContext);

  return (
    <Fade className="fixed z-50 h-screen flex flex-col items-center justify-center left-1/2">
      <div className="lg:ml-[250px] absolute h-[500px] w-[250px] bg-no-repeat bg-cover md:w-[313px] md:h-[590px]" style={{ backgroundImage: `url(${idCard})` }} >
        <div className="absolute flex flex-col justify-between bg-white h-[315px] w-[196px] bottom-[33px] left-[27px] md:w-[239px] md:h-[377px] md:left-[34px] md:bottom-[22px]">
          <div className="rounded-tr-full bg-[#6495ed] mt-2.5">
            <div className="flex flex-col items-center bg-[#fbcc57] py-[5px] rounded-tl-full">
              <img
                src={data.image ? data.image : noImageGif}
                className="bg-white w-[100px] rounded-full border-[3px] border-[#000000b8] shadow-[0_0_15px_1px_rgba(7,7,60,70%)] md:w-[130px]"
                alt={`${data.name}`}
              />
              <span className="mt-1 text-black text-center font-black text-sm md:text-lg">
                {data.name}
              </span>
            </div>
          </div>
          <ul className="text-black text-[15px] px-4 md:text-base lg:text-sm">
            <li className="font-black">
              Gender:<span className="font-normal ml-1">{data.gender}</span>
            </li>
            <li className="font-black">
              Status:<span className="font-normal ml-1">{data.status}</span>
            </li>
            <li className="font-black">
              Species:<span className="font-normal ml-1">{data.species}</span>
            </li>
            <li className="hidden font-black lg:block">
              Origin:
              <span className="font-normal ml-1">{data.origin?.name}</span>
            </li>
          </ul>
          <img
            src={codeBar}
            className="h-5 mb-2 md:h-[27px]"
            alt="Code bar"
          />
        </div>
        <Link to="/" onClick={() => handleShowDetail(false)}>
          <button className="absolute text-[30px] text-[#2a2626] bg-[#fbcc57] bottom-[93%] right-[44%] md:right-[141px] md:top-[6px] md:text-xl lg:text-[38px]">
            <FaRegWindowClose />
          </button>
        </Link>
      </div>
    </Fade>
  )
}