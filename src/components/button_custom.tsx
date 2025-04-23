import { MdArrowOutward } from "react-icons/md";

export default function ButtonCustom({to, isShowContent=true, children, rightBottom = false, leftBottom = false, rightTop = false }) {
  const positionRightBottom = rightBottom ? " md:left-[60%] md:bottom-[10%] lg:left-[75%] lg:bottom-[10%] " : "";
  const positionLeftBottom = leftBottom ? " left-[5%] bottom-[10%] " : "";
  const positionRightTop = rightTop ? " left-[65%] bottom-[75%] md:left-[75%] md:bottom-[80%] lg:left-[80%] lg:bottom-[80%]" : "";
  console.log(positionRightBottom);

  return (
    <div className={`flex items-center absolute ${positionLeftBottom}${positionRightBottom}${positionRightTop}`}>
      <div
        className={
          `${!isShowContent ? "hidden " : " "}bg-white hover:bg-[#DDF247] font-semibold  p-3 md:p-4 rounded-[30px] text-[8px] md:text-[14px] w-[120px] md:w-[200px] text-center cursor-pointer`
        }
      >
        {children}
      </div>
      <div
        className={
          "bg-white hover:bg-[#DDF247] rounded-full p-2 md:p-4 w-[30px] h-[30px] md:w-[50px] md:h-[50px] cursor-pointer flex items-center justify-center"
        }
      >
        <MdArrowOutward size={20} />
      </div>
    </div>
  );
}
