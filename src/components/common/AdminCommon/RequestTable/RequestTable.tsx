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
  <div className="bg-white rounded-lg shadow-md p-0 overflow-x-auto">
    <table className="min-w-full text-left">
      <thead>
        <tr className="bg-gray-50">
          <th className="py-2 px-4 font-medium">Request Type</th>
          <th className="py-2 px-4 font-medium">User</th>
          <th className="py-2 px-4 font-medium">Status</th>
          <th className="py-2 px-4 font-medium">Priority</th>
          <th className="py-2 px-4 font-medium">Date</th>
          <th className="py-2 px-4 font-medium">Acrions</th>
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