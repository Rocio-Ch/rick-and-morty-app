//Awesome Reveal Animations
import { Fade, Zoom } from "react-awesome-reveal";

//custom Hooks
import useShowComponents from "../customHooks/useShowComponents";

export default function Intro() {
  const showComponents = useShowComponents()

  const cascadeLoading = [
    {
      id: 1,
      letter: "L",
    },
    {
      id: 2,
      letter: "o",
    },
    {
      id: 3,
      letter: "a",
    },
    {
      id: 4,
      letter: "d",
    },
    {
      id: 5,
      letter: "i",
    },
    {
      id: 6,
      letter: "n",
    },
    {
      id: 7,
      letter: "g",
    },
    {
      id: 8,
      letter: ".",
    },
    {
      id: 9,
      letter: ".",
    },
    {
      id: 10,
      letter: ".",
    },
  ];

  return (
    <Fade
      cascade
      duration={600}
      className={`${showComponents && 'hidden'} flex flex-col grow items-center justify-center mb-[200px]`}
    >
      <Zoom direction="down" duration={1500}>
        <img
          className="shadow-[inset_0_0_65px_20px_rgba(7,132,7,0.83)] rounded-full border border-[#008000]"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanl0c2FpYjc1dG8zaGp6aTlvNDc0Y3Z1ejBiemdtZzV5bG1zY2tpbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jSQCODNIa6k5myYjyL/giphy.gif"
          alt="Jerry Smith"
        />
      </Zoom>
      <ul
        className="w-full flex absolute bottom-[10%]"
        style={{ flexDirection: "row" }}
      >
        {cascadeLoading.map(({ id, letter }) => {
          return (
            <li
              key={id}
              className="tracking-widest intro relative text-[50px] lg:text-[60px] font-['Shlop'] text-[#dec63c]"
            >
              {letter}
            </li>
          );
        })}
      </ul>
    </Fade>
  );
}
