import React, { ReactNode } from 'react';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <nav>{children}</nav>;
};

export default Layout;
