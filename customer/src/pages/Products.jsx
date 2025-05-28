import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const brands = ["all", ...Array.from(new Set(products.map((p) => p.brand)))];

  const filteredProducts = products.filter(
    (product) => selectedBrand === "all" || product.brand === selectedBrand
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (
          Math.min(...a.variants.map((v) => v.price)) -
          Math.min(...b.variants.map((v) => v.price))
        );
      case "price-high":
        return (
          Math.max(...b.variants.map((v) => v.price)) -
          Math.max(...a.variants.map((v) => v.price))
        );
      case "name":
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-gaming-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Gaming{" "}
            <span className="gaming-gradient bg-clip-text text-transparent">
              Consoles
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the latest gaming consoles and experience next-generation
            gaming at its finest.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-300 font-medium">Brand:</span>
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBrand(brand)}
                className={
                  selectedBrand === brand
                    ? "gaming-button"
                    : "border-gray-600 text-gray-300 hover:border-gaming-electric"
                }
              >
                {brand === "all" ? "All Brands" : brand}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-300 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gaming-dark-secondary border border-gray-600 text-white rounded-lg px-3 py-1 focus:border-gaming-electric focus:outline-none"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-8 flex items-center gap-4">
          <Badge className="bg-gaming-electric text-black">
            {sortedProducts.length} Console
            {sortedProducts.length !== 1 ? "s" : ""} Available
          </Badge>
          <Badge
            variant="outline"
            className="border-gaming-purple text-gaming-purple"
          >
            {sortedProducts.filter((p) => p.inStock).length} In Stock
          </Badge>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg">
              No products found for the selected filters.
            </div>
            <Button
              onClick={() => {
                setSelectedBrand("all");
                setSortBy("name");
              }}
              className="gaming-button mt-4"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
