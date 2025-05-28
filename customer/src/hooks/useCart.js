import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCart = create()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, variant, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) =>
              item.productId === product.id && item.variantId === variant.id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id && item.variantId === variant.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                variantId: variant.id,
                quantity,
                product,
                variant,
              },
            ],
          };
        });
      },

      removeItem: (productId, variantId) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(item.productId === productId && item.variantId === variantId)
          ),
        }));
      },

      updateQuantity: (productId, variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.variantId === variantId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.variant.price * item.quantity,
          0
        );
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);
