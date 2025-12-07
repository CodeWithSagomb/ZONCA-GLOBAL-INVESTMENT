import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { GoogleAnalytics, trackPageView } from './components/common/GoogleAnalytics';
import { OrganizationSchema, LocalBusinessSchema } from './components/common/StructuredData';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { FounderPage } from './pages/FounderPage';
import { ProductDetail } from './components/products/ProductDetail';
import { ViewType, Product } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Scroll to top on view change and track page views
  useEffect(() => {
    window.scrollTo(0, 0);

    // Track page view in Google Analytics
    const pagePath = view === 'home' ? '/' :
                     view === 'product-detail' ? `/products/${selectedProduct?.id}` :
                     `/${view}`;
    trackPageView(pagePath);
  }, [view, selectedProduct]);

  return (
    <HelmetProvider>
      <GoogleAnalytics />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <div className="min-h-screen flex flex-col font-sans bg-white text-slate-900 selection:bg-zonca-red selection:text-white">
        <TopBar />
        <Navbar view={view} setView={setView} />

      <main className="flex-grow">
        {view === 'home' && <HomePage setView={setView} setProduct={setSelectedProduct} />}
        {view === 'catalog' && <CatalogPage setProduct={setSelectedProduct} setView={setView} />}
        {view === 'services' && <ServicesPage />}
        {view === 'projects' && <ProjectsPage />}
        {view === 'contact' && <ContactPage />}
        {view === 'founder' && <FounderPage setView={setView} />}
        {view === 'product-detail' && selectedProduct && (
          <ProductDetail product={selectedProduct} setView={setView} />
        )}
      </main>

        <Footer setView={setView} />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  );
};

export default App;
