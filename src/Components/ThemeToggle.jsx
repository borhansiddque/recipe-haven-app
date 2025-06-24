// ThemeToggle.jsx
import { Tooltip } from "react-tooltip";
import { useTheme } from "../provider/ThemeProvider";

const ThemeToggle = () => {
  const { toggleTheme, isLight } = useTheme();

  return (
    <>
      <Tooltip id="theme-toggle-tooltip" />

      <button
        data-tooltip-id="theme-toggle-tooltip"
        data-tooltip-content={`Switch to ${isLight ? 'dark' : 'light'} mode`}
        onClick={toggleTheme}
        className="relative inline-flex h-8 w-16 items-center rounded-full bg-base-300 transition-all duration-300 hover:bg-base-content/10 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-base-100 shadow-md cursor-pointer"
        aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      >
        {/* Background track with gradient */}
        <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
        
        {/* Sliding circle with icon */}
        <div
          className={`relative z-10 flex h-7 w-7 transform items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isLight ? 'translate-x-0.5' : 'translate-x-8'
          }`}
        >
          {/* Sun and Moon icons with smooth transition */}
          <div className="relative h-4 w-4">
            {/* Sun icon */}
            <svg
              className={`absolute inset-0 h-4 w-4 text-orange-500 transition-all duration-300 ${
                isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
            
            {/* Moon icon */}
            <svg
              className={`absolute inset-0 h-4 w-4 text-slate-600 transition-all duration-300 ${
                !isLight ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
        
        {/* Background icons for visual context */}
        <div className="absolute inset-0 flex items-center justify-between px-2 text-white/70">
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </button>
    </>
  );
};

export default ThemeToggle;
