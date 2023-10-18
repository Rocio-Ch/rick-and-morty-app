import { useContext } from "react"

//Context
import { DetailContext } from "../context/DetailContext"

//Icons
import { BsGithub } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"

export default function Footer() {
    const { showDetail } = useContext(DetailContext)

    return (
        <footer className={`${showDetail ? "blur-[2px] brightness-[0.5]" : ""} flex flex-col items-center justify-center px-4 pb-4 pt-[60px] text-[#eeebe8] lg:pl-[250px] lg:rounded-tl-[30px]`}>
            <div className="flex items-center">
                <a href="https://github.com/Rocio-Ch" target="_blank"><BsGithub /></a>
                <a href="https://www.linkedin.com/in/roc%C3%ADo-magal%C3%AD-chaparro-a3530a239/" target="_blank"><SiLinkedin className="mx-2" /></a>
                <p><span className="ml-2 mx-2">|</span>Rocio Magali Chaparro<span className="mx-2">|</span>© 2023</p>
            </div>
        </footer>
    )
}