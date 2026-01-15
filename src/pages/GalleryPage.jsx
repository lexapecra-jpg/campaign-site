import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { SectionTitle } from "../components/SectionTitle";
import { X, Maximize2, Loader2, ChevronRight, ChevronLeft } from "lucide-react";
import { CONTENT } from "../data/content";


export default function GalleryPage() {
    const { gallery } = CONTENT;

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [lightboxItem, setLightboxItem] = useState(null);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        if (!supabase) {
            setError("Gallery backend not connected.");
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase
                .from("gallery_items")
                .select("*")
                .eq("published", true)
                .order("created_at", { ascending: false });

            if (error) throw error;
            setItems(data || []);
        } catch (err) {
            console.error(err);
            setError("Failed to load gallery items.");
        } finally {
            setLoading(false);
        }
    };

    // Filter Logic Removed (Assuming all published items are shown)
    const filteredItems = items;

    // Lightbox Navigation
    const handleNext = (e) => {
        e.stopPropagation();
        const idx = filteredItems.findIndex(i => i.id === lightboxItem.id);
        if (idx < filteredItems.length - 1) setLightboxItem(filteredItems[idx + 1]);
    }

    const handlePrev = (e) => {
        e.stopPropagation();
        const idx = filteredItems.findIndex(i => i.id === lightboxItem.id);
        if (idx > 0) setLightboxItem(filteredItems[idx - 1]);
    }

    return (
        <div className="pt-32 pb-20 bg-[#F4F7F6] min-h-screen animate-fade-in text-gray-800">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12 max-w-3xl mx-auto">
                    <SectionTitle>{gallery.page_title}</SectionTitle>
                    <p className="text-[#C5A059] font-bold text-sm mt-4">
                        {gallery.page_subtitle}
                    </p>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Explore the journey through visual moments capturing the essence of the campaign and the vision for the ATU.
                    </p>
                </div>

                {/* Video Section */}
                <div className="mb-20">
                    <div className="bg-[#013220] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative group">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                            <div className="lg:w-1/2 text-white">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    Kesias's message
                                </h2>
                                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                    Watch my address during the African Preparatory Meeting for WTDC-25, where I outline my commitment to accelerating Africa's digital transformation.
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-bold tracking-widest border border-white/10">
                                        10 April 2025
                                    </span>
                                    <span className="px-4 py-2 bg-[#C5A059]/20 backdrop-blur-md rounded-full text-[#C5A059] text-xs font-bold tracking-widest border border-[#C5A059]/30">
                                        Diplomatic engagement
                                    </span>
                                </div>
                            </div>

                            <div className="lg:w-1/2 w-full">
                                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 backdrop-blur-xl bg-white/5 p-2 group-hover:border-[#C5A059]/50 transition-colors duration-500">
                                    <iframe
                                        className="w-full h-full rounded-xl"
                                        src={gallery.video_url}
                                        title="My candidature acknowledgement speech"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Loading / Error States */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                        <Loader2 className="animate-spin mb-4 text-[#C5A059]" size={32} />
                        <p className="text-sm uppercase tracking-widest">Loading Moments...</p>
                    </div>
                )}

                {error && (
                    <div className="text-center py-20">
                        <div className="inline-block bg-red-50 text-red-600 px-6 py-4 rounded-xl border border-red-100">
                            <p className="font-bold mb-1">Unable to load gallery</p>
                            <p className="text-sm">{error}</p>
                        </div>
                    </div>
                )}

                {/* Masonry Grid */}
                {!loading && !error && (
                    filteredItems.length === 0 ? (
                        <div className="text-center py-20 text-gray-500 italic">
                            No items found using current filters.
                        </div>
                    ) : (
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setLightboxItem(item)}
                                    className="break-inside-avoid group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in border border-gray-100"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden cursor-zoom-in">
                                        <img
                                            src={item.image_url}
                                            alt={item.title}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            loading="lazy"
                                        />

                                        {/* Glassmorphic Overlay (Visible on Hover) */}
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-white font-bold text-lg leading-tight mb-2 drop-shadow-md">
                                                    {item.title}
                                                </h3>
                                                {item.caption && (
                                                    <p className="text-white/90 text-sm line-clamp-3 leading-relaxed drop-shadow-sm">
                                                        {item.caption}
                                                    </p>
                                                )}
                                                <div className="mt-4 flex items-center gap-2 text-[#C5A059] text-xs font-bold">
                                                    <span>View full</span>
                                                    <Maximize2 size={12} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                )}
            </div>

            {/* Lightbox Modal */}
            {lightboxItem && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in p-4">

                    {/* Close Button */}
                    <button
                        onClick={() => setLightboxItem(null)}
                        className="absolute top-6 right-6 text-white/50 hover:text-white transition p-2 bg-white/10 rounded-full z-50"
                    >
                        <X size={24} />
                    </button>

                    <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col md:flex-row gap-0 md:gap-8 items-center justify-center">

                        {/* Nav Prev */}
                        <button onClick={handlePrev} className="absolute left-2 md:-left-12 text-white/50 hover:text-[#C5A059] transition p-2 z-50">
                            <ChevronLeft size={32} />
                        </button>

                        {/* Image Container */}
                        <div className="flex-1 w-full h-full flex items-center justify-center overflow-hidden relative">
                            <img
                                src={lightboxItem.image_url}
                                alt={lightboxItem.title}
                                className="max-w-full max-h-[60vh] md:max-h-[85vh] object-contain shadow-2xl rounded-sm"
                            />
                        </div>

                        {/* Sidebar Info (Desktop: Right Side, Mobile: Bottom Sheet style) */}
                        <div className="w-full md:w-80 shrink-0 bg-[#1A1A1A] p-6 md:p-8 rounded-xl text-white border border-white/10 overflow-y-auto max-h-[30vh] md:max-h-[80vh]">
                            {/* Category/Year Removed */}
                        </div>

                        <h2 className="text-2xl font-bold mb-4 leading-tight">
                            {lightboxItem.title}
                        </h2>

                        <div className="h-0.5 w-12 bg-[#C5A059] mb-6"></div>

                        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {lightboxItem.caption || "No detailed caption available."}
                        </p>

                        <div className="mt-8 pt-6 border-t border-white/10 text-xs text-gray-500">
                            Added on {new Date(lightboxItem.created_at).toLocaleDateString()}
                        </div>
                    </div>

                    {/* Nav Next */}
                    <button onClick={handleNext} className="absolute right-2 md:-right-12 text-white/50 hover:text-[#C5A059] transition p-2 z-50">
                        <ChevronRight size={32} />
                    </button>

                </div>
            )}

        </div>
    );
}
