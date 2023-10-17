import { useEffect, useContext } from "react"

//Context
import { SearchContext } from "../context/SearchContext"

//Custom Hooks
import useDataCharacters from "../customHooks/useDataCharacters"
import useLoading from "../customHooks/useLoading"

//Components
import Card from "../components/Card"
import PaginationRounded from "../components/PaginationRounded"
import Loading from "../components/Loading"

//Awesome Reveal Animations
import { Fade } from "react-awesome-reveal";

export default function AllCharacters() {

    const { getData, data, totalPages, currentPage, setCurrentPage } = useDataCharacters([])
    const { search } = useContext(SearchContext);
    const loading = useLoading()

    useEffect(() => {
        getData(`https://rickandmortyapi.com/api/character?page=${currentPage}${!search ? '' : `&name=${search}`}`)
                                                                             
    }, [search, currentPage])

    return (
        <>                    
            {loading ? (
                    <Loading />
                ) : (
                    <div className="w-full lg:w-[95%]">
                        <div className="flex flex-col justify-center items-center">
                            <h3 className="text-[#dec63c] text-[50px] font-['Shlop'] lg:text-[60px]">{!search ? `All Characters` : `Search Results`}</h3>
                        </div>
                        <div className="flex flex-wrap justify-center overflow-clip">
                            <Fade direction="right" damping={500} duration={3500} triggerOnce  >
                                {data.results?.map((data) => {
                                        return (                       
                                            <Card key={data.id} id={data.id} name={data.name} image={data.image} data={data} />
                                        )
                                        
                                } )}
                            </Fade>
                        </div>
                        <PaginationRounded totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div>
                 )
            }
        </>
    )
}
