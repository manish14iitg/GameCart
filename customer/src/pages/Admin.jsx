import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import LoginButton from "../components/LoginButton";

// Mock data for demonstration
const mockOrders = [
  {
    id: "ORD001",
    userId: "user1",
    customerName: "John Doe",
    customerEmail: "john@example.com",
    items: [
      {
        productName: "PlayStation 5",
        variantName: "Standard Edition",
        quantity: 1,
        price: 499.99,
      },
    ],
    totalAmount: 539.99,
    status: "paid",
    createdAt: new Date("2024-01-15"),
    shippingAddress: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
    },
  },
  {
    id: "ORD002",
    userId: "user2",
    customerName: "Jane Smith",
    customerEmail: "jane@example.com",
    items: [
      {
        productName: "Xbox Series X",
        variantName: "Matte Black",
        quantity: 1,
        price: 499.99,
      },
    ],
    totalAmount: 539.99,
    status: "shipped",
    createdAt: new Date("2024-01-14"),
    riderId: "rider1",
    riderName: "Rider 1",
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
      country: "USA",
    },
  },
];

const mockRiders = [
  {
    id: "rider1",
    name: "Rider 1",
    email: "rider1@example.com",
    activeOrders: 2,
  },
  {
    id: "rider2",
    name: "Rider 2",
    email: "rider2@example.com",
    activeOrders: 1,
  },
  {
    id: "rider3",
    name: "Rider 3",
    email: "rider3@example.com",
    activeOrders: 0,
  },
];

const Admin = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [selectedRider, setSelectedRider] = useState("");
  const [orderToShip, setOrderToShip] = useState("");

  const getStatusColor = (status) => {
    switch (status) {
      case "paid":
        return "bg-blue-500";
      case "shipped":
        return "bg-orange-500";
      case "delivered":
        return "bg-green-500";
      case "undelivered":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleShipOrder = (orderId) => {
    if (!selectedRider) {
      alert("Please select a rider first");
      return;
    }

    setOrders(
      orders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: "shipped",
              riderId: selectedRider,
              riderName:
                mockRiders.find((r) => r.id === selectedRider)?.name || "",
            }
          : order
      )
    );

    setOrderToShip("");
    setSelectedRider("");
  };

  return (
    <div className="min-h-screen bg-gaming-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage orders and assign riders</p>
        </div>

        <LoginButton />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-gaming-electric">
              {orders.length}
            </div>
            <div className="text-gray-400">Total Orders</div>
          </Card>
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-blue-400">
              {orders.filter((o) => o.status === "paid").length}
            </div>
            <div className="text-gray-400">Paid Orders</div>
          </Card>
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-orange-400">
              {orders.filter((o) => o.status === "shipped").length}
            </div>
            <div className="text-gray-400">Shipped Orders</div>
          </Card>
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-gaming-neon">
              {mockRiders.length}
            </div>
            <div className="text-gray-400">Active Riders</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders */}
          <div className="lg:col-span-2">
            <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Recent Orders
              </h2>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-gray-600 rounded-lg p-4"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-white font-medium">
                          Order #{order.id}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {order.customerName} - {order.customerEmail}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {order.createdAt.toLocaleDateString()}
                        </p>
                      </div>
                      <Badge
                        className={`${getStatusColor(order.status)} text-white`}
                      >
                        {order.status.toUpperCase()}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="text-sm text-gray-300">
                          {item.productName} ({item.variantName}) x
                          {item.quantity} - ${item.price}
                        </div>
                      ))}
                    </div>

                    <div className="mb-3">
                      <p className="text-sm text-gray-400">Shipping Address:</p>
                      <p className="text-sm text-gray-300">
                        {order.shippingAddress.street},{" "}
                        {order.shippingAddress.city},{" "}
                        {order.shippingAddress.state}{" "}
                        {order.shippingAddress.zipCode}
                      </p>
                    </div>

                    {order.riderName && (
                      <p className="text-sm text-gaming-electric mb-3">
                        Assigned to: {order.riderName}
                      </p>
                    )}

                    <Separator className="bg-gray-600 my-3" />

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-gaming-electric">
                        Total: ${order.totalAmount.toFixed(2)}
                      </span>

                      {order.status === "paid" && (
                        <Button
                          size="sm"
                          onClick={() => setOrderToShip(order.id)}
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                        >
                          Ship Order
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Riders */}
          <div>
            <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Available Riders
              </h2>
              <div className="space-y-3">
                {mockRiders.map((rider) => (
                  <div
                    key={rider.id}
                    className="border border-gray-600 rounded-lg p-3"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium">{rider.name}</h3>
                        <p className="text-gray-400 text-sm">{rider.email}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-gaming-electric text-gaming-electric"
                      >
                        {rider.activeOrders} active
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Ship Order Modal */}
        {orderToShip && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="bg-gaming-dark-secondary border-gray-700 p-6 max-w-md w-full mx-4">
              <h3 className="text-xl font-semibold text-white mb-4">
                Assign Rider
              </h3>
              <p className="text-gray-400 mb-4">
                Select a rider for Order #{orderToShip}
              </p>

              <div className="space-y-3 mb-6">
                {mockRiders.map((rider) => (
                  <button
                    key={rider.id}
                    onClick={() => setSelectedRider(rider.id)}
                    className={`w-full text-left p-3 rounded-lg border-2 transition-colors ${
                      selectedRider === rider.id
                        ? "border-gaming-electric bg-gaming-electric/10"
                        : "border-gray-600 hover:border-gray-400"
                    }`}
                  >
                    <div className="text-white font-medium">{rider.name}</div>
                    <div className="text-gray-400 text-sm">
                      {rider.activeOrders} active orders
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={() => handleShipOrder(orderToShip)}
                  disabled={!selectedRider}
                  className="gaming-button flex-1"
                >
                  Assign & Ship
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setOrderToShip("");
                    setSelectedRider("");
                  }}
                  className="border-gray-600 text-gray-300"
                >
                  Cancel
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
