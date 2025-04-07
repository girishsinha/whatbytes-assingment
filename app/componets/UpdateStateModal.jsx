"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";

export const UpdateStateModal = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    Score: 10,
    percentile: 30,
    rank: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseInt(value) || 0 });
  };

  const handleSubmit = () => {
    onSave(formData);

    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-xl text-black font-bold">
              Update scores
            </Dialog.Title>
            <button onClick={onClose}>
              <X size={20} />
            </button>
          </div>
          <form className="space-y-4">
            {Object.entries(formData).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <h1 className="block text-sm font-medium mb-1 text-black">
                  Update your <span className="font-bold">{key}</span>
                </h1>
                <input
                  type="number"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className=" border-[#3B7DF4] w-1/2 border-2 rounded px-3 py-2 text-sm"
                />
              </div>
            ))}
            <div className="mt-4 flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 text-sm rounded ring-black text-[#132278] ring-1 hover:bg-gray-300"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm rounded bg-[#132278] ring-1 ring-black text-white hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
