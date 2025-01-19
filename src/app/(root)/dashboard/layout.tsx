import React, { ReactNode } from 'react';

const DashboardLayout = ({ children }: {children : ReactNode}) => {
  return (
    <div className="dashboard-layout">
      {children}
    </div>
  );
}

export default DashboardLayout;