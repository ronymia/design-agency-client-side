import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Pages/Shared';

function MainLayout() {
     return (
          <>
               <Header />
               <Outlet />
          </>
     )
}

export default MainLayout;
