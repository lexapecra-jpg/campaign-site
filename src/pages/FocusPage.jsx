import { useState } from "react";
import { ArrowRight, CheckCircle, ChevronRight, ShieldCheck } from "lucide-react";
import { CONTENT } from "../data/content";
import { SectionTitle } from "../components/SectionTitle";

const FocusPage = ({ onNavigate }) => {
    const [activeId, setActiveId] = useState(0);
    const activeItem = CONTENT.focus[activeId];

    return (
        <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in relative z-10">
            <div className="max-w-7xl mx-auto">
                <button
                    onClick={() => onNavigate('')}
                    className="flex items-center gap-2 text-sm tracking-widest text-[#C5A059] hover:text-[#013220] transition mb-8 font-bold"
                >
                    <ArrowRight className="rotate-180" size={16} /> Back to Home
                </button>

                <div className="text-center mb-16">
                    <SectionTitle dark={false}>Key Focus Areas</SectionTitle>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Specific commitments to each stakeholder group, ensuring no one is left behind in the transformation journey.
                    </p>
                </div>

                {/* Quote Section */}
                <div className="mb-20">
                    <div className="relative bg-[#013220] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="lg:w-1/3">
                                <img
                                    src={CONTENT.focus_quote.image}
                                    alt="Eng. Kezias Kazuba MWALE"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="lg:w-2/3 p-10 md:p-16 relative flex flex-col justify-center">
                                <div className="absolute top-10 left-10 text-8xl text-[#C5A059]/10 font-serif leading-none">"</div>
                                <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 relative z-10">
                                    {CONTENT.focus_quote.text}
                                </p>
                                <div className="h-1.5 w-32 bg-gradient-to-r from-[#C5A059] to-transparent rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <div className="w-full md:w-1/4 space-y-1">
                        {CONTENT.focus.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveId(idx)}
                                className={`w-full text-left py-4 px-6 flex justify-between items-center transition-all duration-300 border-l-4 ${activeId === idx
                                    ? 'bg-[#013220] text-white border-[#C5A059] shadow-lg scale-105 rounded-r-md'
                                    : 'bg-white text-gray-600 border-transparent hover:bg-gray-50 hover:pl-8'
                                    }`}
                            >
                                <span className={`font-bold ${activeId === idx ? 'text-white' : 'text-gray-700'}`}>
                                    {item.title}
                                </span>
                                {activeId === idx && <ChevronRight size={16} className="text-[#C5A059]" />}
                            </button>
                        ))}
                    </div>

                    {/* Content Card */}
                    <div className="w-full md:w-3/4">
                        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                            {/* Decorative top border */}
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#013220] to-[#C5A059]"></div>

                            <h2 className="text-4xl font-extrabold text-[#013220] mb-8 border-b border-gray-100 pb-6">
                                {activeItem.title}
                            </h2>

                            <p className="text-gray-600 text-lg leading-relaxed mb-10 text-justify">
                                {activeItem.intro}
                            </p>

                            <div className="bg-[#F4F7F6] rounded-xl p-8 border-t-4 border-[#C5A059]">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-[#013220] rounded-full">
                                        <ShieldCheck className="text-[#C5A059]" size={20} />
                                    </div>
                                    <h3 className="text-sm font-bold text-[#013220]">Under my leadership</h3>
                                </div>
                                <div className="space-y-4">
                                    {activeItem.points.map((point, idx) => (
                                        <div key={idx} className="flex items-start gap-4">
                                            <div className="w-2 h-2 rounded-full bg-[#C5A059] mt-2 shrink-0"></div>
                                            <p className="text-gray-700 leading-relaxed">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FocusPage;
