// import React from 'react';
// import { Outlet } from 'react-router';
// import NavBar from '../pages/Shared/NavBar';
// import Footer from '../pages/Shared/Footer';

// const RootLayout = () => {
//     return (
//         <div>
//             <NavBar></NavBar>
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default RootLayout;

import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <NavBar toggleTheme={toggleTheme} theme={theme}></NavBar>
      <Outlet ></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
