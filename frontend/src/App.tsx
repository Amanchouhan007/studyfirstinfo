import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import PromoPopup from './components/layout/PromoPopup';
import HomePage from './pages/HomePage';
import CounselorsPage from './pages/CounselorsPage';
import AuthPage from './pages/AuthPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ApplicationPage from './pages/ApplicationPage';
import AppointmentsPage from './pages/AppointmentsPage';
import DocumentsPage from './pages/DocumentsPage';
import ScholarshipsPage from './pages/ScholarshipsPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';
import AdminPage from './pages/AdminPage';
import EventsPage from './pages/EventsPage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import CountriesPage from './pages/CountriesPage';
import ServicesPage from './pages/ServicesPage';
import CareersPage from './pages/CareersPage';
import PathwayPage from './pages/PathwayPage';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        {/* Suppress Navbar on Dashboard, Admin, and Auth routes */}
        <Routes>
          <Route path="/dashboard" element={null} />
          <Route path="/profile" element={null} />
          <Route path="/application" element={null} />
          <Route path="/appointments" element={null} />
          <Route path="/documents" element={null} />
          <Route path="/notifications" element={null} />
          <Route path="/settings" element={null} />
          <Route path="/admin" element={null} />
          <Route path="/auth" element={null} />
          <Route path="/forgot-password" element={null} />
          <Route path="*" element={<Navbar />} />
        </Routes>
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/countries" element={<CountriesPage />} />
            <Route path="/pathways" element={<PathwayPage />} />
            <Route path="/pathways/:id" element={<PathwayPage />} />
            <Route path="/pathway/:id" element={<PathwayPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/counselors" element={<CounselorsPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/application" element={<ApplicationPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/scholarships" element={<ScholarshipsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>

        {/* Suppress Footer on Dashboard, Admin, and Auth routes */}
        <Routes>
          <Route path="/dashboard" element={null} />
          <Route path="/profile" element={null} />
          <Route path="/application" element={null} />
          <Route path="/appointments" element={null} />
          <Route path="/documents" element={null} />
          <Route path="/notifications" element={null} />
          <Route path="/settings" element={null} />
          <Route path="/admin" element={null} />
          <Route path="/auth" element={null} />
          <Route path="/forgot-password" element={null} />
          <Route path="*" element={<Footer />} />
        </Routes>
        <Routes>
          <Route path="/dashboard" element={null} />
          <Route path="/profile" element={null} />
          <Route path="/application" element={null} />
          <Route path="/appointments" element={null} />
          <Route path="/documents" element={null} />
          <Route path="/notifications" element={null} />
          <Route path="/settings" element={null} />
          <Route path="/admin" element={null} />
          <Route path="/auth" element={null} />
          <Route path="/forgot-password" element={null} />
          <Route path="*" element={<PromoPopup />} />
        </Routes>
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

export default App;
