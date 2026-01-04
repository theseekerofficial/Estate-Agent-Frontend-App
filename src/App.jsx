// App styles and global tokens
import './App.css';
import './index.css';
import React from 'react';

// Context providers
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Layout components
import Header from './components/Header';
import Footer from './components/Footer';
import SearchPage from './pages/SearchPage';
import ThemeToggle from './components/ThemeToggle';
import PropertyDetails from './pages/PropertyDetails';

// Root app component
function App() {
    return (
        <ThemeProvider>
            <FavoritesProvider>
                <Router>
                    {/* Main layout wrapper */}
                    <div className="app-container">
                        <Header />
                        <main className="main-content">
                            {/* Page routes */}
                            <Routes>
                                <Route path="/" element={<SearchPage />} />
                                <Route path="/property/:id" element={<PropertyDetails />} />
                            </Routes>
                        </main>
                        <Footer />
                        <ThemeToggle />
                    </div>
                    {/* Global toast container */}
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                    />
                </Router>
            </FavoritesProvider>
        </ThemeProvider>
    );
}

// Favicon link: https://www.flaticon.com/free-icons/real-estate-agent
// Images from free to use sites: https://pexels.com, https://unsplash.com

export default App;