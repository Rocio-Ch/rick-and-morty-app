import { useContext } from "react"
import { Link } from "react-router-dom"

//Context
import { DetailContext } from "../context/DetailContext"
import { FavoriteContext } from "../context/FavoriteContext"

//React icons
import { TiHeartFullOutline } from "react-icons/ti"
import { PiHeartFill } from "react-icons/pi"

export default function Card({ id, name, image, data }) { 

    const { handleShowDetail } = useContext(DetailContext)
    const { addFavorite, removeFavorite, getFavorite } = useContext(FavoriteContext)

    return (
        <div id={id} className="relative w-[250px] h-[350px] m-[16px] flex flex-col items-center pt-2.5 rounded-[30px] bg-gradient-to-r from-[#64297b] via-[#370f44] to-[#200928] lg:w-[280px] lg:h-[400px]">
                {getFavorite(data.id) ? (
                    <TiHeartFullOutline size={50} onClick={() => removeFavorite(data)} className="z-[50] absolute text-[45px] top-5 right-5 fill-[#ff0000e3] hover:fill-[#a6a0a0] rounded-full bg-white pt-[1px] shadow-[0_3px_3px_0px_rgb(26,25,25,79%)] hover:cursor-pointer" />
                    ) : (
                    <PiHeartFill size={50} onClick={() => addFavorite(data)} className="z-[50] absolute text-[45px] top-5 right-5 rounded-full pt-[3px] bg-white shadow-[0_3px_3px_0px_rgb(26,25,25,79%)] hover:cursor-pointer fill-[#a6a0a0] hover:fill-[#ff0000e3]" />
                )}
            <Link to={`/detail/${id}`} onClick={() => handleShowDetail(true)} className="w-[95%] h-full bg-no-repeat bg-cover bg-center rounded-[20px] border-[8px] border-[#5c2970] w-[280px] h-[365px]" style={{ backgroundImage: `url(${image})` }}></Link>
            <p className="character-name text-[#dec63c] text-[30px] text-center m-1 rounded-[15px] font-['Shlop']">{name}</p>            
        </div>
    )
}