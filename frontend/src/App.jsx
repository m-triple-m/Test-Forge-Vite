import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppProvider } from './Context/teacherContext';
import { AdminProvider } from './Context/adminContext';
import { StudentProvider } from './Context/studentContext';
import MainLayout from './(main)';
import Home from './(main)/home';
import About from './(main)/about';
import AdminLogin from './(main)/adminLogin';
import AdminSignup from './(main)/adminSignup';
import Contact from './(main)/contact';
import FormSubmittedPage from './(main)/form-submitted';
import FormLink from './(main)/link/Link';

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <AdminProvider>
          <StudentProvider>
            <Routes>
              <Route path="main" element={<MainLayout />} >
                <Route path="home" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="adminlogin" element={<AdminLogin />} />
                <Route path="adminsignup" element={<AdminSignup />} />
                <Route path="contact" element={<Contact />} />
                <Route path="form-submitted" element={<FormSubmittedPage />} />
                <Route path="link/:id" element={<FormLink />} />
                <Route path="link/:id" element={<FormLink />} />
              </Route>
            </Routes>
          </StudentProvider>
        </AdminProvider>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App