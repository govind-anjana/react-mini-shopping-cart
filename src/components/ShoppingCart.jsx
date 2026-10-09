
import React from "react";

const ProductCard = (props) => {
  const totalVal = props.item.price * props.item.quantity;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#151F32] to-[#0D1422] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/20 sm:p-6">

      {/* Top section */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-2xl transition group-hover:bg-cyan-400/15">
            {props.item.name === "Laptop"
              ? "💻"
              : props.item.name === "Mouse"
              ? "🖱️"
              : props.item.name === "LCD"
              ? "🖥️"
              : props.item.name === "KeyBoard"
              ? "⌨️"
              : props.item.name === "Touch Pad"
              ? "🔲"
              : "🎧"}
          </div>

          <div className="min-w-0">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              NEXORA COLLECTION
            </p>

            <h2 className="break-words text-base font-bold text-white sm:text-lg">
              {props.item.name}
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              ${props.item.price.toLocaleString("en-US")} per item
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-lg border border-emerald-400/15 bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-400">
          IN STOCK
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-white/[0.08]" />

      {/* Quantity controls */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs text-slate-400">Quantity</p>

          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => props.decreaseQuantity(props.item.id)}
              disabled={props.item.quantity <= 1}
              aria-label={`Decrease ${props.item.name} quantity`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              −
            </button>

            <span className="min-w-5 text-center font-bold tabular-nums">
              {props.item.quantity}
            </span>

            <button
              onClick={() => props.increaseQuantity(props.item.id)}
              aria-label={`Increase ${props.item.name} quantity`}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-lg font-bold text-slate-950 transition hover:bg-cyan-300 active:scale-95"
            >
              +
            </button>
          </div>
        </div>

        {/* Item total */}
        <div className="text-right">
          <p className="text-xs text-slate-400">Item Total</p>

          <p className="mt-1 text-xl font-black tracking-tight text-cyan-400 sm:text-2xl">
            ${totalVal.toLocaleString("en-US")}
          </p>
        </div>
      </div>

      {/* Remove item */}
      <div className="mt-5 flex justify-end">
        <button
          onClick={() => props.removeItem(props.item.id)}
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold text-slate-400 transition hover:bg-red-400/10 hover:text-red-400"
        >
          <span aria-hidden="true">✕</span>
          Remove item
        </button>
      </div>
    </article>
  );
};

export default ProductCard;

