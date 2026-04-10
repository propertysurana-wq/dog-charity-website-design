/**
 * App.tsx - Main Application Component
 * Routes configuration with error handling and lazy loading
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load all pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const RehomingPage = lazy(() => import('./pages/RehomingPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const DogCarePage = lazy(() => import('./pages/DogCarePage'));
const WhatWeDoPage = lazy(() => import('./pages/WhatWeDoPage'));
const WhoWeArePage = lazy(() => import('./pages/WhoWeArePage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

// Our Work Sub-pages
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'));
const DogProblemResolutionPage = lazy(() => import('./pages/DogProblemResolutionPage'));
const InjuryMedicalCarePage = lazy(() => import('./pages/InjuryMedicalCarePage'));
const VaccinationProgramsPage = lazy(() => import('./pages/VaccinationProgramsPage'));
const ShelterSupportPage = lazy(() => import('./pages/ShelterSupportPage'));

// Additional pages
const CommunitySupportPage = lazy(() => import('./pages/CommunitySupportPage'));
const AwarenessLawPage = lazy(() => import('./pages/AwarenessLawPage'));
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// New Pages
const EmergencyContactPage = lazy(() => import('./pages/EmergencyContactPage'));
const ShelterSafeCarePage = lazy(() => import('./pages/ShelterSafeCarePage'));
const VaccinationDiseasePage = lazy(() => import('./pages/VaccinationDiseasePage'));
const MissionVisionPage = lazy(() => import('./pages/MissionVisionPage'));
const AboutUsNewPage = lazy(() => import('./pages/AboutUsNewPage'));

/**
 * Loading component for Suspense fallback
 */
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <LoadingSpinner size="lg" />
  </div>
);

/**
 * Main App Component
 */
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/rehoming" element={<RehomingPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/donate" element={<DonatePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage />} />
              <Route path="/dog-care" element={<DogCarePage />} />
              
              {/* Information Pages */}
              <Route path="/what-we-do" element={<WhatWeDoPage />} />
              <Route path="/who-we-are" element={<WhoWeArePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              
              {/* Our Work Pages */}
              <Route path="/our-work" element={<OurWorkPage />} />
              <Route path="/our-work/dog-problem-resolution" element={<DogProblemResolutionPage />} />
              <Route path="/our-work/injury-medical-care" element={<InjuryMedicalCarePage />} />
              <Route path="/our-work/vaccination-programs" element={<VaccinationProgramsPage />} />
              <Route path="/our-work/shelter-support" element={<ShelterSupportPage />} />
              
              {/* Support & Awareness Pages */}
              <Route path="/community-support" element={<CommunitySupportPage />} />
              <Route path="/awareness-law" element={<AwarenessLawPage />} />
              <Route path="/contact-us" element={<ContactUsPage />} />
              
              {/* NEW Pages */}
              <Route path="/emergency-contact" element={<EmergencyContactPage />} />
              <Route path="/shelter-safe-care" element={<ShelterSafeCarePage />} />
              <Route path="/vaccination-disease-prevention" element={<VaccinationDiseasePage />} />
              <Route path="/mission-vision" element={<MissionVisionPage />} />
              <Route path="/about-us" element={<AboutUsNewPage />} />
              
              {/* 404 Not Found */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
