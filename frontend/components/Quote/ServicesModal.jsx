"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import serviceCategories from "@/constants/serviceCategories.json";

export default function ServicesModal({ isOpen, onClose, selectedServices, onApply }) {
  const [tempSelected, setTempSelected] = useState(selectedServices || []);

  const toggleTemp = (service) => {
    if (tempSelected.includes(service)) {
      setTempSelected(tempSelected.filter(s => s !== service));
    } else {
      setTempSelected([...tempSelected, service]);
    }
  };

  const handleApply = () => {
    onApply(tempSelected);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-[600px] h-[85vh] md:h-[600px] bg-[#FDFCF0] border-2 border-[#D2BD69] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-[#D2BD69]/20 bg-white">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#043927]">Select Services You Need</h3>
                  <p className="text-sm text-gray-500">Choose all services you need help with</p>
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-[#043927]" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {serviceCategories.categories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <h4 className="text-md font-bold text-[#043927] uppercase tracking-wider border-b-2 border-[#D2BD69]/30 pb-2 inline-block">
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.services.map((service) => {
                      const isChecked = tempSelected.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleTemp(service)}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                            isChecked
                              ? "bg-[#D2BD69] border-[#D2BD69] text-[#043927] shadow-md"
                              : "bg-white border-gray-200 text-gray-600 hover:border-[#D2BD69]/50"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                            isChecked ? "bg-[#043927] border-[#043927]" : "border-gray-300 bg-white"
                          }`}>
                            {isChecked && <Check className="w-3 h-3 text-[#D2BD69]" strokeWidth={4} />}
                          </div>
                          <span className="text-sm font-bold">{service}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-6 bg-white border-t border-[#D2BD69]/20">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-[#043927] font-bold">
                  {tempSelected.length} {tempSelected.length === 1 ? "Service" : "Services"} Selected
                </div>
                <button
                  type="button"
                  onClick={handleApply}
                  disabled={tempSelected.length === 0}
                  className="w-full sm:flex-1 bg-[#D2BD69] text-[#043927] font-bold py-4 px-8 rounded-xl hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  APPLY SERVICES
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
