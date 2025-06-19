import React from "react";
import RequestTableRow from "./RequestTableRow";

const requests = [
  {
    requestType: "Marriage Clearance Certificate",
    user: "Ahmad Hassan",
    status: "Pending",
    priority: "High",
    date: "2024-06-10",
  },
  {
    requestType: "Mahallu Clearance Certificate",
    user: "Ahmad Hassan",
    status: "Done",
    priority: "Medium",
    date: "2024-06-10",
  },
  {
    requestType: "Marriage Clearance Certificate",
    user: "Ahmad Hassan",
    status: "Unread",
    priority: "High",
    date: "2024-06-10",
  },
  {
    requestType: "Marriage Clearance Certificate",
    user: "Ahmad Hassan",
    status: "Pending",
    priority: "High",
    date: "2024-06-10",
  },
];

const RequestTable: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-0 overflow-x-auto transition-colors duration-300">
    <table className="min-w-full text-left">
      <thead>
        <tr className="bg-gray-50 dark:bg-gray-700 transition-colors duration-300">
          <th className="py-2 px-4 font-medium text-gray-700 dark:text-gray-200">Request Type</th>
          <th className="py-2 px-4 font-medium text-gray-700 dark:text-gray-200">User</th>
          <th className="py-2 px-4 font-medium text-gray-700 dark:text-gray-200">Status</th>
          <th className="py-2 px-4 font-medium text-gray-700 dark:text-gray-200">Date</th>
          <th className="py-2 px-4 font-medium text-gray-700 dark:text-gray-200">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map((req, idx) => (
          <RequestTableRow key={idx} {...req} />
        ))}
      </tbody>
    </table>
  </div>
);

export default RequestTable;
