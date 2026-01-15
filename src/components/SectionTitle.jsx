export const SectionTitle = ({ children, dark = true }) => (
    <h2 className={`text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide relative inline-block ${dark ? 'text-[#013220]' : 'text-white'}`}>
        {children}
        <span className="block h-1 w-16 bg-[#C5A059] mt-2"></span>
    </h2>
);
