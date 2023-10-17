//Awesome Reveal Animations
import { Fade, Slide, Zoom  } from "react-awesome-reveal";

//Images
import aboutOne from "../assets/about1.jpg";
import rick from "../assets/rick1.jpg"
import morty from "../assets/morty1.jpg"
import summer from "../assets/summer1.png"
import beth from "../assets/beth1.png"
import jerry from "../assets/jerry1.png"

export default function AboutMe() {

    const mainCharacters = [
        {
            id: 1,
            name: "Rick Sanchez",
            description: "Voiced by Justin Roiland: Rick is an alcoholic and misanthropic scientist who possesses a genius-level intellect. He is known for his disregard for ethical and moral concerns, which often leads to chaos and danger during his adventures. Despite his flaws, Rick cares about his family, especially Morty.",
            image: rick
        },
        {
            id: 2,
            name: "Morty Smith",
            description: "Voiced by Justin Roiland: Morty is Rick's kind-hearted and somewhat naive grandson. He often finds himself reluctantly dragged into Rick's chaotic escapades. Morty is the moral compass of the show and struggles to reconcile his grandfather's actions with his own sense of right and wrong.",
            image: morty
        },
        {
            id: 3,
            name: "Summer Smith",
            description: "Voiced by Spencer Grammer: Summer is Morty's older sister. She is a typical teenager dealing with the absurdity of her family's adventures and the challenges of growing up. Over time, Summer becomes more involved in Rick and Morty's adventures.",
            image: summer
        },
        {
            id: 4,
            name: "Beth Smith",
            description: "Voiced by Sarah Chalke: Beth is Rick's daughter and the mother of Morty and Summer. She is a horse surgeon and has a complicated relationship with her father, Rick. Her character development is significant throughout the series as she grapples with her feelings for her father and her role as a mother.",
            image: beth
        },
        {
            id: 5,
            name: "Jerry Smith",
            description: "Voiced by Chris Parnell: Jerry is Beth's husband and the father of Morty and Summer. He is often portrayed as a bumbling and insecure character who is the subject of ridicule within the family. Jerry's insecurities and desire to be a good father and husband are recurring themes.",
            image: jerry
        }
    ]
    
  return (
    <>
      <div className="z-[2] w-[80%] flex flex-col flex-grow items-center self-center mt-[100px] lg:ml-[250px] xl:w-[70%]">
        <Slide direction="down" triggerOnce fraction={0.7} damping={500} >
          <h3 className="text-[#dec63c] text-center font-['Shlop'] my-[30px] text-[50px] lg:text-[60px] lg:my-[50px]">
            Exploring the Multiverse
          </h3>
        </Slide>
        <Zoom fraction={0.7} damping={500} triggerOnce >
          <img
            src={aboutOne}
            className="fade-in-image mb-[30px] w-full lg:w-[900px] shadow-[0_10px_15px_0px_rgb(178,0,255,42%)]"
            alt="Rick and Morty"
          />
        </Zoom>
        <Fade direction="up" triggerOnce fraction={0.7} damping={500} >
          <p className="text-justify text-base xl:w-[961px] xl:text-xl">
            <span className="font-bold text-[#dec63c] xl:text-xl">"Rick and Morty"</span> is
            an American animated science fiction sitcom created by Dan Harmon and
            Justin Roiland. The show first premiered in December 2013 and has
            gained a dedicated fanbase for its clever humor, complex characters,
            and its exploration of existential and philosophical themes. Here's a
            brief summary of the show, its main characters, and its premise.
          </p>
          <h3 className="text-[#dec63c] font-['Shlop'] my-[30px] text-[50px] lg:text-[60px] lg:my-[50px]">
            Summary
          </h3>
          <p className="text-justify text-base xl:w-[961px] xl:text-xl">
            Follows the adventures of an eccentric and brilliant scientist named
            Rick Sanchez and his good-natured but often clueless grandson, Morty
            Smith. Together, they embark on interdimensional adventures,
            encountering bizarre creatures, alternate realities, and all sorts of
            strange phenomena. The show combines elements of science fiction, dark
            humor, and social commentary.
          </p>
          <h3 className="text-[#dec63c] font-['Shlop'] mt-[30px] mb-[50px] text-[50px] lg:text-[60px] lg:my-[50px]">
            Main Characters
          </h3>
        </Fade>
        <div className="xl:[&>*:nth-child(even)]:flex-row-reverse xl:[&>*:nth-child(even)]:text-end">
            {mainCharacters.map(({ id, name, description, image }) => (
                        <div key={id} className="flex flex-col items-center mb-[50px] xl:flex-row xl:items-start">
                          <Fade direction="left" damping={500} cascade triggerOnce fraction={0.7} >
                              <img src={image} className="rounded-full w-[150px] lg:w-[287px] shadow-[0_3px_15px_0px_rgb(178,0,255,42%)]" alt={name} />
                          </Fade>
                          <Fade direction="right" damping={500} cascade triggerOnce fraction={0.7} >
                            <div className="flex flex-col items-center xl:items-start xl:w-[700px] xl:mt-[30px] xl:px-5">
                                <h4 className="font-bold text-[#dec63c] text-lg p-4 xl:py-4 xl:px-0 xl:text-2xl xl:w-full">{name}</h4>
                                <p className="text-justify text-base xl:text-lg">{description}</p>
                            </div>
                          </Fade>
                        </div>
            ))}
        </div>
      </div>
    </>
  );
}

