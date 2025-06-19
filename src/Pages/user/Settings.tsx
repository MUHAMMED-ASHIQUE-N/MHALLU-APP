import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppNavbar } from "../../Layout/user/AppNavbar";
import Button from "../../components/ui/button/Button";

const BackButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      aria-label="Go back"
      className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-100"
    >
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <path d="M15 18l-6-6 6-6" stroke="#166a5c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

const Settings: FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleLogout = () => {
    // Clear auth/session here if needed
    window.location.href = "/"; // Redirect to login page
  };

  return (
    <div className="min-h-dvh bg-gray-100 dark:bg-gray-900 pb-16">
      {/* Header */}
      <div className="bg-teal-700 px-4 py-4 ">
        <h2 className="text-white text-lg font-bold flex-1 text-center">Settings</h2>
        <span className="w-9 h-9" />
      </div>

      <main className="px-4 pt-6 max-w-sm mx-auto">
        {/* Theme toggle */}
        <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg px-4 py-3 mb-5 shadow">
          <span className="font-medium text-gray-800 dark:text-gray-200">Dark Theme</span>
          <button
            onClick={handleThemeToggle}
            className={`w-12 h-6 flex items-center rounded-full px-1 transition-colors duration-200 ${
              darkMode ? "bg-teal-600" : "bg-gray-300"
            }`}
            aria-pressed={darkMode}
            aria-label="Toggle theme"
          >
            <span
              className={`h-4 w-4 bg-white rounded-full shadow transform transition-transform duration-200 ${
                darkMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
        {/* Logout */}
        <Button
          onClick={handleLogout}
          variant="bg_lener"
          className="w-full  text-white font-bold py-3 rounded-lg shadow-md transition-colors duration-150"
        >
          Logout
        </Button>
      </main>
      <AppNavbar />
    </div>
  );
};

export default Settings;