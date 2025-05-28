import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Mock data for rider orders
const mockRiderOrders = [
  {
    id: "ORD002",
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
    shippingAddress: {
      street: "456 Oak Ave",
      city: "Los Angeles",
      state: "CA",
      zipCode: "90210",
      country: "USA",
    },
  },
  {
    id: "ORD003",
    customerName: "Mike Johnson",
    customerEmail: "mike@example.com",
    items: [
      {
        productName: "Nintendo Switch OLED",
        variantName: "White",
        quantity: 1,
        price: 349.99,
      },
    ],
    totalAmount: 379.99,
    status: "shipped",
    createdAt: new Date("2024-01-13"),
    riderId: "rider1",
    shippingAddress: {
      street: "789 Pine St",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "USA",
    },
  },
];

const riders = [
  { id: "rider1", name: "Rider 1" },
  { id: "rider2", name: "Rider 2" },
  { id: "rider3", name: "Rider 3" },
];

const Rider = () => {
  const [selectedRider, setSelectedRider] = useState("rider1");
  const [orders, setOrders] = useState(mockRiderOrders);

  const handleStatusUpdate = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
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

  const riderOrders = orders.filter((order) => order.riderId === selectedRider);

  return (
    <div className="min-h-screen bg-gaming-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Rider Dashboard
          </h1>
          <p className="text-gray-400">Manage your delivery orders</p>
        </div>

        {/* Rider Selection */}
        <Card className="bg-gaming-dark-secondary border-gray-700 p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Select Rider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {riders.map((rider) => (
              <button
                key={rider.id}
                onClick={() => setSelectedRider(rider.id)}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  selectedRider === rider.id
                    ? "border-gaming-electric bg-gaming-electric/10"
                    : "border-gray-600 hover:border-gray-400"
                }`}
              >
                <div className="text-white font-medium">{rider.name}</div>
                <div className="text-gray-400 text-sm">
                  {orders.filter((o) => o.riderId === rider.id).length} orders
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-gaming-electric">
              {riderOrders.length}
            </div>
            <div className="text-gray-400">Total Orders</div>
          </Card>
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-orange-400">
              {riderOrders.filter((o) => o.status === "shipped").length}
            </div>
            <div className="text-gray-400">Pending Deliveries</div>
          </Card>
          <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
            <div className="text-2xl font-bold text-green-400">
              {riderOrders.filter((o) => o.status === "delivered").length}
            </div>
            <div className="text-gray-400">Completed Deliveries</div>
          </Card>
        </div>

        {/* Orders */}
        <Card className="bg-gaming-dark-secondary border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            Orders for {riders.find((r) => r.id === selectedRider)?.name}
          </h2>

          {riderOrders.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">No orders assigned to this rider</p>
            </div>
          ) : (
            <div className="space-y-4">
              {riderOrders.map((order) => (
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
                        {item.productName} ({item.variantName}) x{item.quantity}{" "}
                        - ${item.price}
                      </div>
                    ))}
                  </div>

                  <div className="mb-3">
                    <p className="text-sm text-gray-400">Delivery Address:</p>
                    <p className="text-sm text-gray-300">
                      {order.shippingAddress.street},{" "}
                      {order.shippingAddress.city},{order.shippingAddress.state}{" "}
                      {order.shippingAddress.zipCode}
                    </p>
                  </div>

                  <Separator className="bg-gray-600 my-3" />

                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gaming-electric">
                      Total: ${order.totalAmount.toFixed(2)}
                    </span>

                    {order.status === "shipped" && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() =>
                            handleStatusUpdate(order.id, "delivered")
                          }
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          Mark Delivered
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleStatusUpdate(order.id, "undelivered")
                          }
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          Mark Undelivered
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Rider;
