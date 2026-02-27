import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout Component
 * Main layout wrapper with navbar and footer
 * Added padding-top to prevent navbar from covering page content
 */

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Added pt-28 for desktop (navbar height ~112px) and pt-20 for mobile (navbar height ~80px) */}
      <main className="flex-grow pt-20 md:pt-28" id="main-content" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export { Layout };
export default Layout;
