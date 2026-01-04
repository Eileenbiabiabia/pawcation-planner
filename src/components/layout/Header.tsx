import { Button } from "@/components/ui/button";
import { PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <PawPrint 
                className="h-8 w-8 text-primary transition-transform group-hover:scale-110 group-hover:rotate-12" 
              />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="font-display text-2xl font-bold text-foreground">
              Paw<span className="text-primary">cation</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="font-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#features" className="font-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#testimonials" className="font-body font-medium text-muted-foreground hover:text-foreground transition-colors">
              Paw Stories
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Log In
            </Button>
            <Button variant="paw" size="sm">
              <PawPrint className="h-4 w-4" />
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-2">
              <a 
                href="#how-it-works" 
                className="px-4 py-3 rounded-xl font-body font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="px-4 py-3 rounded-xl font-body font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-3 rounded-xl font-body font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                Paw Stories
              </a>
              <div className="flex gap-2 mt-4 px-4">
                <Button variant="ghost" size="sm" className="flex-1">
                  Log In
                </Button>
                <Button variant="paw" size="sm" className="flex-1">
                  <PawPrint className="h-4 w-4" />
                  Start Free
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
