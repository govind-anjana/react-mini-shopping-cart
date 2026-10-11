
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Mouse", price: 20, quantity: 1 },
    { id: 2, name: "Laptop", price: 800, quantity: 1 },
    { id: 3, name: "Keyboard", price: 16, quantity: 1 },
    { id: 4, name: "LCD", price: 400, quantity: 1 },
    { id: 5, name: "Keyboard Protector", price: 50, quantity: 1 },
    { id: 6, name: "Touch Pad", price: 90, quantity: 1 },
  ]);

  const increaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQuantity = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#080D18] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0B1220]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="/"
            className="rounded-sm text-2xl font-black tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B1220]"
          >
            NEXORA<span className="text-cyan-400">.</span>
          </a>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="text-slate-300">Your Cart</span>
            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-cyan-400 px-1 text-xs font-bold text-slate-950">
              {totalQuantity}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Page heading */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            YOUR SELECTION
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Shopping Cart
          </h1>

          <p className="mt-3 text-sm text-slate-400 sm:text-base">
            Manage your products and review your order.
          </p>
        </div>

        {items.length === 0 ? (
          <section className="rounded-3xl border border-white/10 bg-[#111A2A] px-6 py-16 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-3xl">
              🛍️
            </div>

            <h2 className="text-2xl font-bold">Your cart is empty</h2>

            <p className="mt-2 text-slate-400">
              Add some products to get started.
            </p>
          </section>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_340px]">
            {/* Products */}
            <section className="min-w-0">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Your Items</h2>

                <span className="text-sm text-slate-400">
                  {items.length} {items.length === 1 ? "product" : "products"}
                </span>
              </div>

              <ShoppingList
                items={items}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeItem={removeItem}
              />
            </section>

            {/* Order summary */}
            <aside className="rounded-3xl border border-white/10 bg-[#111A2A] p-6 shadow-xl shadow-black/20 lg:sticky lg:top-8">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <p className="mt-1 text-sm text-slate-400">
                Review your purchase
              </p>

              <div className="my-6 border-t border-white/10" />

              <div className="flex justify-between gap-3 text-sm">
                <span className="text-slate-400">Items ({totalQuantity})</span>

                <span className="font-medium">
                  ${total.toLocaleString("en-US")}
                </span>
              </div>

              <div className="mt-4 flex justify-between gap-3 text-sm">
                <span className="text-slate-400">Shipping</span>

                <span className="font-medium text-emerald-400">Free</span>
              </div>

              <div className="my-6 border-t border-white/10" />

              <div className="flex items-end justify-between gap-3">
                <span className="text-slate-300">Grand Total</span>

                <span className="text-3xl font-black tracking-tight text-cyan-400">
                  ${total.toLocaleString("en-US")}
                </span>
              </div>

              <button
                disabled={items.length === 0}
                onClick={() => alert("Checkout feature coming soon!")}
                className="mt-7 w-full rounded-xl bg-cyan-400 px-5 py-4 font-bold text-slate-950 transition duration-300 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111A2A] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Proceed to Checkout
                <span className="ml-2">→</span>
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Secure checkout experience
              </p>
            </aside>
          </div>
        )}
      </main>

      <footer className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500">
        © 2026 NEXORA. Built with React.
      </footer>
    </div>
  );
};

export default App;
