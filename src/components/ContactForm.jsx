import { useState } from "react";
import { CheckCircle, ChevronDown, Send } from "lucide-react";
import { sendMessage } from "../lib/contact";

export const ContactForm = ({ config }) => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        full_name: "",
        institution: "",
        email: "",
        interest_type: "",
        consultation_channel: "",
        message: ""
    });

    // Field keys corresponding to CONTENT.home.contact_form.fields order
    const fieldKeys = [
        "full_name",
        "institution",
        "email",
        "interest_type",
        "consultation_channel",
        "message"
    ];

    const handleChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { error } = await sendMessage(formData);

        setLoading(false);
        if (error) {
            console.error("Submission error:", error);
            setError("Failed to send message. Please try again or use email directly.");
        } else {
            setSubmitted(true);
        }
    };

    if (submitted) {
        return (
            <div className="bg-white/10 backdrop-blur-md border border-[#013220] p-8 rounded-lg shadow-2xl flex flex-col items-center text-center animate-fade-in">
                <div className="w-16 h-16 bg-[#013220] rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-[#C5A059]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                <p className="text-gray-200">{config.submission_logic.success_message}</p>
                <div className="mt-4 text-xs text-[#C5A059] uppercase tracking-widest border-t border-white/10 pt-4 w-full">
                    Routing to: {config.submission_logic.notification_routing}
                </div>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-white underline hover:text-[#C5A059]"
                >
                    Send another request
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl border-2 border-[#013220] relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059]"></div>
            <h3 className="text-xl font-bold text-white mb-2">{config.form_title}</h3>
            <p className="text-xs text-gray-300 mb-6">{config.form_description}</p>

            {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-200 text-sm p-3 mb-4 rounded">
                    {error}
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {config.fields.slice(0, 2).map((field, idx) => (
                        <input
                            key={idx}
                            type={field.type}
                            placeholder={field.placeholder}
                            required={field.required}
                            value={formData[fieldKeys[idx]]}
                            onChange={(e) => handleChange(fieldKeys[idx], e.target.value)}
                            className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] placeholder-gray-500 transition-all"
                        />
                    ))}
                </div>

                {config.fields.slice(2).map((field, idx) => {
                    const realIdx = idx + 2;
                    const key = fieldKeys[realIdx];

                    if (field.type === 'select') {
                        return (
                            <div key={idx} className="relative">
                                <select
                                    value={formData[key]}
                                    onChange={(e) => handleChange(key, e.target.value)}
                                    className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] appearance-none cursor-pointer"
                                >
                                    <option value="">{field.label}...</option>
                                    {field.options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                                </select>
                                <ChevronDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" size={16} />
                            </div>
                        );
                    }
                    if (field.type === 'textarea') {
                        return (
                            <textarea
                                key={idx}
                                placeholder={field.label}
                                rows="4"
                                value={formData[key]}
                                onChange={(e) => handleChange(key, e.target.value)}
                                className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] placeholder-gray-500"
                            ></textarea>
                        );
                    }
                    return (
                        <input
                            key={idx}
                            type={field.type}
                            placeholder={field.label}
                            required={field.required}
                            value={formData[key]}
                            onChange={(e) => handleChange(key, e.target.value)}
                            className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] placeholder-gray-500"
                        />
                    );
                })}

                <button
                    disabled={loading}
                    className="w-full bg-[#C5A059] text-white py-4 font-bold hover:bg-[#b08d4b] transition duration-300 uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? "Sending..." : "Submit Diplomatic Request"} <Send size={16} />
                </button>
            </form>
        </div>
    );
};
