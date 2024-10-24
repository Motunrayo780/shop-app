
import React from 'react';

const Side = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false); // State for sidebar visibility

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="w-[100px] h-[40px] bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
        onClick={toggleSidebar}
      >
        Toggle Sidebar
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gray-800 text-white transition-transform transform ${
          isSidebarVisible ? 'translate-x-0' : 'translate-x-full'
        } 
        sm:w-[250px] w-full`}  {/* Full width on mobile, 250px on larger screens */}
      >
        <h2 className="p-4 text-lg font-semibold">Sidebar Content</h2>
        <p className="">This is the sidebar content.</p>
        
        {/* Close Button */}
        <button
          className="w-full bg-red-500 text-white py-2 mt-4 hover:bg-red-600"
          onClick={toggleSidebar}
        >
          Close Sidebar
        </button>
      </div>
    </div>
  );
};

export default Side;
