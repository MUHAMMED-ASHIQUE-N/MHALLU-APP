import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface RequestTableRowProps {
  requestType: string;
  user: string;
  status: "Pending" | "Done" | "Unread";
  priority: "High" | "Medium";
  date: string;
}

const statusColor: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-200 dark:text-yellow-800",
  Done: "bg-emerald-100 text-emerald-700 dark:bg-emerald-200 dark:text-emerald-800",
  Unread: "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
};

const priorityColor: Record<string, string> = {
  High: "bg-red-100 text-red-700 dark:bg-red-200 dark:text-red-800",
  Medium: "bg-blue-100 text-blue-700 dark:bg-blue-200 dark:text-blue-800",
};

const RequestTableRow: React.FC<RequestTableRowProps> = ({
  requestType,
  user,
  status,
  priority,
  date,
}) => (
  <tr className="border-b dark:border-gray-700 last:border-b-0 transition-colors duration-300">
    <td className="py-2 px-4 font-medium text-gray-800 dark:text-gray-200">{requestType}</td>
    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{user}</td>
    <td className="py-2 px-4">
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]}`}
      >
        {status}
      </span>
    </td>
    <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{date}</td>
    <td className="py-2 px-4 flex items-center gap-3">
      <button
        className="text-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-400 transition"
        title="View"
      >
        <FaEye />
      </button>
      <button
        className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition"
        title="Edit"
      >
        <FaEdit />
      </button>
      <button
        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition"
        title="Delete"
      >
        <FaTrash />
      </button>
    </td>
  </tr>
);

export default RequestTableRow;
