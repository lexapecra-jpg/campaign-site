import { X } from "lucide-react";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm overflow-y-auto">
            {/* Mobile sheet (full screen) + Desktop centered card */}
            <div className="min-h-[100dvh] flex items-start justify-center p-0 sm:p-4 sm:pt-20">
                <div className="w-full h-[100dvh] sm:h-auto sm:max-h-[calc(100vh-8rem)] sm:max-w-4xl bg-white sm:rounded-lg shadow-2xl overflow-hidden">
                    {/* Sticky header for mobile close button */}
                    <div className="sticky top-0 z-10 flex items-center justify-end bg-white/95 backdrop-blur border-b border-gray-100 px-4 py-3">
                        <button
                            onClick={onClose}
                            className="inline-flex items-center justify-center rounded-full p-2 text-[#013220] hover:text-[#C5A059] hover:bg-black/5 transition"
                            aria-label="Close"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-0">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
