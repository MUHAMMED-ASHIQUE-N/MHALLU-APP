import { FaSearch } from "react-icons/fa";
import UserTable from "../../components/common/AdminCommon/UserManagment/AllUsers/AllUserTable";

export default function AllUsersPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        {/* Search bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-emerald-400 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 transition-colors duration-300"
              placeholder="Search user...."
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300" />
          </div>
        </div>
        {/* Table */}
        <UserTable />
      </div>
    </div>
  );
}
