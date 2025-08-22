import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export const Pagination = () => {
  return (
    <div className="flex items-center gap-2">
      <IoIosArrowDropleftCircle className="cursor-pointer" size={35} />
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
      <IoIosArrowDroprightCircle className="cursor-pointer" size={35} />
    </div>
  );
};
