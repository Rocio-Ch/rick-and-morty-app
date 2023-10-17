//Image
import loading from "../assets/loader.png"

export default function Loading() {
    return (
        <div className="loading w-[80px] animate-spin">
            <img src={loading} alt="Pickle Rick" />
        </div>
    )
}