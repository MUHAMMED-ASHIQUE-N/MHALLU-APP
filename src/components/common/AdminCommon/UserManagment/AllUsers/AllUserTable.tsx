import React from "react";
import AllUserTableRow from "./AllUserTableRow";

const users = [
 {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },{
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
    bloodGroup: "B+",
    aadhar: "1234 5678 9123",
    pan: "ABCDE1234F",
    joinDate: "2024-05-20",
    payment: "₹25,000",
    address: "Malappuram, Kerala",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
   {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
   {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
  {
    name: "Ummar",
    phone: "+91 0987654321",
    email: "Ummar@gmail.com",
  },
];

const UserTable: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-0 overflow-x-auto transition-colors duration-300">
    <table className="min-w-full text-left">
      <thead>
        <tr className="bg-gray-50 dark:bg-gray-700">
          <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Name</th>
          <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Phone no</th>
          <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Email</th>
          <th className="py-2 px-4 font-medium text-gray-800 dark:text-white">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <AllUserTableRow key={idx} {...user} />
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
