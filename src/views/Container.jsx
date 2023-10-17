import { useContext } from "react"

//Context
import { DetailContext } from "../context/DetailContext"

//Components
import DetailCharacter from "../components/DetailCharacter"
import AllCharacters from "../views/AllCharacters"

export default function Container() {

    const { showDetail } = useContext(DetailContext)

    return (
        <>
            <main className={`${showDetail ? "blur-[2px] brightness-[0.5]" : ""} z-[2] flex flex-col flex-grow items-center mt-[100px] lg:ml-[250px]`}>
                <AllCharacters />
            </main>
            {showDetail ? (
                <DetailCharacter />
            ) : (
                <></>
            )}
        </>
    )
}



