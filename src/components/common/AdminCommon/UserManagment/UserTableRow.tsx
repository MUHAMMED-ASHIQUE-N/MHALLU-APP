import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface UserTableRowProps {
  name: string;
  phone: string;
  email: string;
}

const UserTableRow: React.FC<UserTableRowProps> = ({ name, phone, email }) => (
  <tr className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
    <td className="py-2 px-4 text-gray-800 dark:text-white">{name}</td>
    <td className="py-2 px-4 text-gray-800 dark:text-white">{phone}</td>
    <td className="py-2 px-4 text-gray-800 dark:text-white">{email}</td>
    <td className="py-2 px-4 flex items-center gap-3">
      <button className="text-emerald-500 hover:text-emerald-400" title="View">
        <FaEye />
      </button>
      <button className="text-[#26A489] hover:text-emerald-300" title="Edit">
        <FaEdit />
      </button>
      <button className="text-red-500 hover:text-red-400" title="Delete">
        <FaTrash />
      </button>
    </td>
  </tr>
);

export default UserTableRow;
