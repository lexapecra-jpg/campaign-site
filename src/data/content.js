import mwale1Img from "../assets/mwale1.jpg";
import mwale2Img from "../assets/mwale2.jpg";

/**
 * CONTENT REPOSITORY
 * Merged Consolidated Developer Handover Package
 */
export const CONTENT = {
    style: {
        primary_green: "#013220",
        accent_gold: "#C5A059"
    },
    gallery: {
        page_title: "Media",
        page_subtitle: "Campaign moments, diplomatic engagements & field impact",
        video_url: "https://www.youtube.com/embed/hznKq9AvyOo?autoplay=1&mute=1",
        upload_help_title: "How to upload",
        upload_help_steps: [
            "1) Add images into: /public/gallery (example: mwale-01.jpg).",
            "2) Add each image entry into CONTENT.gallery.items (use the JSON generator below).",
            "3) Keep captions factual: event / location / date."
        ],
        categories: ["All", "Diplomacy", "Field", "Events", "Media"],
        items: [
            {
                id: "g1",
                src: "/gallery/mwale-01.jpg",
                title: "Diplomatic Engagement",
                caption: "High-level consultation — official meeting.",
                category: "Diplomacy",
                date: "2025"
            },
            {
                id: "g2",
                src: "/gallery/mwale-02.jpg",
                title: "Programme Delivery",
                caption: "Coordinating stakeholders towards measurable impact.",
                category: "Events",
                date: "2024"
            }
        ]
    },
    home: {
        hero: {
            name: "Eng. Kezias Kazuba MWALE",
            role: "Director for Radiocommunications",
            election: "Candidate for Secretary General of the ATU 2026",
            tagline: "Advancing ATU Transformation – Deepening its Contribution to the Digital Transformation Agendas",
            image: mwale1Img,
            video: "https://www.youtube.com/embed/hznKq9AvyOo?autoplay=1&mute=1",
            cta_primary: "REQUEST HIGH-LEVEL CONSULTATION",
            cta_secondary: "OPEN CANDIDATE DOSSIER"
        },
        anchors: [
            "Track record", "Competency", "Credibility",
            "Transformation", "Innovation", "Loyalty", "People"
        ],
        transformation: {
            intro: "ATU has undergone a remarkable transformation since 2012. While indicators are evident and good, more needs to be done to render the institution more impactful.",
            data: [
                { id: 1, indicator: "Tangible, measurable impact", val_2012: "?", val_2024: "USD Billions" },
                { id: 2, indicator: "Countries joined as Member States", val_2012: "39", val_2024: "52" },
                { id: 3, indicator: "Ratifications", val_2012: "18", val_2024: "40" },
                { id: 4, indicator: "Associate Members", val_2012: "21", val_2024: "52" },
                { id: 5, indicator: "Annual financial budget", val_2012: "X", val_2024: "3X" },
                { id: 6, indicator: "Financial stability", val_2012: "Unstable", val_2024: "Stable" },
                { id: 7, indicator: "Working structures", val_2012: "?", val_2024: "20+" },
                { id: 10, indicator: "Office premises", val_2012: "Grade ?", val_2024: "Grade A" }
            ]
        },
        impactful_contributions: {
            section_title: "MY IMPACTFUL CONTRIBUTIONS",
            section_subtitle: "Below is an outline of my impactful contributions to ATU transformation in all key areas at the level of head of a department. Clearly, as the overall head, I will achieve even greater success, benefitting Member States, the institution and our continent as a whole.",
            items: [
                {
                    id: 1,
                    title: "MEMBERSHIP & ADMIN",
                    description: "Recruitment of both Member States and Associate Members, Development of consultancy evaluation criteria, design of ATU publications, ...",
                    icon: "Users"
                },
                {
                    id: 2,
                    title: "LEGAL",
                    description: "Lead for Constitutional review of 2014, and Administrative Regulations review of 2018, as well as, Secretary of Plenary for ATU PPs 2014, 2018 & 2022",
                    icon: "Scale"
                },
                {
                    id: 3,
                    title: "FINANCE",
                    description: "Change of mode of membership financial contributions from assessments to Unit selection mechanism which has boosted remittances",
                    icon: "Landmark"
                },
                {
                    id: 4,
                    title: "TRANSFORMATION",
                    description: "Various transformative actions such as protection of the Common Heritage (CH), conception of the ATU Digital Summit, 1st edition of AfriSAP, working structures, etc",
                    icon: "Zap"
                },
                {
                    id: 5,
                    title: "PARTNERSHIPS",
                    description: "Forging partnerships e.g. with IARU & Eutelsat, as well as, leading the development of a grant proposal which secured ATU USD380,000",
                    icon: "Handshake"
                },
                {
                    id: 6,
                    title: "INFO SYSTEMS",
                    description: "Development of ATU Dashboard (an internal programmes implementation & tracking system), and securing ATU's dotAfrica domain",
                    icon: "Database"
                }
            ]
        },
        stats: [
            { label: "USD Billions Value Recovered", value: "31", suffix: "Bn+", desc: "For 31 beneficiary countries" },
            { label: "New FM Channels", value: "18326", suffix: "", desc: "Result of GE84 Plan optimization" },
            { label: "MHz Spectrum Secured", value: "2477", suffix: "", desc: "Highest among all 6 world regions" },
            { label: "Common Positions Attained", value: "97.5", suffix: "%", desc: "Remarkable harmonization" }
        ],
        milestones: {
            section_title: "Milestones",
            note: "OF PARTICULAR SIGNIFICANCE IS DECISION 25 OF THE SADC ICT MINISTERS",
            timeline: [
                {
                    step: 1,
                    title: "1 | CANDIDATE | 28-Mar-23",
                    text: "Commencement of informal candidature awareness campaign targeting key people across Africa and beyond.",
                    is_placeholder: false
                },
                {
                    step: 2,
                    title: "2 | ZAMBIA | 28-Feb-25",
                    text: "Candidature maiden announcement to SADC and request for support from SADC ICT Ministers.",
                    is_placeholder: false
                },
                {
                    step: 3,
                    title: "3 | SADC | 28-Feb-25",
                    text: "SADC ICT Ministers takes Decision 25 urging Member States to support the candidature of Eng. Mwale.",
                    is_placeholder: false
                },
                {
                    step: 4,
                    title: "4 | SADC | 14-Mar-25",
                    text: "SADC Council takes Decision 39 recognizing Eng. Mwale as Zambia’s candidate besides that of South Africa. The decision urges the two countries to engage and advise the next Council meeting in August.",
                    is_placeholder: false
                },
                {
                    step: 5,
                    title: "5 | ZAMBIA | 10-Apr-25",
                    text: "Candidature announcement to Africa during the ATU Prep meeting for WTDC-25 in Nairobi.",
                    is_placeholder: false
                },
                {
                    step: 6,
                    title: "6 | TBA | DATE",
                    text: "Next milestone coming soon...",
                    is_placeholder: true
                }
            ]
        },
        priorities: {
            section_title: "Mandate Priorities",
            section_subtitle: "MY 10-POINT AGENDA IF ENTRUSTED WITH THE HIGH-ROLE OF THE SG",
            intro_context: "The priorities are backed by my vast hands-on experience, rich situational awareness, expert validation, and are therefore valid and befitting for the era.",
            agenda_items: [
                {
                    id: 1,
                    title: "ENHANCE VALUE DELIVERY TO MEMBER STATES",
                    description: "Expand tangible benefits by implementing flagship projects that deliver measurable significant economic impact; leveraging the transformative power of emerging technologies such as Artificial Intelligence (AI), fostering optimal use of digital resources, and providing robust technical assistance."
                },
                {
                    id: 2,
                    title: "ENHANCE LEVERAGE OF THE POWER OF COLLECTIVE ACTION",
                    description: "Focus on high-value, high-impact programmes that require collective continental action i.e. programmes that are beyond the full control of any single Member State and/or Sub-Region."
                },
                {
                    id: 3,
                    title: "STRONGER SUPPORT FOR AU, AfCFTA, RECs & ITU DIGITAL TRANSFORMATION AGENDAS",
                    description: "Enhance collaboration with AU, AfCFTA, RECs, ITU and Sub-Regional organizations to support their digital transformation initiatives, paying special attention to the latter as ATU’s gateways to Member States."
                },
                {
                    id: 4,
                    title: "ENHANCE AFRICA’S EQUAL PLAYING ROLE IN GLOBAL DIGITAL MATTERS",
                    description: "Enhance Africa’s effective coordination and meaningful participation in matters of the ITU and other key forums, notably internet governance forums, to ensure our continent remains an equal player in global decision-making."
                },
                {
                    id: 5,
                    title: "DEEPEN MEANINGFUL CONNECTIVITY AND INFRASTRUCTURE DEVELOPMENT",
                    description: "Contribute considerably towards deepening internet rate usage to more than 50% of Africa’s population by 2030, and more so improve meaningful connectivity rate. The current rate of 43% is unfortunately much lower compared to the global average of 68%. Special effort will be given to promoting the financing of digital infrastructure."
                },
                {
                    id: 6,
                    title: "GREATER PROMOTION OF DIGITAL INNOVATION AND ENTREPRENEURSHIP",
                    description: "Vigorous promotion of digital innovation and entrepreneurship as a key driver to addressing Africa’s unique challenges by exploiting its equally unique opportunities such as the youth innovation & dividend."
                },
                {
                    id: 7,
                    title: "FOSTER DIGITAL TRUST AND SECURITY",
                    description: "Stronger promotion of programmes that foster digital trust including enhancing cybersecurity, privacy, prudent data management, network resilience and combating cybercrime."
                },
                {
                    id: 8,
                    title: "STRATEGIC ENGAGEMENT WITH PRIVATE SECTOR AND PARTNERS",
                    description: "Foster win-win collaborations with the ATU Associate Members (private sector) and other partners to drive mutually beneficial projects such as digital inclusion initiatives."
                },
                {
                    id: 9,
                    title: "UNDERTAKE SPECIALIZED NEED-BASED HUMAN CAPACITY DEVELOPMENT",
                    description: "Enhance the development of Africa’s expert cadre through specialized need-based training programmes to empower the continent to lead complex ICT projects, and actively engage experts in strategic roles to drive impactful initiatives."
                },
                {
                    id: 10,
                    title: "ENHANCE INSTITUTIONAL DELIVERY CAPACITY",
                    description: "Deepen ATU’s institutional delivery capacity, notably increase professional staff, and pervasive use of digital platforms/tools in engagement with Membership and stakeholders."
                }
            ]
        },
        six_reasons: {
            section_title: "Six Reasons",
            section_subtitle: "THE SOLID BASIS FOR SUPPORTING MY CANDIDATURE",
            items: [
                {
                    id: "vision",
                    icon: "🚀",
                    title: "Credible Vision",
                    description: "Most appropriate vision for the next chapter of the ATU"
                },
                {
                    id: "credentials",
                    icon: "🎓",
                    title: "Strong Credentials",
                    description: "Strong competencies and highly relevant credentials to deliver the vision"
                },
                {
                    id: "experience",
                    icon: "⭐",
                    title: "Hands-on Experience",
                    description: "Hands-on experience, innovation prowess and rich institutional memory"
                },
                {
                    id: "track",
                    icon: "🪪",
                    title: "Unmatched Track Record",
                    description: "13 years of loyal, diligent, and impactful service to the ATU & Africa in general"
                },
                {
                    id: "awareness",
                    icon: "ℹ️",
                    title: "Rich Situational Awareness",
                    description: "Deep situational awareness of the challenges and opportunities"
                },
                {
                    id: "network",
                    icon: "🤝",
                    title: "Vast Network of Key People",
                    description: "Extensive network of people driving the digital sector in Africa and beyond"
                }
            ]
        },
        signature_quote: {
            quote:
                "Africa does not lack vision in digital transformation. What it needs is leadership with the courage, competence, and commitment to deliver.",
            author: "Eng. Kezias Kazuba Mwale",
            role: "Candidate for Secretary General, ATU 2026"
        },
        dossier: {
            section_id: "candidate_dossier",
            section_title: "Official Candidate Dossier",
            documents: [
                {
                    id: "doc_brochure",
                    title: "Candidature Brochure",
                    subtitle: "Vision & 10-Point Agenda",
                    file_type: "PDF",
                    category: "Official Dossier",
                    url: "/docs/candidature-brochure.pdf",
                    disabled: false
                },
                {
                    id: "doc_cv",
                    title: "Professional Curriculum Vitae",
                    subtitle: "Eng. Kezias Kazuba Mwale",
                    file_type: "PDF",
                    category: "Official Dossier",
                    url: "/docs/kezias-kazuba-mwale-cv.pdf",
                    disabled: false
                },
                {
                    id: "doc_zambia",
                    title: "Message from the Republic of Zambia",
                    subtitle: "Official Nominating Member State Letter",
                    file_type: "PDF",
                    category: "Diplomatic Support",
                    url: "/docs/zambia-nominating-letter.pdf",
                    disabled: false
                }
            ]
        },
        background: {
            profile_summary: "Eng. Kezias Kazuba MWALE, Director for Radiocommunications at ATU since 2012, has been a central pillar in the institution's transformation, delivering high-impact programs and securing significant digital resources for the African continent.",
            key_achievements: [
                "Recovery of satellite resources worth USD Billions for 31 African countries.",
                "Secured 2477 MHz for mobile broadband connectivity in Africa.",
                "Optimized the FM Sound Broadcasting Plan (GE84) for 18,326 new channels.",
                "Secretary of the Plenary for ATU Conferences (2014, 2018, 2022)."
            ],
            testimonials: {
                section_title: "What people are saying",
                section_subtitle: "THESE ARE NOT MERE WORDS",
                source_label: "My LinkedIn as source",
                cta_label: "Click here to view",
                profile_url: "https://www.linkedin.com/in/eng-kezias-kazuba-mwale/",
                items: [
                    {
                        text: "Kezias. I’ve known you for many years and have witnessed your commitment to Africa and ATU, your good work bringing stakeholders together, and your ability to communicate effectively complex issues. I wish you the best and no doubt, ATU would be on good hands.",
                        country: "Pan-African",
                        flag: "🌍"
                    },
                    {
                        text: "Best wishes Eng. Kezias Kazuba Mwale. You have been representing the Zambia Brand with integrity, professionalism and passion.",
                        country: "Zambia",
                        flag: "🇿🇲"
                    },
                    {
                        text: "I am excited at this nomination of Eng. Kezias Kazuba Mwale for the ATU SG. Africa will also be happy to have you coordinate the affairs of ATU to the next level. Wishing you great success during and after the elections.",
                        country: "Member State",
                        flag: "🌍"
                    },
                    {
                        text: "Kezias, you are indeed a highly experienced candidate for ATU SG who would be 1000% committed to achieving the goals of the ATU and its member states. Best wishes.",
                        country: "Member State",
                        flag: "🌍"
                    },
                    {
                        text: "Having experienced your leadership and management, I am happy to see your nomination. Praying and cheering you on! Wishing all the best. Godspeed!",
                        country: "Diaspora",
                        flag: "🌍"
                    },
                    {
                        text: "Best of luck Kezias. It’s always a proud moment to be nominated by your country to represent Africa. Your experience and reputation will hopefully land you where you belong.",
                        country: "Pan-African",
                        flag: "🌍"
                    },
                    {
                        text: "We appreciate this announcement of candidacy for the 2026 elections. With the diplomatic support of Zambia, your experience and expertise will certainly contribute to advocating for your candidacy. Good preparation and success!",
                        country: "Africa",
                        flag: "🌍"
                    }
                ]
            },
            invitation_cta: {
                text: "Digital technology, being the driver of the Fourth Industrial Revolution we are in, is evidently crucial. The ATU remains a key continental body driving digital transformation agendas and must, therefore, be entrusted to the most competent hands. The 2026 ATU Secretary General election presents a unique opportunity that Member States cannot afford to miss. With 13 years of impactful service at ATU at Director level, reporting directly to the Secretary General, I am uniquely positioned to serve. My credentials include three directly relevant degrees; extensive hands-on experience; innovativeness; rich institutional memory; diligence and loyalty; proven consensus-building and diplomatic skills; a vast network of key sector stakeholders across Africa and beyond; deep situational awareness of strategic issues; and a broad-based skill set spanning legal, partnership, financial, and software development domains, among others. The Member State of Zambia and I respectfully seek your support on the basis of my demonstrated capacity to deliver the next phase of ATU’s transformation, as outlined in my 10-point Agenda, for the benefit of Member States, RECs, Africa, and the ATU itself.",
                closing_line: "Support Zambia. Support Me. Support Assured Advancement.",
                linkedin_support: {
                    label: "Support the Candidature on LinkedIn",
                    url: "https://www.linkedin.com/in/eng-kezias-kazuba-mwale/"
                }
            }
        },
        contact_form: {
            form_id: "diplomatic_gateway_v1",
            form_title: "Submit an Official Engagement Request",
            form_description: "For formal support, clarifications, or to request a bilateral consultation regarding Eng. Kezias Kazuba MWALE’s candidature.",
            fields: [
                {
                    label: "Full Name & Official Title",
                    placeholder: "e.g., Hon. Jane Doe, Minister of ICT",
                    required: true,
                    type: "text"
                },
                {
                    label: "Institution / Country",
                    placeholder: "e.g., Ministry of Communications, Republic of...",
                    required: true,
                    type: "text"
                },
                {
                    label: "Official Email Address",
                    placeholder: "name@institution.gov",
                    required: true,
                    type: "email"
                },
                {
                    label: "Type of Interest",
                    type: "select",
                    options: [
                        "Explore Support for Candidature",
                        "Confirm Official Endorsement",
                        "Request a Bilateral Consultation",
                        "Request Detailed Briefing/Dossier",
                        "Other Diplomatic Inquiry"
                    ]
                },
                {
                    label: "Preferred Consultation Channel",
                    type: "select",
                    options: [
                        "Email Correspondence",
                        "Virtual Meeting (Zoom/Teams)",
                        "In-Person Meeting (at upcoming ITU/AU event)",
                        "Phone/Direct Call"
                    ]
                },
                {
                    label: "Message / Specific Requirements",
                    type: "textarea",
                    required: false
                }
            ],
            submission_logic: {
                success_message: "Your request has been received by the Coordination Office. A formal response will be issued shortly.",
                notification_routing: "viluhomes@viluhomes.com",
                auto_reply: "Enabled: Professional acknowledgment receipt with the Candidate Dossier attached (PDF)."
            }
        },
        transformative_stats_career: {
            section_title: "Transformative Statistics",
            section_subtitle: "MEASURING THE REAL TRANSFORMATION OF MY DEPARTMENT. NUMBERS DON'T LIE.",
            data: [
                {
                    value: "Billions",
                    desc: "The collective value, in US dollars, of the recovered satellite resources for 31 beneficiary countries from Africa, and those protected under the ITSO framework",
                    highlight: "recovered",
                    color: "gold"
                },
                {
                    value: "18,326",
                    desc: "Number of new FM broadcasting channels achieved as a result of the GE84 Plan optimization for Africa, thereby addressing the channel crunch",
                    highlight: "new",
                    color: "gold"
                },
                {
                    value: "2477",
                    desc: "Amount of spectrum (airwaves) secured from the ITU and designated for mobile broadband connectivity in Africa (i.e. the ATU region). Measured in MHz, the amount is the highest among all six regions of the world",
                    highlight: "highest",
                    color: "gold"
                },
                {
                    value: "400+",
                    desc: "Average number of participants in our annual spectrum meetings of the ATU. The figure was less than 200 in 2012. The participants are key drivers of the spectrum agenda in Africa and beyond",
                    highlight: "key drivers",
                    color: "gold"
                },
                {
                    value: "97.5%",
                    desc: "As percentage of issues at the recent World Radiocommunications Conferences (WRCs) which attained African common positions/proposals, symbolizing remarkable harmonization of positions across the 52 ATU Member States",
                    highlight: "harmonization",
                    color: "gold"
                },
                {
                    value: "48",
                    desc: "Average number of African countries (who are in fact ATU Member States) actively engaging in spectrum affairs of the ATU. The figure was about 24 in 2012, thus entailing double growth",
                    highlight: "double growth",
                    color: "gold"
                },
                {
                    value: "20+",
                    desc: "Number of high-impact reference documents developed and published in the spectrum sector. It was effectively nil in 2012 (at the time of my joining the ATU)",
                    highlight: "high-impact",
                    color: "gold"
                },
                {
                    value: "15",
                    desc: "Number of working structures in my department, actively pushing the key agenda of spectrum. At the time of joining the ATU, it was effectively none",
                    highlight: "actively pushing",
                    color: "gold"
                }
            ]
        }
    },
    cv: {
        profile: `Upon invitation and since joining the ATU in 2012, Eng. Kezias Kazuba MWALE is renowned for his significant contributions towards its remarkable transformation in all spheres of the institution, namely; technical, legal, financial, administration, IT systems, and partnerships.
    ATU’s transformation since 2012 is evidenced, among others, by: (1) Thirteen countries joining as Member States raising the number from 39 to 52; (2) doubling of ratifications of its Constitution/Convention; (3) Tripling of annual financial budget and establishment of the reserve fund signifying stable financial situation a stark contrast to hand-month in 2012; (4) Several-fold enhancement in engagement with Member States and Stakeholders, and (5) even more importantly, delivering real value worth billions of US dollars to the continent and its Membership.
    Due to his personality and close interaction with key people, he has amassed several high-profile connections in Africa and worldwide. These acquaintances are key and strategic in fostering goodwill, partnerships, and linkages and therefore getting things done in an effective and timely manner.
    He has a formidable curriculum vitae (CV): (1) three highly relevant degrees to the digital sector, namely; Bachelor in Telecommunications, Master in Broadband/Mobile Communications, and an MBA; (2) many firsts at both ZICTA and ATU giving credence to his innovativeness prowess and deep understanding of issues; (3) secretary of the last three conferences of ATU supreme organ as evidence of his high-calibre; (4) conception and management of high-value programmes; (5) demonstrated constitutional and legal reform capability; (6) and many other key skills including consensus building (diplomacy), partnerships conception & management, deep institutional memory, profound knowledge of the rules of procedures, first-hand-experience of ATU affairs since 2012, IT systems development, and more.
    He is currently the Director for Radiocommunications (Spectrum) at ATU with an impactful service since 2012. Prior to that, he was Manager – Spectrum Management at ZICTA. He joined ZICTA in 2003. As director for radiocommunications, he was at the centre of the successful recovery of lost satellite resources worth billions of US dollars to Africa, among other high-value high-impact digital programmes.
    With over two decades of experience, including 13 years at the director level at ATU itself, Eng. Mwale brings unmatched hands-on expertise and a diverse skill-set in conceptualizing and delivering high-impact digital programmes, which is vital for advancing universal connectivity in Africa and driving digital transformation in line with the AU 2063 vision for a more prosperous future.`,
        degrees: [
            { year: "2017", title: "Master’s Degree in Business Administration (MBA)", inst: "University of Nicosia, Cyprus" },
            { year: "2008", title: "Master’s Degree in Broadband & Mobile Communications", inst: "University of Kent at Canterbury, UK" },
            { year: "2002", title: "Degree in Telecommunications Engineering", inst: "University of Zambia (UNZA), Zambia" }
        ],
        career: [
            { period: "2012-Now", role: "ATU Director for Radiocommunications (Spectrum)" },
            { period: "2010-2012", role: "Manager Spectrum Management at ZICTA" },
            { period: "2005-2010", role: "Senior Spectrum Engineer at ZICTA" },
            { period: "2003-2005", role: "Spectrum Engineer at Zambia ICT Authority (ZICTA)" },
            { period: "2002-2003", role: "Intern at Airtel Zambia" }
        ],
        impact: [
            { title: "Transformation", desc: "of ATU’s spectrum sector resulting in doubling of Member States and Associate Member engagement" },
            { title: "Recovery", desc: "of satellite resources worth billions of US dollars to the continent and millions to each of the 31 African beneficiary countries." },
            { title: "Review", desc: "of the ATU Constitution and Convention, and also staff rules and regulations at CPL-2014 and CPL-2018." },
            { title: "Lead", desc: "role in the development of a grant proposal to ICANN, which secured ATU a grant of almost half-a-million US dollars." },
            { title: "Protection", desc: "of the Common Heritage (CH) via the conception, drafting and eventual adoption of the African common proposals to its AP40." },
            { title: "Securing", desc: "the highest amount of spectrum identification for mobile broadband among all ITU regions." },
            { title: "Enhancement", desc: "of ATU/Africa’s participation at WRCs - making Africa an equal player." },
            { title: "Optimization", desc: "of the FM Sound Broadcasting Plan (the GE84 Plan) which yielded 18,326 new FM Frequency channels." },
            { title: "Innovativeness", desc: "in the key sector of the Spectrum, including the 1st edition of the African Spectrum Allocation Plan (AfriSAP)." },
            { title: "Secretary", desc: "of the supreme organ of the ATU i.e. the Conference of Plenipotentiaries (CPL) of 2014, 2018 and 2022." },
            { title: "Conception", desc: "of the ATU Digital Summit whose 2025 inaugural edition will launch a number of ground-breaking initiatives." },
            { title: "Contribution", desc: "towards other ATU areas such as modernizing ATU communication channels notably personal acquisition and implementation of the dotAfrica domain." }
        ],
        continental_contributions: {
            title: "Contributions towards the continental digital transformation agenda",
            intro:
                "Our continent has witnessed remarkable digital transformation in recent times in terms of both connectivity and meaningful usage. In the case of internet usage for example, Africa has registered phenomenal growth from below 10% to about 43% over the decade, and even more significantly, immense leverage of the connectivity for pervasive personal communications to e-government services. I have had the honor to contribute to this transformation since I began to serve the ATU in 2012.",
            lead_in: "Some of the notable ways include:",
            items: [
                "Member of AU Task Force on Digital Transformation Strategy",
                "Member of AfCFTA taskforce for communication services",
                "Member of the RASCOM Stakeholders Working Group",
                "Development of the ATU framework on 4th Industrial Revolution (4IR)",
                "Conception of the ATU Digital Summit as the ATU biennial flagship event",
                "Implementation of the dotAfrica domain (https://atuat.africa) as part of promotion of the dotAfrica domain"
            ]
        }
    },
    vision: {
        page_title: "Kesias's commitment & vision",
        page_subtitle: "",
        priority_paragraph: "The African Telecommunications Union (ATU) is a key continental institution: it is both the African Union’s specialized institution in the field of Telecommunications/ICTs (now digital), and the International Telecommunication Union’s regional telecommunications organization for Africa. It has a highly noble mission given that we are in the digital driven era “to accelerate the development of telecommunications/ICTs in Africa in order to achieve digital economies”. The institution envisions an “inclusive information society and strong digital economies for social, economic and environmentally sustainable development in Africa”.",
        intro: `The institution has undergone remarkable transformation in the recent past transitioning from questionable relevance/visibility to delivering real value worth billions of US dollars and is now highly strategically relevant/visible. Despite this transformation, a lot still needs to be done. For example, the number of its Secretariat staff remains extremely low in comparison to its vast and ever-expanding mandate, and the institution is yet to embark on and sustain flagship projects directly with its Member States. Even more crucially, the current Africa’s internet use at 43% of population is unfortunately much lower compared to the global average of 68%. I strongly believe, that the institution ought to continue to focus on its transformation. This belief is anchored on my 22-years of impacting the digital sector, 13-years of impactful service at ATU itself as its Director for Spectrum, and more importantly profound situational awareness of where we are and where we ought to be.
Therefore, under my leadership, the institution will focus on the next transformation phase while protecting the transformational gains registered thus far with the ultimate objective of deepening its contribution to the digital transformation agenda. The continent cannot continue to be the least connected yet with the highest youthful population globally. With a remarkable Membership of 52 Member States and over 50 digital industry players (many of whom are global market leaders), the ATU has the potential to do more.
My vision is deeply rooted in identifying and meeting the expectations of Member States and key stakeholders - including the AU, ITU, Sub-Regional organizations, Associate Members, Partners, Experts, and Staff. At the heart of this vision is a commitment to driving Africa’s digital transformation agenda with strategic leadership and innovation. A vision without the capacity to deliver is merely a dream. Backed by my unmatched credentials, extensive hands-on experience, diverse skill-set, and the unwavering support of key players across and beyond Africa, I am confident in my ability to steer ATU towards a dynamic and prosperous future. The key to unlocking this transformative future lies in your support. I humbly and sincerely seek your trust in my candidature to lead ATU into its next era of growth and impact.`,
        invitation: {
            title: "Invitation for Support",
            text: `"Digital technology, being the driver of the Fourth Industrial Revolution we are in, is evidently crucial. The ATU remains a key continental body driving digital transformation agendas and must, therefore, be entrusted to the most competent hands. The 2026 ATU Secretary General election presents a unique opportunity that Member States cannot afford to miss. With 13 years of impactful service at ATU at Director level, reporting directly to the Secretary General, I am uniquely positioned to serve. My credentials include three directly relevant degrees; extensive hands-on experience; innovativeness; rich institutional memory; diligence and loyalty; proven consensus-building and diplomatic skills; a vast network of key sector stakeholders across Africa and beyond; deep situational awareness of strategic issues; and a broad-based skill set spanning legal, partnership, financial, and software development domains, among others. The Member State of Zambia and I respectfully seek your support on the basis of my demonstrated capacity to deliver the next phase of ATU’s transformation, as outlined in my 10-point Agenda, for the benefit of Member States, RECs, Africa, and the ATU itself."`,
            closing: "Support Zambia. Support Me. Support Assured Advancement.",
            signature: "© Eng. Kezias Kazuba MWALE"
        }
    },
    focus_quote: {
        text: "FOCUSING ON DELIVERING REAL, TANGIBLE VALUE TO ATU STAKEHOLDERS BOTH INTERNAL AND EXTERNAL",
        image: "/src/assets/mwale3.jpg"
    },
    focus: [
        {
            id: "ms", title: "Member States",
            intro: "ATU has a remarkable number of 52 African countries who have voluntarily chosen to be its Member States. They are its primary stakeholders with ownership vested in them.",
            points: [
                "Focusing on identifying and implementing high-value-high-impact initiatives that require collective action at continental level",
                "Accompanying Member States on their high-impact digital transformation agendas",
                "Supporting Member States in initiatives that seek to address the particular needs of the special demographics",
                "Leading the way in embracing emerging technologies",
                "Offering highly objective based specialized certificated capacity building",
                "Endeavoring to have a special flagship project for each of the Member State",
                "Creating well-structured and managed high-level forums for an open, non-binding engagement",
                "Promoting the financing and funding of digital transformation agendas",
                "Supporting Rwanda to successfully host WRC-27"
            ]
        },
        {
            id: "sr", title: "Sub-Regions",
            intro: "The Sub-Regions have proved to be the vital pillars of the ATU and are utterly indispensable. For example, much of the initial harmonization and consensus building among the Member States is first done within the Sub-Regions.",
            points: [
                "Supporting the various high-impact digital transformation agendas of the respective Sub-Regions",
                "Creating mechanisms to foster sharing and permeating best-practices and high-value initiatives among and between the Sub-Regions",
                "Enhancing the special and unique position of the Sub-Regions as the gateway to Member States"
            ]
        },
        {
            id: "au", title: "African Union",
            intro: "ATU is the specialized institution of the African Union (AU) on telecoms/ICTs (now digital). This entails a unique and noble role of ATU being an AU’s primary implementing agency for digital matters.",
            points: [
                "Contributing significantly towards the implementation of AU’s Digital Transformation Strategy",
                "Actively implementing AU directives commensurate with the role of specialized institution",
                "Participating meaningfully in AU ICT Ministers Conferences in order to provide reports and get guidance"
            ]
        },
        {
            id: "itu", title: "ITU",
            intro: "With respect to the International Telecommunications Union (ITU), the ATU has a very special role and relationship as the sole regional telecommunications organization (RTO) for the African region.",
            points: [
                "Leveraging the unique role and position of being the Africa’s primary interface with the ITU",
                "Enhancing the effective coordination and participation of Africa in matters of the ITU",
                "Deepening the collaboration with the ITU in the conception, implementation and monitoring of ITU’s regional initiatives for Africa",
                "Further deepening the ongoing and special initiative of collaborating with the ITU Academy"
            ]
        },
        {
            id: "assoc", title: "Associate Members",
            intro: "Currently, ATU has about 54 Associate Members comprising of leading digital industry market players. They are the engine of digital sector and thus indispensable partners for ATU.",
            points: [
                "Supporting Associate Members as the key innovation engine in the digital sector",
                "Encouraging more Associate Members to join and actively participate in the ATU",
                "Refining the value proposition for the Associate members"
            ]
        },
        {
            id: "un", title: "UN & Partners",
            intro: "ATU has diverse partnerships with various stakeholders e.g. UN, ITSO, ITS, Satellite operators, GSMA, IARU, etc who are vital to the successful fulfillment of its mandate.",
            points: [
                "Fostering and deepening partnerships with various key stakeholders including the UN specialized agencies",
                "Ensuring that ATU becomes the gateway for digital sector partnerships for Africa"
            ]
        },
        {
            id: "ps", title: "Secretariat Staff",
            intro: "The Secretariat staff are the ones charged with the daily routine of delivering on the mandate of ATU. Their motivation and competencies are therefore key to the success of ATU.",
            points: [
                "Focusing on motivating staff and making them feel valued",
                "Regularly identifying and bridging the skill gaps among the staff"
            ]
        }
    ]
};
