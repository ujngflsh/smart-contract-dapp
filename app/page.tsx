"use client";

import { useEffect, useState } from "react";
import { contract } from "@/lib/contract";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    async function loadMessage() {
      const msg = await contract.getMessage();
      setMessage(msg);
    }
    loadMessage();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="relative w-[380px] p-8 rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_0_40px_rgba(168,85,247,0.35)]">
        
        {/* Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-purple-500/20 blur-xl -z-10" />

        <h1 className="text-2xl font-semibold mb-1">
          Smart Contract Interaction
        </h1>

        <p className="text-sm text-zinc-400 mb-6">
          Ethereum · Sepolia Testnet
        </p>

        <div className="border border-purple-500/40 rounded-xl p-4 text-center mb-4">
          <p className="text-purple-400 text-lg font-medium">
            {message}
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-green-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Connected (Read Only)
        </div>
      </div>
    </main>
  );
}
