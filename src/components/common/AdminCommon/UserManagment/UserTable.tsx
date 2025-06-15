import React from "react";
import UserTableRow from "./UserTableRow";

const users = [
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
   {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
   {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
   {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
  },
  {
    name: "kadhar",
    phone: "+91 0987654321",
    email: "kadhar@gmail.com",
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
          <UserTableRow key={idx} {...user} />
        ))}
      </tbody>
    </table>
  </div>
);

export default UserTable;
