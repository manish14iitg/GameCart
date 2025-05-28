import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gaming-electric/20 to-gaming-purple/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-gaming-neon text-black mb-4 animate-glow">
            Next-Gen Gaming Available Now
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Power Up Your
            <br />
            <span className="gaming-gradient bg-clip-text text-transparent">
              Gaming Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest gaming consoles from PlayStation, Xbox,
            Nintendo, and more. Experience cutting-edge technology with
            lightning-fast loading, stunning 4K graphics, and immersive
            gameplay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button className="gaming-button text-lg px-8 py-6">
                Shop Now
              </Button>
            </Link>
            <Link to="/products">
              <Button
                variant="outline"
                className="border-gaming-electric text-gaming-electric hover:bg-gaming-electric hover:text-black text-lg px-8 py-6"
              >
                Browse Catalog
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gaming-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose GameCart?
            </h2>
            <p className="text-gray-400 text-lg">
              The ultimate destination for gaming enthusiasts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="gaming-card text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-400">
                Free delivery on all gaming console orders. Get your gear
                delivered fast and secure.
              </p>
            </Card>

            <Card className="gaming-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Secure Checkout
              </h3>
              <p className="text-gray-400">
                Shop with confidence using our encrypted payment system and
                buyer protection.
              </p>
            </Card>

            <Card className="gaming-card text-center">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Latest Consoles
              </h3>
              <p className="text-gray-400">
                Get the newest gaming consoles and accessories from top brands
                worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured{" "}
              <span className="gaming-gradient bg-clip-text text-transparent">
                Consoles
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover our most popular gaming systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button className="gaming-button text-lg px-8 py-6">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gaming-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gaming-electric mb-2">
                50K+
              </div>
              <div className="text-gray-400">Happy Gamers</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gaming-electric mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gaming-electric mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gaming-electric mb-2">
                100+
              </div>
              <div className="text-gray-400">Products</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of gamers who trust GameCart for their console needs.
          </p>
          <Link to="/products">
            <Button className="gaming-button text-lg px-12 py-6">
              Start Shopping
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
