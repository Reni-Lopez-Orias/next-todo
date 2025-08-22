import { FaRegMoon } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between h-12 mb-0">
      <h1 className="text-3xl sm:text-4xl font-bold">{`<TodoApp/>`}</h1>
      <div className="flex items-center gap-4">
        <button className="btn btn-ghost btn-circle">
          <FaRegMoon size={22} />
        </button>
        <button className="btn btn-ghost btn-circle">
          <IoIosLogOut size={28} />
        </button>
      </div>
    </header>
  );
};
