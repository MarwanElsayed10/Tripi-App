"use client";

interface OverlayProps {
  onClose: () => void;
}

export default function Overlay({ onClose }: OverlayProps) {
  return (
    <div
      onClick={onClose} // closes when clicking background
      className="fixed inset-0 bg-black/85 flex items-center justify-center z-1000 animate-fadeIn"
    >
      {/* Stop click from closing when clicking inside the box */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-10 rounded-xl shadow-xl text-center w-90 animate-fade"
      >
        <h2 className="text-xl font-semibold mb-3">Thanks for subscribing! 🎉</h2>
        <h2 className="text-xl font-semibold mb-3">We hope you enjoy your Journey safely.</h2>

        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
