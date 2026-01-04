// Header component
import React from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/components/Header.css';
import { FaSearch } from 'react-icons/fa';

// Top hero banner
const Header = () => {
    return (
        <header className="hero-header">
            <div className="hero-content">
                {/* Brand section */}
                <div className="hero-brand">
                    <div className="hero-logo">
                        <img src="/favicon.png" alt="Prime State Logo" className="hero-logo-img" />
                    </div>
                    <div className="hero-text">
                        <h1 className="hero-title">Prime State</h1>
                        <p className="hero-subtitle">Find Your Dream Place</p>
                    </div>
                </div>
                {/* Tagline pill */}
                <div className="hero-tagline">
                    <FaSearch className="tagline-icon" />
                    <span>Discover exceptional properties tailored to your lifestyle</span>
                </div>
                {/* Mobile theme toggle */}
                <div className="header-theme-toggle">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
};

export default Header;
