import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/hooks/useCart";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gaming-dark py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h1 className="text-3xl font-bold text-white mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-gray-400 mb-8">
              Looks like you haven't added any gaming consoles yet.
            </p>
            <Link to="/products">
              <Button className="gaming-button">Browse Products</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gaming-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Shopping Cart</h1>
          <Button
            variant="outline"
            onClick={clearCart}
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card
                key={`${item.productId}-${item.variantId}`}
                className="bg-gaming-dark-secondary border-gray-700 p-6"
              >
                <div className="flex gap-4">
                  <img
                    src={item.variant.image || item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {item.product.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.variant.name}
                        </p>
                        <Badge className="bg-gaming-electric text-black text-xs mt-1">
                          {item.product.brand}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          removeItem(item.productId, item.variantId)
                        }
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                      >
                        Remove
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-gray-300">Qty:</span>
                        <div className="flex items-center border border-gray-600 rounded-lg">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variantId,
                                item.quantity - 1
                              )
                            }
                            className="px-3 py-1 text-white hover:bg-gray-700"
                          >
                            −
                          </button>
                          <span className="px-4 py-1 text-white bg-gaming-dark">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.variantId,
                                item.quantity + 1
                              )
                            }
                            className="px-3 py-1 text-white hover:bg-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-gaming-electric font-bold text-lg">
                          ${(item.variant.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-gray-400 text-sm">
                          ${item.variant.price.toFixed(2)} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gaming-dark-secondary border-gray-700 p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-white mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-300">
                  <span>
                    Subtotal (
                    {items.reduce((sum, item) => sum + item.quantity, 0)} items)
                  </span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping</span>
                  <span className="text-gaming-neon">FREE</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>

                <Separator className="bg-gray-600" />

                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-gaming-electric">
                    ${(getTotalPrice() * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="gaming-button w-full text-lg py-6">
                  Proceed to Checkout
                </Button>
                <Link to="/products">
                  <Button
                    variant="outline"
                    className="w-full border-gray-600 text-gray-300 hover:border-gaming-electric"
                  >
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center gap-2 text-gaming-neon text-sm">
                  <span>🚚</span>
                  <span>Free shipping on all orders</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gaming-neon text-sm mt-1">
                  <span>🔒</span>
                  <span>Secure checkout</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
