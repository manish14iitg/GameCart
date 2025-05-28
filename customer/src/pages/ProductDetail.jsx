import { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedVariant, setSelectedVariant] = useState(
    product?.variants[0] || null
  );
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-gaming-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-400">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    addItem(product, selectedVariant, quantity);
    toast({
      title: "Added to Cart",
      description: `${product.name} (${selectedVariant.name}) x${quantity} added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gaming-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={selectedVariant?.image || product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <Badge variant="destructive" className="text-lg px-4 py-2">
                    Out of Stock
                  </Badge>
                </div>
              )}
            </div>

            {/* Variant Images */}
            {product.variants.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedVariant?.id === variant.id
                        ? "border-gaming-electric"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={variant.image || product.image}
                      alt={variant.name}
                      className="w-full h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="bg-gaming-electric text-black mb-2">
                {product.brand}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                {product.name}
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selection */}
            <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Choose Variant
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.inStock}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedVariant?.id === variant.id
                        ? "border-gaming-electric bg-gaming-electric/10"
                        : variant.inStock
                        ? "border-gray-600 hover:border-gray-400"
                        : "border-gray-700 opacity-50 cursor-not-allowed"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-white font-medium">
                          {variant.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {variant.color && `Color: ${variant.color}`}
                          {variant.storage && ` • Storage: ${variant.storage}`}
                          {variant.type && ` • Type: ${variant.type}`}
                          {variant.size && ` • Size: ${variant.size}`}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-gaming-electric font-bold text-lg">
                          ${variant.price.toFixed(2)}
                        </div>
                        {!variant.inStock && (
                          <Badge variant="destructive" className="text-xs">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-white font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-white hover:bg-gray-700"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 text-white bg-gaming-dark-secondary">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-white hover:bg-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleAddToCart}
                  disabled={!selectedVariant?.inStock || !product.inStock}
                  className="gaming-button flex-1 text-lg py-6"
                >
                  Add to Cart - $
                  {selectedVariant
                    ? (selectedVariant.price * quantity).toFixed(2)
                    : "0.00"}
                </Button>
              </div>
            </div>

            {/* Features */}
            <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-1.5 h-1.5 bg-gaming-electric rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
