"use client";

import { motion } from "framer-motion";

export default function ToggleField({ name, label, value, setValue }) {
  return (
    <div className="flex-1">
      <label className="block text-sm font-bold text-[#043927] mb-3">
        {label}
      </label>
      <div className="flex gap-3">
        <motion.button
          type="button"
          className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all ${
            value === true
              ? "bg-secondary border-secondary text-primary"
              : "bg-white border-gray-200 text-gray-500 hover:border-secondary/50"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setValue(name, true)}
        >
          YES
        </motion.button>
        <motion.button
          type="button"
          className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all ${
            value === false
              ? "bg-gray-100 border-gray-200 text-gray-700"
              : "bg-white border-gray-200 text-gray-500 hover:border-secondary/50"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setValue(name, false)}
        >
          NO
        </motion.button>
      </div>
    </div>
  );
}
