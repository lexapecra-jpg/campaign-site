import { ArrowRight } from "lucide-react";
import { CONTENT } from "../data/content";
import { SectionTitle } from "../components/SectionTitle";

const VisionPage = ({ onNavigate }) => {
    return (
        <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in relative z-10">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => onNavigate('')}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400 hover:text-[#C5A059] transition mb-8"
                >
                    <ArrowRight className="rotate-180" size={16} /> Back to Home
                </button>

                <SectionTitle dark={false}>{CONTENT.vision.page_title}</SectionTitle>


                {/* Priority Vision Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -left-4 top-0 w-1 h-full bg-[#C5A059]"></div>
                            <p className="text-xl font-serif italic text-white leading-relaxed pl-8">
                                {CONTENT.vision.priority_paragraph}
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="relative group">
                            <div className="absolute -inset-2 bg-[#C5A059]/30 rounded-2xl blur-xl group-hover:bg-[#C5A059]/50 transition duration-500"></div>
                            <img
                                src="/src/assets/mwale4.jpg"
                                alt="Eng. Kezias Kazuba MWALE"
                                className="relative rounded-2xl shadow-2xl w-full border border-white/10"
                            />
                        </div>
                    </div>
                </div>


                <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/10 text-lg leading-relaxed text-gray-200 space-y-6 text-justify mb-16">
                    {CONTENT.vision.intro.split('\n').map((para, i) => (
                        <p key={i}>
                            {para}
                        </p>
                    ))}
                </div>

                {/* Invitation for Support Card */}
                <div className="bg-[#F4F7F6] p-8 md:p-12 rounded-sm border-l-4 border-[#C5A059] shadow-xl text-gray-800">
                    <h3 className="text-2xl font-bold text-[#013220] mb-6">{CONTENT.vision.invitation.title}</h3>
                    <p className="italic text-lg leading-relaxed mb-6 font-serif">
                        {CONTENT.vision.invitation.text}
                    </p>
                    <p className="font-bold text-[#013220] mb-8">{CONTENT.vision.invitation.closing}</p>
                    <div className="text-right">
                        <div className="text-xl font-black text-[#013220] uppercase tracking-wide">
                            {CONTENT.vision.invitation.signature}
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <div className="text-center">
                        <div className="font-serif italic text-2xl text-white mb-2">"Together for a transformed and impactful ATU."</div>
                        <div className="h-1 w-24 bg-[#C5A059] mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisionPage;
