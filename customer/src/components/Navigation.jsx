import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-gaming-dark-secondary border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="gaming-gradient w-8 h-8 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-gaming-electric">
              GameCart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-gaming-electric transition-colors px-3 py-2"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-300 hover:text-gaming-electric transition-colors px-3 py-2"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-300 hover:text-gaming-electric transition-colors px-3 py-2"
            >
              Cart
              {totalItems > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gaming-neon text-black text-xs">
                  {totalItems}
                </Badge>
              )}
            </Link>
            <Link
              to="/admin"
              className="text-gray-300 hover:text-gaming-electric transition-colors px-3 py-2"
            >
              Admin
            </Link>
            <Link
              to="/rider"
              className="text-gray-300 hover:text-gaming-electric transition-colors px-3 py-2"
            >
              Rider
            </Link>
            <Button
              variant="outline"
              className="border-gaming-electric text-gaming-electric hover:bg-gaming-electric hover:text-black ml-4"
            >
              Sign In
            </Button>
          </div>

          {/* Mobile menu button - only visible on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-gaming-electric"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-gaming-electric transition-colors"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-300 hover:text-gaming-electric transition-colors"
              >
                Products
              </Link>
              <Link
                to="/cart"
                className="flex items-center text-gray-300 hover:text-gaming-electric transition-colors"
              >
                Cart
                {totalItems > 0 && (
                  <Badge className="ml-2 bg-gaming-neon text-black text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Link>
              <Link
                to="/admin"
                className="text-gray-300 hover:text-gaming-electric transition-colors"
              >
                Admin
              </Link>
              <Link
                to="/rider"
                className="text-gray-300 hover:text-gaming-electric transition-colors"
              >
                Rider
              </Link>
              <Button
                variant="outline"
                className="border-gaming-electric text-gaming-electric hover:bg-gaming-electric hover:text-black w-fit"
              >
                Sign In
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
