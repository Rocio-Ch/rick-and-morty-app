import { useContext } from "react";

//Context
import { SearchContext } from "../context/SearchContext";

import { Link } from "react-router-dom"
import portal from "../assets/portal.webp"

export default function NotFound() {
	const { setSearch } = useContext(SearchContext);
	
	function handleResetSearch() {
	  setSearch("");
	}

    return (
        <div className="absolute z-[9999] h-screen w-screen flex flex-col items-center justify-center bg-[#030220]">
            <div className="mainContainer h-screen"></div>
			<div className="flex flex-col items-center justify-center">
				<div className="flex items-center relative">
					<span className="errorNumber text-[190px] mr-[30px] lg:text-[400px] lg:mr-[110px]">4</span>
                    <img src={portal} className="portalNotFound w-[260px] absolute right-[14px] lg:right-[32px] lg:w-[650px]"  alt="Error 404" />
                    <span className="errorNumber text-[190px] ml-[30px] lg:text-[400px] lg:ml-[120px]">4</span>
				</div>
				<p className="text-center lg:text-lg">The page you are trying to search has been moved to another universe.</p>
				<button onClick={handleResetSearch} type="button" className="getMeHome bg-[#f96e4d] rounded-full py-2.5 px-[22px] text-white mt-2.5 font-bold"><Link to="/" >GET ME HOME</Link></button>
			</div>
		</div>
    )
}