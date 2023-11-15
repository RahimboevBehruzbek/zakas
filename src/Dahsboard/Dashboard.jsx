import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notificatons from './Content/Notifications/Notificatons'
import Credit from './Content/Credit/Credit'
import DashboardMenu from './Manu/DashboardMenu';
import Settings from './Content/Settings/Settings';
import Newcampain from './Content/Add/Newcampain';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Routes>
          <Route path="/" element={<DashboardMenu/>} />
          <Route path="credit" element={<Credit/>} />
          <Route path="notifications" element={<Notificatons />} />
          <Route path="settings" element={<Settings/>} />
          <Route path="add" element={<Newcampain/>} />
      </Routes>
    </div>
  )
}

export default Dashboard