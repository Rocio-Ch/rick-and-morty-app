import { useContext } from "react"

//Context
import { FavoriteContext } from "../context/FavoriteContext"

//Components
import CardFavorite from "../components/CardFavorite"

//Images
import noFav from "../assets/no-fav3.png"

//Awesome Reveal Animations
import { Slide } from "react-awesome-reveal";

export default function Favorites() {

    const { allFavorites } = useContext(FavoriteContext)

    return (
        <>
            <section className="flex flex-col flex-grow items-center mt-[100px] lg:ml-[250px]">
                <Slide direction="down" triggerOnce>
                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-[#dec63c] text-[50px] font-['Shlop'] lg:text-[60px]">{allFavorites.length != 0 ? `Favorites` : `No favorites yet`}</h3>
                    </div>
                </Slide>
                <div className="w-full flex flex-wrap items-center justify-center xl:w-[95%]">
                    <Slide direction="up" damping={0.5} duration={2000} triggerOnce fraction={0.7} >
                        {allFavorites.length ? (
                            allFavorites?.map((data) => {
                                return (
                                    <CardFavorite key={data.id} data={data} />
                                )
                        })
                        ) : (
                            <div className="z-[2] flex flex-col items-center mt-[60px]">
                                <img src={noFav} className="w-[280px] lg:w-[100%]" alt="No favorites yet" />
                            </div>
                        )}
                    </Slide>
                </div>
            </section>
        </>
    )
}