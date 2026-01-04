import { PawPrint, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm text-warm-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-8 w-8" />
              <span className="font-display text-2xl font-bold">
                Pawcation
              </span>
            </a>
            <p className="font-body text-warm-foreground/80 text-sm leading-relaxed mb-4">
              Travel plans approved by paws, not just people. Making every journey tail-waggingly good.
            </p>
            <p className="font-body text-sm flex items-center gap-1 text-warm-foreground/70">
              Made with <Heart className="h-4 w-4 fill-current text-accent" /> for dogs everywhere
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Pet-Friendly Airlines
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Dog-Approved Hotels
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Destination Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Pet Safety Tips
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-3 font-body text-sm">
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-warm-foreground/80 hover:text-warm-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-warm-foreground/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-warm-foreground/70">
              © 2024 Pawcation. All rights reserved.
            </p>
            <p className="font-body text-sm text-warm-foreground/80 flex items-center gap-2">
              <PawPrint className="h-4 w-4" />
              Paw-tested. Human-assisted.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
