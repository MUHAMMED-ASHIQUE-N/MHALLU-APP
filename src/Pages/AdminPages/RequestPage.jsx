import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import RequestTable from "../Components/AdminComponents/RequestTable/RequestTable";

 function RequestsPages() {
  return (
    <div className="min-h-screen bg-teal-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 mb-6">
          {/* Search bar */}
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-400"
                placeholder="Search user...."
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          {/* Dropdown */}
          <div className="w-full md:w-64">
            <div className="relative">
              <select
                className="appearance-none w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-emerald-400"
                defaultValue="all"
              >
                <option value="all">All Request</option>
              </select>
              <IoChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
            </div>
          </div>
        </div>
        {/* Table */}
        <RequestTable />
      </div>
    </div>
  );
}
export default RequestsPages;