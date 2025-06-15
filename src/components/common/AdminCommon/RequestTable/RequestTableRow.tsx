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
  Pending: "bg-yellow-100 text-yellow-700",
  Done: "bg-emerald-100 text-emerald-700",
  Unread: "bg-red-100 text-red-700",
};

const priorityColor: Record<string, string> = {
  High: "bg-red-100 text-red-700",
  Medium: "bg-blue-100 text-blue-700",
};

const RequestTableRow: React.FC<RequestTableRowProps> = ({
  requestType,
  user,
  status,
  priority,
  date,
}) => (
  <tr className="border-b last:border-b-0">
    <td className="py-2 px-4 font-medium">{requestType}</td>
    <td className="py-2 px-4">{user}</td>
    <td className="py-2 px-4">
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[status]}`}>
        {status}
      </span>
    </td>
    <td className="py-2 px-4">
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor[priority]}`}>
        {priority}
      </span>
    </td>
    <td className="py-2 px-4">{date}</td>
    <td className="py-2 px-4 flex items-center gap-3">
      <button className="text-emerald-500 hover:text-emerald-700" title="View">
        <FaEye />
      </button>
      <button className="text-blue-500 hover:text-blue-700" title="Edit">
        <FaEdit />
      </button>
      <button className="text-red-500 hover:text-red-700" title="Delete">
        <FaTrash />
      </button>
    </td>
  </tr>
);

export default RequestTableRow;