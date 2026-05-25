"use client";

import { PiX } from "react-icons/pi";
import { CloseButtonProps } from "@/components/types";

export default function CloseButton({ onClose }: CloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      className="inline-flex items-center justify-center rounded-full p-1 transition hover:bg-gray-100 active:scale-95 cursor-pointer"
    >
      <PiX />
    </button>
  );
}
