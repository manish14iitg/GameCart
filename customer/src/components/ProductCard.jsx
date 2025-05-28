import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }) => {
  const minPrice = Math.min(...product.variants.map((v) => v.price));
  const maxPrice = Math.max(...product.variants.map((v) => v.price));

  const priceDisplay =
    minPrice === maxPrice
      ? `$${minPrice.toFixed(2)}`
      : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;

  return (
    <div className="gaming-card group cursor-pointer">
      <Link to={`/product/${product.id}`}>
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <Badge variant="destructive">Out of Stock</Badge>
            </div>
          )}
          <div className="absolute top-2 left-2">
            <Badge className="bg-gaming-electric text-black">
              {product.brand}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-gaming-electric transition-colors">
              {product.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold text-gaming-electric">
                {priceDisplay}
              </span>
              <p className="text-xs text-gray-400">
                {product.variants.length} variant
                {product.variants.length > 1 ? "s" : ""}
              </p>
            </div>

            <Button
              className="gaming-button"
              disabled={!product.inStock}
              size="sm"
            >
              View Details
            </Button>
          </div>

          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs border-gray-600 text-gray-300"
              >
                {feature}
              </Badge>
            ))}
            {product.features.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs border-gray-600 text-gray-300"
              >
                +{product.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
