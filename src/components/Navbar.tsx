
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'py-3 glass' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-semibold tracking-tight">ReferConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-brand-600">
              Home
            </Link>
            <Link to="#features" className="text-sm font-medium transition-colors hover:text-brand-600">
              Features
            </Link>
            <Link to="#how-it-works" className="text-sm font-medium transition-colors hover:text-brand-600">
              How It Works
            </Link>
            <Link to="#benefits" className="text-sm font-medium transition-colors hover:text-brand-600">
              Benefits
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-hover-effect">
              Sign In
            </Button>
            <Button className="bg-brand-600 hover:bg-brand-700 btn-hover-effect">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 py-5' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-6">
          <nav className="flex flex-col space-y-4 mb-6">
            <Link 
              to="/" 
              className="text-sm font-medium py-2 transition-colors hover:text-brand-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="#features" 
              className="text-sm font-medium py-2 transition-colors hover:text-brand-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="#how-it-works" 
              className="text-sm font-medium py-2 transition-colors hover:text-brand-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="#benefits" 
              className="text-sm font-medium py-2 transition-colors hover:text-brand-600"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefits
            </Link>
          </nav>
          
          <div className="flex flex-col space-y-3 pb-6">
            <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full bg-brand-600 hover:bg-brand-700">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
