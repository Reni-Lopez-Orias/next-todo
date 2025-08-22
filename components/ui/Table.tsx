import { IoIosCalendar } from "react-icons/io";
import { MdDelete, MdEdit } from "react-icons/md";

interface TableProps {
  setOpenModal: (open: boolean) => void;
}

export const Table = ({ setOpenModal }: TableProps) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Task</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-base-200/40">
          <td className="py-1">
            <div className="flex gap-3">
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="checkbox" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="truncate max-w-40 sm:max-w-80">
                    Cy Ganderton Cy GandertonCy GandertonCy GandertonCy
                    GandertonCy GandertonCy Ganderton
                  </span>
                  <div className="badge badge-error w-10 sm:w-auto sm:text-sm text-xs badge-outline font-semibold flex-shrink-0">
                    High
                  </div>
                </div>
                <div
                  style={{ marginTop: "-5px" }}
                  className="flex gap-1 items-center"
                >
                  <IoIosCalendar size={18} />
                  <span className="font-semibold mt-1">25/08/2025</span>
                </div>
              </div>
            </div>
          </td>
          <td className="flex justify-end gap-0 sm:gap-2">
            <button className="btn btn-ghost btn-circle hover:text-error">
              <MdDelete size={20} />
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="btn btn-ghost btn-circle hover:text-warning" // Color hover amarillo
            >
              <MdEdit size={20} />
            </button>
          </td>
        </tr>
        <tr className="hover:bg-base-200/40">
          <td className="py-1">
            <div className="flex gap-3">
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="checkbox" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="truncate max-w-40 sm:max-w-80">
                    Cy Ganderton Cy GandertonCy GandertonCy GandertonCy
                    GandertonCy GandertonCy Ganderton
                  </span>
                  <div className="badge badge-error w-10 sm:w-auto sm:text-sm text-xs badge-outline font-semibold flex-shrink-0">
                    High
                  </div>
                </div>
                <div
                  style={{ marginTop: "-5px" }}
                  className="flex gap-1 items-center"
                >
                  <IoIosCalendar size={18} />
                  <span className="font-semibold mt-1">25/08/2025</span>
                </div>
              </div>
            </div>
          </td>
          <td className="flex justify-end gap-0 sm:gap-2">
            <button className="btn btn-ghost btn-circle hover:text-error">
              <MdDelete size={20} />
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="btn btn-ghost btn-circle hover:text-warning" // Color hover amarillo
            >
              <MdEdit size={20} />
            </button>
          </td>
        </tr>
        <tr className="hover:bg-base-200/40">
          <td className="py-1">
            <div className="flex gap-3">
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="checkbox" />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="truncate max-w-40 sm:max-w-80">
                    Cy Ganderton Cy GandertonCy GandertonCy GandertonCy
                    GandertonCy GandertonCy Ganderton
                  </span>
                  <div className="badge badge-error w-10 sm:w-auto sm:text-sm text-xs badge-outline font-semibold flex-shrink-0">
                    High
                  </div>
                </div>
                <div
                  style={{ marginTop: "-5px" }}
                  className="flex gap-1 items-center"
                >
                  <IoIosCalendar size={18} />
                  <span className="font-semibold mt-1">25/08/2025</span>
                </div>
              </div>
            </div>
          </td>
          <td className="flex justify-end gap-0 sm:gap-2">
            <button className="btn btn-ghost btn-circle hover:text-error">
              <MdDelete size={20} />
            </button>
            <button
              onClick={() => setOpenModal(true)}
              className="btn btn-ghost btn-circle hover:text-warning" // Color hover amarillo
            >
              <MdEdit size={20} />
            </button>
          </td>
        </tr>
        <tr className="hover:bg-base-200/40">
          <td className="py-1">
            <div className="flex gap-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success" // Cambiado a checkbox-primary
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="truncate max-w-40 sm:max-w-80 line-through opacity-70 font-semibold">
                    Go to the cinema
                  </span>
                  <div className="badge badge-error w-10 sm:w-auto sm:text-sm text-xs badge-outline font-semibold flex-shrink-0">
                    High
                  </div>
                </div>
                {/* <div style={{marginTop:"-5px"}} className="flex gap-1 items-center text-sm text-gray-500">
                      <IoIosCalendar size={18} />
                      <span className="font-semibold mt-1">25/08/2025</span>
                    </div> */}
              </div>
            </div>
          </td>
          <td className="flex justify-end gap-0 sm:gap-2">
            <button className="btn btn-ghost btn-circle hover:text-error">
              <MdDelete size={20} />
            </button>
          </td>
        </tr>
        <tr className="hover:bg-base-200/40">
          <td className="py-1">
            <div className="flex gap-3">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-success" // Cambiado a checkbox-primary
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="truncate max-w-40 sm:max-w-80 line-through opacity-70 font-semibold">
                    Go to the cinema
                  </span>
                  <div className="badge badge-success w-10 sm:w-auto sm:text-sm text-xs badge-outline font-semibold flex-shrink-0">
                    Low
                  </div>
                </div>
                <div
                  style={{ marginTop: "-5px" }}
                  className="flex gap-1 items-center text-sm text-gray-500"
                >
                  <IoIosCalendar size={18} />
                  <span className="font-semibold mt-1">25/08/2025</span>
                </div>
              </div>
            </div>
          </td>
          <td className="flex justify-end gap-0 sm:gap-2">
            <button className="btn btn-ghost btn-circle hover:text-error">
              <MdDelete size={20} />
            </button>
            {/* <button
                  onClick={() => setOpenModal(true)}
                  className="btn btn-ghost btn-circle hover:text-warning" // Color hover amarillo
                >
                  <MdEdit size={20} />
                </button> */}
          </td>
        </tr>
      </tbody>
    </table>
  );
};
