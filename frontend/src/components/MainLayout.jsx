import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './LeftSidebar';

const MainLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-[20%] bg-gray-800 text-white">
        <LeftSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-4 overflow-y-auto bg-gradient-to-r from-white via-gray-200 to-gray-400">
  <Outlet />
</div>
    </div>
  );
};

export default MainLayout;