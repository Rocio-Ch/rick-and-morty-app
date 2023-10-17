import { IoIosArrowUp } from "react-icons/io";

export default function TopArrow() {
  function top() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="text-[#144f18] z-[999] inline fixed bottom-[10px] py-[5px] px-2.5 m-2.5 text-base right-0 bg-white rounded-full lg:bottom-0 lg:mr-[25px] lg:mb-[25px] lg:py-2 lg:px-3 lg:text-2xl shadow-[-1px_7px_11px_-4px_rgba(0,0,0,75%)] cursor-pointer">
      <button onClick={() => top()} className="pt-[6px] px-[3px]">
        <IoIosArrowUp />
      </button>
    </div>
  );
}
