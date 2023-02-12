import React from 'react';
import { Outlet } from 'react-router-dom';

import style from './MainLayout.module.scss';

export const MainLayout = () => (
  <div className={style.container}>
    <Outlet />
  </div>
);
