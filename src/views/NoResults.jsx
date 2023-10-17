//Awesome Reveal Animations
import { Fade } from "react-awesome-reveal";

//Images
import noResults from "../assets/noResults.png"

export default function NoResults() {
    return (
        <div className="w-full mt-[110px] flex flex-col flex-grow justify-center items-center lg:ml-[250px] lg:w-[80%]">
            <Fade direction="down" damping={500} duration={3500} triggerOnce  >
                <h3 className="text-[#dec63c] text-[50px] font-['Shlop'] lg:text-[60px]">Sorry, no results!</h3>
            </Fade>
            <Fade direction="up" damping={500} duration={3500} triggerOnce>
                <img src={noResults}  className="w-[250px] lg:w-[350px]" alt="Dog Rick and Morty" />
            </Fade>
        </div>
    )
}