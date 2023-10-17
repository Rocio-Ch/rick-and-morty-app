import { useContext } from "react";

//context
import { FavoriteContext } from "../context/FavoriteContext";

//Images
import codeBar from "../assets/bar-code.png";
import noImageGif from "../assets/noImageGif.gif";

//React icons
import { TiHeartFullOutline } from "react-icons/ti"

export default function CardFavorite({ data }) {

    const { removeFavorite } = useContext(FavoriteContext)

  return (
    <div className="bg-white flex flex-col rounded-[10px] m-2 w-[360px] h-[200px]">
        <div className="text-white rounded-t-lg p-2 bg-gradient-to-r from-[#320e3e] via-[#370f44] to-[#64297b]">
            <p>{data.name}</p>
        </div>
        <div className="flex items-center grow p-2">
            <img
                src={data.image ? data.image : noImageGif}
                className="w-[100px]"
                alt={`${data.name}`}
            />
            <ul className="h-[92%] flex flex-col justify-evenly text-black text-xs pl-4 lg:text-sm">
                <li className="font-black">
                Gender:<span className="font-normal ml-1">{data.gender}</span>
                </li>
                <li className="font-black">
                Status:<span className="font-normal ml-1">{data.status}</span>
                </li>
                <li className="font-black">
                Species:<span className="font-normal ml-1">{data.species}</span>
                </li>
                <li className="font-black">
                Origin:
                <span className="font-normal ml-1">{data.origin?.name}</span>
                </li>
            </ul>
        </div>
        <div className="flex justify-between p-1">
            <img 
                src={codeBar} 
                className="h-[20px] w-1/2"
                alt="Code bar"
            />
            <button className="mr-1 shadow-[0_3px_3px_0px_rgb(26,25,25,60%)] rounded-full">
                <TiHeartFullOutline onClick={() => removeFavorite(data)} className="fill-[#ff0000e3] stroke-2 stroke-[#ff0000e3] text-[25px] hover:fill-white" />
            </button>
        </div>
    </div>
  )
}