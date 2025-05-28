
export const products = [
  {
    id: "ps5",
    name: "PlayStation 5",
    brand: "Sony",
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800",
    price: 499.99,
    inStock: true,
    features: [
      "Ultra-high speed SSD",
      "Ray tracing support",
      "4K gaming up to 120fps",
      "3D Audio technology",
      "Haptic feedback controller",
      "Backward compatibility"
    ],
    variants: [
      {
        id: "ps5-standard",
        name: "Standard Edition",
        price: 499.99,
        color: "White",
        storage: "825GB SSD",
        inStock: true,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "ps5-digital",
        name: "Digital Edition",
        price: 399.99,
        color: "White",
        storage: "825GB SSD",
        inStock: true,
        image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "xbox-series-x",
    name: "Xbox Series X",
    brand: "Microsoft",
    description: "The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=800",
    price: 499.99,
    inStock: true,
    features: [
      "12 Teraflops GPU",
      "Custom NVME SSD",
      "Quick Resume",
      "Smart Delivery",
      "4K gaming at 60fps",
      "DirectX ray tracing"
    ],
    variants: [
      {
        id: "xbox-x-black",
        name: "Xbox Series X",
        price: 499.99,
        color: "Matte Black",
        storage: "1TB SSD",
        inStock: true,
        image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "xbox-s-white",
        name: "Xbox Series S",
        price: 299.99,
        color: "Robot White",
        storage: "512GB SSD",
        inStock: true,
        image: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef33?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "nintendo-switch-oled",
    name: "Nintendo Switch OLED",
    brand: "Nintendo",
    description: "Play at home or on the go with a vibrant 7-inch OLED screen that makes colors pop. Enjoy enhanced audio in handheld and tabletop modes.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
    price: 349.99,
    inStock: true,
    features: [
      "7-inch OLED screen",
      "Enhanced audio",
      "64GB internal storage",
      "Adjustable stand",
      "Dock with wired LAN port",
      "Joy-Con controllers included"
    ],
    variants: [
      {
        id: "switch-oled-white",
        name: "OLED Model White",
        price: 349.99,
        color: "White",
        storage: "64GB",
        inStock: true,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "switch-oled-neon",
        name: "OLED Model Neon",
        price: 349.99,
        color: "Neon Blue/Red",
        storage: "64GB",
        inStock: true,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "switch-lite-coral",
        name: "Switch Lite Coral",
        price: 199.99,
        color: "Coral",
        storage: "32GB",
        inStock: true,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "steam-deck",
    name: "Steam Deck",
    brand: "Valve",
    description: "Powerful handheld gaming PC that lets you play your Steam library anywhere. Features a custom AMD APU and runs SteamOS.",
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=800",
    price: 399.99,
    inStock: true,
    features: [
      "Custom AMD APU",
      "7-inch touchscreen",
      "SteamOS",
      "Full PC gaming",
      "Expandable storage",
      "Bluetooth & WiFi"
    ],
    variants: [
      {
        id: "steam-deck-64gb",
        name: "64GB eMMC",
        price: 399.99,
        color: "Black",
        storage: "64GB eMMC",
        inStock: true,
        image: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "steam-deck-256gb",
        name: "256GB NVMe SSD",
        price: 529.99,
        color: "Black",
        storage: "256GB SSD",
        inStock: true,
        image: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "steam-deck-512gb",
        name: "512GB NVMe SSD",
        price: 649.99,
        color: "Black",
        storage: "512GB SSD",
        inStock: false,
        image: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "asus-rog-ally",
    name: "ASUS ROG Ally",
    brand: "ASUS",
    description: "Powerful Windows 11 handheld gaming device with AMD Ryzen Z1 Extreme processor and 7-inch 120Hz display.",
    image: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=800",
    price: 699.99,
    inStock: true,
    features: [
      "AMD Ryzen Z1 Extreme",
      "7-inch 120Hz display",
      "Windows 11",
      "ROG Armoury Crate",
      "WiFi 6E",
      "USB-C charging"
    ],
    variants: [
      {
        id: "rog-ally-white",
        name: "ROG Ally White",
        price: 699.99,
        color: "White",
        storage: "512GB SSD",
        inStock: true,
        image: "https://images.unsplash.com/photo-1640955014216-75201056c829?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "meta-quest-3",
    name: "Meta Quest 3",
    brand: "Meta",
    description: "Mixed reality headset that transforms your home into an immersive gaming arena. Play in full color passthrough or pure virtual reality.",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&q=80&w=800",
    price: 499.99,
    inStock: true,
    features: [
      "Mixed reality",
      "4K+ Infinite Display",
      "Snapdragon XR2 Gen 2",
      "Touch Plus controllers",
      "Full color passthrough",
      "Hand tracking"
    ],
    variants: [
      {
        id: "quest-3-128gb",
        name: "128GB",
        price: 499.99,
        color: "White",
        storage: "128GB",
        inStock: true,
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "quest-3-512gb",
        name: "512GB",
        price: 649.99,
        color: "White",
        storage: "512GB",
        inStock: true,
        image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "nintendo-switch-pro-controller",
    name: "Nintendo Switch Pro Controller",
    brand: "Nintendo",
    description: "Take your game sessions up a notch with the Pro Controller. Includes motion controls, HD rumble, built-in amiibo functionality, and more.",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800",
    price: 69.99,
    inStock: true,
    features: [
      "Motion controls",
      "HD rumble",
      "Built-in amiibo",
      "40-hour battery",
      "Bluetooth wireless",
      "USB-C charging"
    ],
    variants: [
      {
        id: "pro-controller-black",
        name: "Pro Controller Black",
        price: 69.99,
        color: "Black",
        type: "Wireless Controller",
        inStock: true,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "pro-controller-special",
        name: "Pro Controller Special Edition",
        price: 79.99,
        color: "Monster Hunter Rise",
        type: "Wireless Controller",
        inStock: false,
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&q=80&w=800"
      }
    ]
  },
  {
    id: "xbox-wireless-controller",
    name: "Xbox Wireless Controller",
    brand: "Microsoft",
    description: "Experience the modernized design of the Xbox Wireless Controller featuring sculpted surfaces and refined geometry for enhanced comfort.",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800",
    price: 59.99,
    inStock: true,
    features: [
      "Hybrid D-pad",
      "Textured triggers",
      "Dedicated Share button",
      "3.5mm audio jack",
      "Bluetooth wireless",
      "USB-C charging"
    ],
    variants: [
      {
        id: "xbox-controller-carbon-black",
        name: "Carbon Black",
        price: 59.99,
        color: "Carbon Black",
        type: "Wireless Controller",
        inStock: true,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "xbox-controller-robot-white",
        name: "Robot White",
        price: 59.99,
        color: "Robot White",
        type: "Wireless Controller",
        inStock: true,
        image: "https://images.unsplash.com/photo-1605902711834-8b11c3e3ef33?auto=format&fit=crop&q=80&w=800"
      },
      {
        id: "xbox-controller-electric-volt",
        name: "Electric Volt",
        price: 64.99,
        color: "Electric Volt",
        type: "Wireless Controller",
        inStock: true,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=800"
      }
    ]
  }
];