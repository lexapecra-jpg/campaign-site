import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Play, TrendingUp, Download, ArrowRight, Flag, Calendar, Mail, Users, Scale, Landmark, Zap, Handshake, Database } from "lucide-react";
import { CONTENT } from "../data/content";
import mwale1Img from "../assets/mwale1.jpg";
import mwale2Img from "../assets/mwale2.jpg";
import { SectionTitle } from "../components/SectionTitle";
import { Modal } from "../components/Modal";
import { CountUp } from "../components/CountUp";
import { ContactForm } from "../components/ContactForm";

/**
 * SUB-COMPONENTS For HomePage
 * (Transformation, Testimonials, SignatureQuote, etc.)
 */

const ICON_MAP = {
    Users,
    Scale,
    Landmark,
    Zap,
    Handshake,
    Database
};

const ImpactfulContributionsSection = () => {
    const { section_title, section_subtitle, items } = CONTENT.home.impactful_contributions;

    return (
        <section className="py-24 bg-[#F4F7F6] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-5.457 5.457-.83-.828L54.627 0zM5.373 60l-.83-.828 5.457-5.457.83.828-5.457 5.457zm54.627 0l-.83-.828-5.457-5.457.83.828 5.457 5.457zM5.373 0l.83.828-5.457 5.457-.83-.828L5.373 0z' fill='%23013220' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#013220] mb-6 tracking-tight">
                        {section_title}
                    </h2>
                    <div className="h-1 w-24 bg-[#C5A059] mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto font-medium">
                        {section_subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.map((item) => {
                        const IconComponent = ICON_MAP[item.icon];
                        return (
                            <div key={item.id} className="group relative bg-white border border-gray-100 p-8 rounded-2xl hover:shadow-2xl hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 bg-[#013220] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                                    <IconComponent className="text-[#C5A059]" size={28} />
                                </div>

                                <h3 className="text-xl font-black text-[#013220] mb-4 uppercase tracking-wider group-hover:text-[#C5A059] transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-800 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const TransformationSection = () => {
    const { intro, data } = CONTENT.home.transformation;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <SectionTitle>ATU’s Remarkable Transformation</SectionTitle>
                    <p className="text-gray-600 max-w-3xl mx-auto text-center">
                        {intro}
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-t-8 border-[#C5A059]">
                    {/* Header Row */}
                    <div className="hidden md:grid grid-cols-12 bg-[#013220] text-white py-5 px-8 font-bold uppercase text-xs tracking-wider">
                        <div className="col-span-6">Key Indicator</div>
                        <div className="col-span-3 text-center opacity-60">2012</div>
                        <div className="col-span-3 text-center text-[#C5A059]">2024 Status</div>
                    </div>

                    {/* Data Rows */}
                    {data.map((row, idx) => (
                        <div
                            key={row.id}
                            className={`
                                group relative flex flex-col md:grid md:grid-cols-12 md:items-center 
                                py-5 px-8 border-b border-gray-100 transition-all duration-300
                                ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F4F7F6]/50'}
                                hover:bg-white hover:shadow-lg hover:border-l-4 hover:border-l-[#C5A059]
                            `}
                        >
                            {/* Indicator */}
                            <div className="col-span-6 mb-2 md:mb-0">
                                <h4 className="font-medium text-gray-800 text-sm md:text-base group-hover:text-[#013220] transition-colors">
                                    {row.indicator}
                                </h4>
                            </div>

                            {/* 2012 Value */}
                            <div className="col-span-3 flex md:justify-center items-center gap-2 md:gap-0 mb-1 md:mb-0">
                                <span className="md:hidden text-xs font-bold text-gray-400 w-16">2012:</span>
                                <span className="text-sm font-mono text-gray-400">{row.val_2012}</span>
                            </div>

                            {/* 2024 Value */}
                            <div className="col-span-3 flex md:justify-center items-center gap-2 md:gap-0">
                                <span className="md:hidden text-xs font-bold text-[#C5A059] w-16">2024:</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm md:text-base font-bold text-[#013220] font-mono group-hover:text-[#C5A059] transition-colors">
                                        {row.val_2024}
                                    </span>
                                    <TrendingUp size={16} className="text-[#C5A059] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const t = CONTENT.home.background.testimonials;

    return (
        <section className="py-20 bg-[#013220]/95 text-white relative overflow-hidden">
            {/* Subtle gold speckle pattern */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)",
                    backgroundSize: "22px 22px"
                }}
            ></div>

            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/25"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        {t.section_title}
                    </h2>

                    <div className="mt-4 flex items-center justify-center">
                        <span className="h-[2px] w-10 bg-[#C5A059]"></span>
                        <span className="mx-3 text-xs md:text-sm uppercase tracking-[0.35em] text-white/70">
                            {t.section_subtitle}
                        </span>
                        <span className="h-[2px] w-10 bg-[#C5A059]"></span>
                    </div>

                    <a
                        href={t.profile_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl border border-white/25 bg-white/5 backdrop-blur-md text-xs font-bold text-white hover:bg-white/10 hover:border-[#C5A059] hover:text-[#C5A059] transition"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                        {t.source_label} — {t.cta_label}
                    </a>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
                    {t.items.map((item, idx) => (
                        <div key={idx} className="mb-6 break-inside-avoid">
                            <div
                                data-reveal
                                className="reveal bg-white/10 backdrop-blur-md rounded-2xl border border-white/18 shadow-2xl overflow-hidden hover:bg-white/12 transition"
                            >
                                <div className="h-[3px] w-full bg-[#C5A059] opacity-80"></div>

                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="text-[#C5A059] opacity-80">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path d="M7.17 6A5.98 5.98 0 0 0 2 12c0 3.31 2.69 6 6 6h1v-6H6.5A2.5 2.5 0 0 1 9 9.5V6H7.17Zm12 0A5.98 5.98 0 0 0 14 12c0 3.31 2.69 6 6 6h1v-6h-2.5A2.5 2.5 0 0 1 21 9.5V6h-1.83Z" />
                                            </svg>
                                        </div>

                                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full">
                                            <span className="text-base leading-none">{item.flag}</span>
                                            <span>{item.country}</span>
                                        </div>
                                    </div>

                                    <p className="mt-4 text-sm md:text-[15px] leading-relaxed text-white/85 text-justify">
                                        {item.text}
                                    </p>

                                    <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-[#0A66C2] flex items-center justify-center text-white shrink-0 shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                                <path d="M20.447 20.452H17.21V14.86c0-1.334-.027-3.051-1.86-3.051-1.86 0-2.144 1.45-2.144 2.95v5.693H9.07V9h3.112v1.561h.044c.434-.82 1.494-1.683 3.073-1.683 3.286 0 3.89 2.164 3.89 4.977v6.597zM5.337 7.433c-1.004 0-1.816-.814-1.816-1.817 0-1.003.812-1.816 1.816-1.816 1.003 0 1.816.813 1.816 1.816 0 1.003-.813 1.817-1.816 1.817zM6.956 20.452H3.72V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                                            </svg>
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="font-bold text-sm text-white">
                                                {t.source_label}
                                            </div>
                                            <div className="text-xs text-white/70 italic truncate">
                                                {t.profile_url}
                                            </div>
                                        </div>

                                        <a
                                            href={t.profile_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold uppercase tracking-widest text-[#C5A059] hover:text-white transition"
                                        >
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
const PrioritiesSection = () => {
    const { section_title, section_subtitle, intro_context, agenda_items } = CONTENT.home.priorities;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <SectionTitle>{section_title}</SectionTitle>
                    <p className="text-[#C5A059] font-bold mb-4 text-sm">{section_subtitle}</p>
                    <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                        {intro_context}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {agenda_items.map((item, index) => (
                        <div key={item.id} className="group p-8 bg-gray-50 border border-gray-100 hover:border-[#C5A059] hover:shadow-lg transition-all duration-300 rounded-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-[#013220] select-none group-hover:opacity-20 transition">
                                {String(index + 1).padStart(2, '0')}
                            </div>
                            <div className="relative z-10">
                                <div className="h-1 w-12 bg-[#C5A059] mb-4 group-hover:w-20 transition-all"></div>
                                <h3 className="text-xl font-bold text-[#013220] mb-3 leading-tight pr-8">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SixReasonsSection = () => {
    const s = CONTENT.home.six_reasons;

    return (
        <section className="py-24 bg-[#F4F7F6] relative overflow-hidden">
            {/* subtle gold texture */}
            <div
                className="absolute inset-0 opacity-[0.08] pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)",
                    backgroundSize: "26px 26px"
                }}
            ></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <SectionTitle>{s.section_title}</SectionTitle>

                    <div className="mt-4 flex items-center justify-center">
                        <span className="h-px w-10 bg-[#C5A059] opacity-80"></span>
                        <span className="mx-3 text-xs md:text-sm text-gray-500">
                            {s.section_subtitle}
                        </span>
                        <span className="h-px w-10 bg-[#C5A059] opacity-80"></span>
                    </div>

                    <p className="mt-6 text-gray-600 leading-relaxed text-center">
                        A concise, high-confidence rationale—designed for fast scanning by decision-makers.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 max-w-6xl mx-auto">
                    {s.items.map((item) => (
                        <div key={item.id} data-reveal className="reveal">
                            <div className="group h-full bg-white/80 backdrop-blur-md border border-black/5 rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden">
                                {/* gold micro top line */}
                                <div className="h-[3px] w-full bg-[#C5A059] opacity-80"></div>

                                <div className="p-7 md:p-8">
                                    <div className="flex items-start gap-4">
                                        {/* Icon badge */}
                                        <div className="w-14 h-14 rounded-xl bg-[#013220]/5 border border-[#013220]/10 flex items-center justify-center text-2xl shrink-0 group-hover:bg-[#013220]/10 transition">
                                            {item.icon}
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg md:text-xl font-extrabold text-[#013220] tracking-tight">
                                                {item.title}
                                            </h3>
                                            <div className="mt-3 h-[2px] w-10 bg-[#C5A059] opacity-80 group-hover:w-16 transition-all"></div>
                                        </div>
                                    </div>

                                    <p className="mt-5 text-gray-700 leading-relaxed text-justify">
                                        {item.description}
                                    </p>

                                    {/* Footer micro-meta */}
                                    <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-between">
                                        <span className="text-[11px] uppercase tracking-widest text-gray-500">
                                            Reason
                                        </span>
                                        <span className="text-[11px] uppercase tracking-widest text-[#C5A059] font-bold">
                                            {String(s.items.findIndex((x) => x.id === item.id) + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                </div>

                                {/* hover wash */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-[#013220]/5"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing divider */}
                <div className="mt-16 flex justify-center">
                    <div className="h-px w-40 bg-[#C5A059] opacity-60"></div>
                </div>
            </div>
        </section>
    );
};

const SignatureQuoteSection = () => {
    const q = CONTENT.home.signature_quote;

    return (
        <section className="py-20 bg-[#013220] text-white relative overflow-hidden">
            {/* Subtle gold texture */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: "radial-gradient(#C5A059 1px, transparent 1px)",
                    backgroundSize: "22px 22px"
                }}
            ></div>

            {/* Soft vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/30"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Quote */}
                    <div className="lg:col-span-7">
                        <div data-reveal className="reveal">
                            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-white/70">
                                <span className="h-px w-10 bg-[#C5A059] opacity-80"></span>
                                Signature Quote
                            </div>

                            <blockquote className="mt-6 font-serif italic text-2xl md:text-3xl leading-snug text-white/95 text-left">
                                “{q.quote}”
                            </blockquote>

                            <div className="mt-8 flex items-center gap-4">
                                <div className="h-px w-16 bg-[#C5A059] opacity-90"></div>
                                <div>
                                    <div className="font-bold text-[#C5A059] tracking-wide">
                                        {q.author}
                                    </div>
                                    <div className="text-xs text-white/70">
                                        {q.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Portrait */}
                    <div className="lg:col-span-5">
                        <div data-reveal className="reveal">
                            <div className="relative">
                                {/* Gold accent edge */}
                                <div className="absolute -inset-2 rounded-2xl border border-[#C5A059]/35"></div>
                                <div className="absolute -left-6 top-10 h-24 w-1 bg-[#C5A059] opacity-80 hidden lg:block"></div>

                                <img
                                    src={mwale2Img}
                                    alt="Eng. Kezias Kazuba Mwale"
                                    className="relative w-full max-w-md mx-auto object-cover rounded-2xl shadow-2xl border-b-8 border-[#C5A059]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const MilestonesSection = () => {
    const { section_title, note, timeline } = CONTENT.home.milestones;
    const now = new Date();
    const hasPublishedNext = timeline.some(
        (item) => !item.is_placeholder && item.publish_on && new Date(item.publish_on) <= now
    );

    const visibleTimeline = timeline.filter((item) => {
        // Hide future milestones until their publish_on date
        if (!item.is_placeholder && item.publish_on) {
            return new Date(item.publish_on) <= now;
        }
        // Hide the placeholder once the next milestone has been published
        if (item.is_placeholder) {
            return !hasPublishedNext;
        }
        // Always show normal milestones without publish_on
        return true;
    });

    return (
        <section className="py-20 bg-[#F4F7F6] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <SectionTitle>{section_title}</SectionTitle>
                    <p className="text-[#C5A059] font-bold mb-4 text-sm">
                        {note}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
                        A chronological view of key moments shaping the candidature and regional support.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {visibleTimeline.map((item, index) => (
                            <div key={item.step} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Date Badge (Desktop Center) */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#013220] border-4 border-[#C5A059] z-20 flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-4 md:px-12 w-full">
                                    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-[#C5A059] relative hover:shadow-xl transition-shadow`}>
                                        <h3 className="text-lg font-bold text-[#013220] mb-2">{item.title}</h3>
                                        <p className="text-gray-800 text-sm leading-relaxed text-justify">{item.text}</p>
                                    </div>
                                </div>
                                {/* Spacer for opposite side */}
                                <div className="md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const HomePage = ({ onNavigate }) => {
    const [showVideo, setShowVideo] = useState(false);


    useEffect(() => {
        const els = Array.from(document.querySelectorAll("[data-reveal]"));
        if (!els.length) return;

        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // --- Derived State for Video ---
    const getVideoSrc = () => {
        if (!showVideo) return "";

        const isDesktop = typeof window !== 'undefined' ? window.matchMedia("(min-width: 1024px)").matches : false;
        const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

        const baseUrl = CONTENT.home.hero.video;
        const joiner = baseUrl.includes("?") ? "&" : "?";

        const params = new URLSearchParams({
            autoplay: isDesktop && !prefersReducedMotion ? "1" : "0",
            mute: isDesktop && !prefersReducedMotion ? "1" : "0",
            rel: "0",
            modestbranding: "1"
        });

        return `${baseUrl}${joiner}${params.toString()}`;
    };

    const videoSrc = getVideoSrc();

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <section className="relative min-h-[90vh] flex items-center pt-20">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 z-10">
                        <div className="inline-block bg-[#C5A059] text-white px-3 py-1 text-xs font-bold mb-2">
                            Official candidate
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
                            {CONTENT.home.hero.name}
                        </h1>
                        <h2 className="text-xl md:text-2xl text-gray-200 font-serif italic">
                            {CONTENT.home.hero.election}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-lg border-l-4 border-[#C5A059] pl-4">
                            {CONTENT.home.hero.tagline}
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-[#C5A059] text-[#013220] px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-[#b08d4b] transition">
                                {CONTENT.home.hero.cta_primary}
                            </button>
                            <button onClick={() => setShowVideo(true)} className="flex items-center gap-2 border-2 border-[#C5A059] text-[#C5A059] px-8 py-3 rounded-sm font-bold hover:bg-[#C5A059] hover:text-[#013220] transition group">
                                <Play size={18} /> Watch Speech
                            </button>
                        </div>
                        <a
                            href="/docs/candidature-brochure.pdf"
                            download
                            className="text-xs text-gray-400 hover:text-white underline decoration-[#C5A059] underline-offset-4"
                        >
                            {CONTENT.home.hero.cta_secondary}
                        </a>
                    </div>
                    <div className="relative z-10 lg:h-[600px] flex justify-center items-end">
                        {/* Abstract shape behind image */}
                        <div className="absolute inset-0 bg-[#C5A059]/10 rounded-full blur-3xl transform translate-y-20"></div>
                        {/* Fallback image logic handled by CSS or generic placeholder if needed, using provided GDrive link directly */}
                        <img
                            src={CONTENT.home.hero.image}
                            alt="Eng. Mwale"
                            className="relative w-full max-w-md object-cover rounded-lg shadow-2xl border-b-8 border-[#C5A059]"
                            onError={(e) => {
                                e.target.onerror = null;
                                if (!mwale1Img) return;
                                e.target.src = mwale1Img; // Local fallback
                            }}
                        />
                    </div>
                </div>
            </section>

            <Modal isOpen={showVideo} onClose={() => setShowVideo(false)}>
                <div className="aspect-video w-full bg-black">
                    {videoSrc ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoSrc}
                            title="Candidate Speech"
                            frameBorder="0"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : null}
                </div>
            </Modal>

            {/* Anchors (Vision) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionTitle>My Candidature Anchors</SectionTitle>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                        {CONTENT.home.anchors.map((anchor, idx) => (
                            <div key={idx} className="group relative p-4 border border-gray-100 hover:border-[#C5A059] bg-white shadow-sm hover:shadow-xl transition duration-300 text-center flex items-center justify-center aspect-square rounded-sm">
                                <div className="absolute inset-0 bg-[#013220] opacity-0 group-hover:opacity-5 transition"></div>
                                <span className="font-bold text-[#013220] text-xs md:text-sm tracking-wider">{anchor}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformation Table - UPDATED */}
            <TransformationSection />

            <ImpactfulContributionsSection />

            {/* Stats Dashboard - UPDATED */}
            <section className="py-20 bg-[#013220] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold mb-2 uppercase tracking-wide">Transformative Statistics</h2>
                        <p className="text-[#C5A059] uppercase tracking-widest text-sm">Measuring the real transformation. Numbers don't lie.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {CONTENT.home.stats.map((stat, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-lg border border-white/10 hover:border-[#C5A059]/50 transition duration-300">
                                <h3 className="text-4xl font-extrabold text-[#C5A059] mb-2">
                                    <CountUp end={parseFloat(stat.value)} suffix={stat.suffix} />
                                </h3>
                                <p className="text-lg font-bold mb-1">{stat.label}</p>
                                <p className="text-sm text-gray-400">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <Link
                            to="/cv"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-[#C5A059] text-[#013220] font-bold rounded-sm hover:bg-[#b08d4b] transition-all group shadow-xl uppercase tracking-widest text-xs"
                        >
                            Learn More <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Priorities (Accordion) - UPDATED */}
            <PrioritiesSection />

            {/* Six Reasons - UPDATED */}
            <SixReasonsSection />

            {/* Signature Quote - UPDATED */}
            <SignatureQuoteSection />

            <MilestonesSection />

            {/* Candidate Dossier (Downloadable) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionTitle>{CONTENT.home.dossier.section_title}</SectionTitle>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {CONTENT.home.dossier.documents.map((doc) => (
                            <a
                                key={doc.id}
                                href={doc.url}
                                download
                                className={`group block p-8 rounded-xl border border-gray-200 hover:border-[#C5A059] hover:shadow-2xl transition-all duration-300 bg-white relative overflow-hidden ${doc.disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : ""}`}
                            >
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition">
                                    <Download size={48} className="text-[#013220]" />
                                </div>
                                <div className="relative z-10">
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-500 rounded-full mb-4 group-hover:bg-[#013220] group-hover:text-[#C5A059] transition-colors">
                                        {doc.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-[#013220] mb-2">{doc.title}</h3>
                                    <p className="text-sm text-gray-500 mb-6">{doc.subtitle}</p>
                                    <div className="flex items-center gap-2 text-[#C5A059] font-bold text-sm group-hover:translate-x-1 transition-transform">
                                        {doc.file_type} Download <ArrowRight size={16} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <TestimonialsSection />

            {/* Contact Section */}
            <section id="contact" className="py-20 relative text-white">
                <div className="absolute inset-0 bg-[#013220]"></div>
                <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, #013220 0, #013220 10px, #022a1b 10px, #022a1b 20px)" }}></div>

                <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's Engage</h2>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Support the vision. Engage with the candidate. Whether you are a Member State representative, potential partner, or media, we welcome your dialogue.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#013220] transition duration-300">
                                    <Flag size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-widest">Headquarters</h4>
                                    <p className="text-lg">Nairobi, Kenya (HQ)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#013220] transition duration-300">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-widest">Email</h4>
                                    <p className="text-lg">campaign@kezias4atusg.africa</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#013220] transition duration-300">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-gray-400 uppercase tracking-widest">Bilateral meetings</h4>
                                    <p className="text-lg">Available upon request</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
                            <h4 className="font-serif italic text-xl text-[#C5A059] mb-2">"Together for a transformed ATU."</h4>
                            <p className="text-sm text-gray-400">Join the movement for African digital sovereignty.</p>
                        </div>
                    </div>

                    <ContactForm config={CONTENT.home.contact_form} />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
