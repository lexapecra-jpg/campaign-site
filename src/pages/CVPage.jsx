import { Briefcase, Award, ArrowRight, TrendingUp, Download, Play, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTENT } from "../data/content";
import { SectionTitle } from "../components/SectionTitle";

const CVPage = () => {
    const { profile, degrees, career, impact, continental_contributions } = CONTENT.cv;
    const stats_data = CONTENT.home.transformative_stats_career;
    const dossier = CONTENT.home.dossier;

    return (
        <div className="pt-24 pb-20 container mx-auto px-6 animate-fade-in">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#C5A059] hover:text-white transition mb-8 font-bold"
                    >
                        <ArrowRight className="rotate-180" size={16} /> Back to Home
                    </Link>
                    <SectionTitle dark={false}>Career</SectionTitle>
                </div>

                {/* Profile Summary */}
                <div className="mb-16 prose prose-lg text-gray-300 bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                    <h3 className="text-2xl font-bold text-[#C5A059] mb-4">Executive Profile</h3>
                    {profile.split('\n').map((paragraph, idx) => (
                        <p key={idx} className="mb-4 text-justify leading-relaxed">{paragraph}</p>
                    ))}
                </div>

                {/* Education */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="text-[#C5A059]" size={28} />
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>
                    <div className="space-y-6">
                        {degrees.map((deg, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-4 p-6 bg-white/5 rounded-lg border border-white/10 hover:border-[#C5A059]/50 transition">
                                <div className="md:w-24 font-bold text-[#C5A059] text-lg">{deg.year}</div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">{deg.title}</h4>
                                    <p className="text-gray-400">{deg.inst}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Career */}
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="text-[#C5A059]" size={28} />
                        <h3 className="text-2xl font-bold text-white">Professional Career</h3>
                    </div>
                    <div className="border-l-2 border-white/10 ml-3 space-y-8 pl-8 relative">
                        {career.map((job, idx) => (
                            <div key={idx} className="relative">
                                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#013220] border-4 border-[#C5A059]"></div>
                                <div className="text-sm font-bold text-[#C5A059] uppercase tracking-wider mb-1">{job.period}</div>
                                <h4 className="text-lg font-bold text-white">{job.role}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Impact Matrix */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Key Achievements & Impact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {impact.map((item, idx) => (
                            <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10 hover:bg-white/10 transition group">
                                <h4 className="font-bold text-[#C5A059] mb-2">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Continental Contributions */}
                <div className="bg-white/5 border border-white/10 text-white p-8 rounded-2xl relative overflow-hidden backdrop-blur-md mb-16">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-4">{continental_contributions.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{continental_contributions.intro}</p>
                        <div className="font-bold text-[#C5A059] mb-4 uppercase tracking-widest text-xs">{continental_contributions.lead_in}</div>
                        <ul className="space-y-3">
                            {continental_contributions.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm md:text-base border-b border-white/10 pb-2 last:border-0">
                                    <span className="text-[#C5A059] mt-1">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Transformative Statistics Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-2">{stats_data.section_title}</h2>
                        <p className="text-[#C5A059] text-sm font-bold tracking-widest uppercase">{stats_data.section_subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {stats_data.data.map((stat, idx) => (
                            <div key={idx} className="bg-white/5 p-8 rounded-xl border border-white/10 hover:bg-white/10 transition group">
                                <div className="text-4xl font-extrabold text-[#C5A059] mb-4 flex items-center gap-3">
                                    {stat.value}
                                    <TrendingUp size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {stat.desc.split(stat.highlight).map((part, i, arr) => (
                                        <span key={i}>
                                            {part}
                                            {i < arr.length - 1 && <span className="font-bold text-white underline decoration-[#C5A059] underline-offset-4">{stat.highlight}</span>}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Candidate Dossier Duplicate */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white uppercase tracking-tight">{dossier.section_title}</h2>
                        <div className="h-1 w-20 bg-[#C5A059] mx-auto mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {dossier.documents.map((doc) => (
                            <a
                                key={doc.id}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block p-8 rounded-xl border border-white/10 hover:border-[#C5A059] hover:bg-white/5 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition">
                                    <Download size={40} className="text-[#C5A059]" />
                                </div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-[#C5A059] rounded-full mb-4">
                                        {doc.category}
                                    </span>
                                    <h3 className="text-lg font-bold text-white mb-2">{doc.title}</h3>
                                    <p className="text-xs text-gray-400 mb-6">{doc.subtitle}</p>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-2 text-[#C5A059] font-bold text-xs group-hover:translate-x-1 transition-transform uppercase tracking-widest">
                                            Open PDF <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <p className="text-center text-gray-400 text-xs mt-6 italic">The PDF will open in a new tab.</p>
                </div>

                {/* Learn More Footer Section */}
                <div className="bg-[#013220]/50 border border-white/10 rounded-2xl p-12 text-center backdrop-blur-sm">
                    <h2 className="text-4xl font-bold text-white mb-6">Learn more</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                        Discover Eng. Kezias Kazuba MWALE's vision for addressing current and future digital transformation challenges and his roadmap for the ATU.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/vision"
                            className="w-full sm:w-auto px-10 py-4 bg-[#013220] hover:bg-[#024a30] text-white font-bold rounded-lg transition border border-white/10 shadow-lg"
                        >
                            His vision
                        </Link>
                        <a
                            href="https://www.youtube.com/watch?v=hznKq9AvyOo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/5 text-white font-bold rounded-lg transition border border-white/20 flex items-center justify-center gap-2"
                        >
                            <Play size={18} /> Watch his video message
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CVPage;
