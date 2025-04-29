import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import Navbar from './Navbar';
import SideMenu from './SideMenu';

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="h-screen flex flex-col">
      <Navbar activeMenu={activeMenu} />

      {user && (
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          {/* Main Content Scrollable Area */}
          <div className="grow overflow-y-auto p-5">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
