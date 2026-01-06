import React, { useState, useEffect, useRef } from 'react';
import mwale1Img from "./assets/mwale1.jpg";
import { 
  Menu, X, Download, ChevronRight, Globe, 
  Award, Briefcase, Users, Play, FileText, 
  CheckCircle, ArrowRight, Mail, ChevronDown,
  Calendar, Flag, TrendingUp, Send
} from 'lucide-react';

/**
 * CONTENT REPOSITORY
 * Merged Consolidated Developer Handover Package
 */
const CONTENT = {
  style: {
    primary_green: "#013220",
    accent_gold: "#C5A059"
  },
  home: {
    hero: {
      name: "Eng. Kezias Kazuba MWALE",
      role: "Director for Radiocommunications",
      election: "Candidate for Secretary General of the ATU 2026",
      tagline: "Advancing ATU Transformation – Deepening its Contribution to the Digital Transformation Agendas",
      image: mwale1Img, 
      video: "https://www.youtube.com/embed/hznKq9AvyOo",
      cta_primary: "Request High-Level Consultation",
      cta_secondary: "Open Candidate Dossier"
    },
    anchors: [
      "TRACK RECORD", "COMPETENCY", "CREDIBILITY", 
      "TRANSFORMATION", "INNOVATION", "LOYALTY", "PEOPLE"
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
      quotes: [
        {
          text: "Kezias. I’ve known you for many years and have witnessed your commitment to Africa and ATU...",
          author: "Senior Industry Peer"
        },
        {
          text: "Best wishes Eng. Kezias Kazuba Mwale. You have been representing the Zambia Brand with integrity, professionalism and passion",
          author: "Diplomatic Colleague"
        },
        {
          text: "Kezias, you are indeed a highly experienced candidate for ATU SG who would be 1000% committed to achieving the goals of the ATU...",
          author: "Member State Official"
        }
      ],
      invitation_cta: {
        text: "Digital technology, being the driver of the Fourth Industrial Revolution we are in, is evidently crucial. The ATU remains a key continental body driving digital transformation agendas and must, therefore, be entrusted to the most competent hands. The 2026 ATU Secretary General election presents a unique opportunity that Member States cannot afford to miss. With 13 years of impactful service at ATU at Director level, reporting directly to the Secretary General, I am uniquely positioned to serve. My credentials include three directly relevant degrees; extensive hands-on experience; innovativeness; rich institutional memory; diligence and loyalty; proven consensus-building and diplomatic skills; a vast network of key sector stakeholders across Africa and beyond; deep situational awareness of strategic issues; and a broad-based skill set spanning legal, partnership, financial, and software development domains, among others. The Member State of Zambia and I respectfully seek your support on the basis of my demonstrated capacity to deliver the next phase of ATU’s transformation, as outlined in my 10-point Agenda, for the benefit of Member States, RECs, Africa, and the ATU itself.",
        closing_line: "Support Zambia. Support Me. Support Assured Advancement.",
        linkedin_support: {
          label: "Support the Candidature on LinkedIn",
          url: "https://www.linkedin.com"
        }
      }
    },
    contact_form: {
      form_id: "diplomatic_gateway_v1",
      form_title: "Engage with the Candidature Coordination Office",
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
        notification_routing: "coordination.office@mwale2026.zm",
        auto_reply: "Enabled: Professional acknowledgment receipt with the Candidate Dossier attached (PDF)."
      }
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
      { title: "TRANSFORMATION", desc: "of ATU’s spectrum sector resulting in doubling of Member States and Associate Member engagement" },
      { title: "RECOVERY", desc: "of satellite resources worth billions of US dollars to the continent and millions to each of the 31 African beneficiary countries." },
      { title: "REVIEW", desc: "of the ATU Constitution and Convention, and also staff rules and regulations at CPL-2014 and CPL-2018." },
      { title: "LEAD", desc: "role in the development of a grant proposal to ICANN, which secured ATU a grant of almost half-a-million US dollars." },
      { title: "PROTECTION", desc: "of the Common Heritage (CH) via the conception, drafting and eventual adoption of the African common proposals to its AP40." },
      { title: "SECURING", desc: "the highest amount of spectrum identification for mobile broadband among all ITU regions." },
      { title: "ENHANCEMENT", desc: "of ATU/Africa’s participation at WRCs - making Africa an equal player." },
      { title: "OPTIMIZATION", desc: "of the FM Sound Broadcasting Plan (the GE84 Plan) which yielded 18,326 new FM Frequency channels." },
      { title: "INNOVATIVENESS", desc: "in the key sector of the Spectrum, including the 1st edition of the African Spectrum Allocation Plan (AfriSAP)." },
      { title: "SECRETARY", desc: "of the supreme organ of the ATU i.e. the Conference of Plenipotentiaries (CPL) of 2014, 2018 and 2022." },
      { title: "CONCEPTION", desc: "of the ATU Digital Summit whose 2025 inaugural edition will launch a number of ground-breaking initiatives." },
      { title: "CONTRIBUTION", desc: "towards other ATU areas such as modernizing ATU communication channels notably personal acquisition and implementation of the dotAfrica domain." }
    ]
  },
  vision: {
    intro: `The African Telecommunications Union (ATU) is a key continental institution: it is both the African Union’s specialized institution in the field of Telecommunications/ICTs (now digital), and the International Telecommunication Union’s regional telecommunications organization for Africa. It has a highly noble mission given that we are in the digital driven era “to accelerate the development of telecommunications/ICTs in Africa in order to achieve digital economies”. The institution envisions an “inclusive information society and strong digital economies for social, economic and environmentally sustainable development in Africa”.
    The institution has undergone remarkable transformation in the recent past transitioning from questionable relevance/visibility to delivering real value worth billions of US dollars and is now highly strategically relevant/visible. Despite this transformation, a lot still needs to be done. For example, the number of its Secretariat staff remains extremely low in comparison to its vast and ever-expanding mandate, and the institution is yet to embark on and sustain flagship projects directly with its Member States. Even more crucially, the current Africa’s internet use at 43% of population is unfortunately much lower compared to the global average of 68%. I strongly believe, that the institution ought to continue to focus on its transformation. This belief is anchored on my 22-years of impacting the digital sector, 13-years of impactful service at ATU itself as its Director for Spectrum, and more importantly profound situational awareness of where we are and where we ought to be.
    Therefore, under my leadership, the institution will focus on the next transformation phase while protecting the transformational gains registered thus far with the ultimate objective of deepening its contribution to the digital transformation agenda. The continent cannot continue to be the least connected yet with the highest youthful population globally. With a remarkable Membership of 52 Member States and over 50 digital industry players (many of whom are global market leaders), the ATU has the potential to do more.
    My vision is deeply rooted in identifying and meeting the expectations of Member States and key stakeholders - including the AU, ITU, Sub-Regional organizations, Associate Members, Partners, Experts, and Staff. At the heart of this vision is a commitment to driving Africa’s digital transformation agenda with strategic leadership and innovation. A vision without the capacity to deliver is merely a dream. Backed by my unmatched credentials, extensive hands-on experience, diverse skill-set, and the unwavering support of key players across and beyond Africa, I am confident in my ability to steer ATU towards a dynamic and prosperous future. The key to unlocking this transformative future lies in your support. I humbly and sincerely seek your trust in my candidature to lead ATU into its next era of growth and impact.`
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
      intro: "Today, Associate Members number 50 and represent a broad spectrum of all key players in the digital sector, with nearly all global and major players being members.",
      points: [
        "Continuing to involve Associate Members in the technical phases of developing ATU proposals/positions",
        "Deepening partnerships with Associate Members on special projects of mutual interests",
        "Creating well-structured and managed high-level forums for an open, non-binding engagement"
      ]
    },
    {
      id: "partners", title: "Partners",
      intro: "Today and due to its high profile, visibility and unique strengths, the ATU has attracted many partnerships far and wide, and of broad nature.",
      points: [
        "Implementing all partnership agreements entailing talking stock of and activating dormant ones",
        "Forging highly beneficial partnerships with partners on initiatives of mutual interests",
        "Publicizing the partnerships for the appreciation of Membership and stakeholders"
      ]
    },
    {
      id: "experts", title: "Experts",
      intro: "It is rather gratifying that today we have experts within the continent who are undertaking much of the consultancy works at the ATU, ITU, PRIDA, AU, etc.",
      points: [
        "Focusing on developing a critical mass of expert cadre in emerging issues",
        "Providing consultancy work to dully recognized expert while complying with procurement rules",
        "Maintaining a database of experts to facilitate easy engagement including consultancies",
        "Recognizing experts who provide exceptional service"
      ]
    },
    {
      id: "staff", title: "Staff",
      intro: "It would be utterly crucial that ATU, treat the Staff as a particularly special stakeholder with the goal of fostering high morale.",
      points: [
        "Conferring upon them befitting job titles, as well as enriched job roles",
        "Ensuring a safe, healthy, secure and generally conducive work environment",
        "Maintaining a competitive compensation scheme"
      ]
    },
    {
      id: "secretariat", title: "Secretariat",
      intro: "The Secretariat is responsible for executing the programmes of the institution. The importance of an effective, well-resourced, innovative and vigorous Secretariat cannot be overstated.",
      points: [
        "Giving meaning to the Constitution and Convention by effecting its provisions to the fullest extent possible",
        "Enhancing the Secretariat’s capacity to deliver by improving the number, scope and deliver capacity of staff",
        "Optimizing financial and other in-kind resources including robust resource mobilization",
        "Innovativeness and vigour in the implementation of ATU strategic plans",
        "Implementing the outcomes of ATU meetings/conferences/summits",
        "Assessing the unique strengths of Member States and Sub-Regions",
        "Optimizing the acquisition, retention and optimum use of space resources",
        "Humanizing the institution",
        "Changing the financial year period for ease of planning",
        "Pervasive use of digital platforms/tools"
      ]
    },
    {
      id: "host", title: "Host Country",
      intro: "The host country is a unique stakeholder and for which special attention is required.",
      points: [
        "Ensuring compliance with all regulations governing IGOs",
        "Ensuring Staff have adequate knowledge on protocols",
        "Forging and maintaining good rapport with key people"
      ]
    }
  ]
};

// Design System Colors
const COLORS = {
  primary: "bg-[#013220]", // Deep Green
  primaryText: "text-[#013220]",
  accent: "bg-[#C5A059]", // Gold
  accentText: "text-[#C5A059]",
  bg: "bg-[#F4F7F6]", // Light Grey
  obsidian: "text-[#1A1A1A]",
  white: "text-white"
};

/* --- SUB-COMPONENTS --- */

/**
 * Animated Spectrum Background
 * Renders a Deep Green canvas with subtle Gold sine waves.
 */
const SpectrumBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const draw = () => {
      // Base Deep Green
      ctx.fillStyle = CONTENT.style.primary_green;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gold Spectrum Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(197, 160, 89, 0.15)'; // Gold low opacity

      const lines = 6;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          // Complex wave math for "spectrum" look
          const y = canvas.height / 2 + 
                    Math.sin(x * 0.005 + t * 0.01 + i) * 60 + 
                    Math.sin(x * 0.01 + t * 0.02) * 20;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      t += 0.5;
      animationFrameId = window.requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

const SectionTitle = ({ children, dark = true }) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide relative inline-block ${dark ? 'text-[#013220]' : 'text-white'}`}>
    {children}
    <span className="block h-1 w-16 bg-[#C5A059] mt-2"></span>
  </h2>
);

const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className="font-mono font-bold">
      {Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
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

const ContactForm = ({ config }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for notification routing would go here
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
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-2xl border-2 border-[#013220] relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#C5A059]"></div>
      <h3 className="text-xl font-bold text-white mb-2">{config.form_title}</h3>
      <p className="text-xs text-gray-300 mb-6">{config.form_description}</p>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {config.fields.slice(0, 2).map((field, idx) => (
             <input 
                key={idx}
                type={field.type} 
                placeholder={field.placeholder} 
                required={field.required}
                className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] placeholder-gray-500 transition-all" 
             />
          ))}
        </div>
        
        {config.fields.slice(2).map((field, idx) => {
           if (field.type === 'select') {
             return (
               <div key={idx} className="relative">
                 <select className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] appearance-none cursor-pointer">
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
                className="w-full p-3 bg-white/90 border border-transparent rounded focus:border-[#C5A059] focus:bg-white outline-none text-[#013220] placeholder-gray-500" 
             />
           );
        })}

        <button className="w-full bg-[#C5A059] text-white py-4 font-bold hover:bg-[#b08d4b] transition duration-300 uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg mt-4">
          Submit Diplomatic Request <Send size={16} />
        </button>
      </form>
    </div>
  );
};

const PrioritiesSection = () => {
    const { section_title, section_subtitle, intro_context, agenda_items } = CONTENT.home.priorities;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <SectionTitle>{section_title}</SectionTitle>
                    <p className="text-[#C5A059] font-bold tracking-widest uppercase mb-4 text-sm">{section_subtitle}</p>
                    <p className="text-gray-600 leading-relaxed text-justify">{intro_context}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {agenda_items.map((item, index) => (
                        <div key={item.id} className="group p-8 bg-gray-50 border border-gray-100 hover:border-[#C5A059] hover:shadow-lg transition-all duration-300 rounded-lg relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-[#013220] select-none group-hover:opacity-20 transition">
                                 {String(index + 1).padStart(2, '0')}
                             </div>
                             <div className="relative z-10">
                                 <div className="h-1 w-12 bg-[#C5A059] mb-4 group-hover:w-20 transition-all"></div>
                                 <h3 className="text-xl font-bold text-[#013220] mb-3 uppercase leading-tight pr-8">{item.title}</h3>
                                 <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                             </div>
                        </div>
                    ))}
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
                <div className="text-center mb-16">
                    <SectionTitle>{section_title}</SectionTitle>
                    <p className="text-[#013220] font-serif italic max-w-2xl mx-auto border-b border-[#C5A059] pb-4 inline-block">{note}</p>
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

const TransformationSection = () => {
    const { intro, data } = CONTENT.home.transformation;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <SectionTitle>ATU’s Remarkable Transformation</SectionTitle>
                    <p className="text-gray-600 max-w-2xl mx-auto text-justify">{intro}</p>
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
                                <span className="md:hidden text-xs font-bold text-gray-400 uppercase w-16">2012:</span>
                                <span className="text-sm font-mono text-gray-400">{row.val_2012}</span>
                            </div>

                            {/* 2024 Value */}
                            <div className="col-span-3 flex md:justify-center items-center gap-2 md:gap-0">
                                <span className="md:hidden text-xs font-bold text-[#C5A059] uppercase w-16">2024:</span>
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

/* --- PAGE COMPONENTS --- */

const HomePage = ({ onNavigate }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (!showVideo) {
      setVideoSrc("");
      return;
    }

    // Autoplay only on desktop (and respect reduced-motion preferences)
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const baseUrl = CONTENT.home.hero.video;
    const joiner = baseUrl.includes("?") ? "&" : "?";

    const params = new URLSearchParams({
      autoplay: isDesktop && !prefersReducedMotion ? "1" : "0",
      mute: isDesktop && !prefersReducedMotion ? "1" : "0",
      rel: "0",
      modestbranding: "1"
    });

    // Set iframe src only when the modal is open (also enables lazy-load)
    setVideoSrc(`${baseUrl}${joiner}${params.toString()}`);
  }, [showVideo]);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block bg-[#C5A059] text-white px-3 py-1 text-xs font-bold tracking-widest uppercase mb-2">
              Official Candidate
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
              <button onClick={() => document.getElementById('contact').scrollIntoView({behavior: 'smooth'})} className="bg-[#C5A059] text-[#013220] px-8 py-3 rounded-sm font-bold shadow-lg hover:bg-[#b08d4b] transition">
                {CONTENT.home.hero.cta_primary}
              </button>
              <button onClick={() => setShowVideo(true)} className="flex items-center gap-2 border-2 border-[#C5A059] text-[#C5A059] px-8 py-3 rounded-sm font-bold hover:bg-[#C5A059] hover:text-[#013220] transition group">
                <Play size={18} /> Watch Speech
              </button>
            </div>
            <button onClick={() => onNavigate('cv')} className="text-xs text-gray-400 uppercase tracking-widest hover:text-white underline decoration-[#C5A059] underline-offset-4">
               {CONTENT.home.hero.cta_secondary}
            </button>
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

      {/* Stats Dashboard - UPDATED */}
      <section className="py-20 bg-[#013220] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-2">Transformative Statistics</h2>
                <p className="text-[#C5A059]">Measuring the real transformation. Numbers don't lie.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {CONTENT.home.stats.slice(0, 8).map((stat, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-md p-6 border-l-2 border-[#C5A059]">
                        <div className="text-4xl font-bold text-[#C5A059] mb-2">
                            <CountUp end={parseFloat(stat.value)} suffix={stat.suffix} />
                        </div>
                        <div className="font-bold text-sm uppercase tracking-wide mb-2">{stat.label}</div>
                        <p className="text-xs text-gray-400">{stat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Priorities Section */}
      <PrioritiesSection />

      {/* Milestones Section - UPDATED */}
      <MilestonesSection />

      {/* Dossier / Library */}
      <section className="py-20 bg-[#F4F7F6]">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
                <SectionTitle>{CONTENT.home.dossier.section_title}</SectionTitle>
                <button onClick={() => onNavigate('cv')} className="hidden md:flex items-center text-[#013220] font-bold hover:underline">
                    View Full CV <ChevronRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {CONTENT.home.dossier.documents.map((item, idx) => (
                    <a
                      key={item.id}
                      href={item.disabled ? undefined : item.url}
                      target={item.disabled ? undefined : "_blank"}
                      rel={item.disabled ? undefined : "noopener noreferrer"}
                      className={`bg-white p-8 rounded shadow hover:shadow-lg transition group border border-transparent hover:border-[#C5A059] ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      onClick={(e) => { if (item.disabled) e.preventDefault(); }}
                    >
                        <div className="text-[#C5A059] mb-4 group-hover:scale-110 transition duration-300">
                             {item.id === 'doc_brochure' ? <Globe /> : item.id === 'doc_cv' ? <FileText /> : <Award />}
                        </div>
                        <div className="text-xs font-bold text-[#C5A059] uppercase tracking-wide mb-1">{item.category}</div>
                        <h3 className="text-xl font-bold text-[#013220] mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-6">{item.subtitle}</p>
                        <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#013220]">
                            {item.disabled ? 'Coming soon' : `Open ${item.file_type}`} <Download size={14} className="ml-2" />
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </section>

      {/* Quotes */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
            <h2 className="text-center text-2xl font-serif italic text-gray-400 mb-12">What people are saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CONTENT.home.background.quotes.map((quote, idx) => (
                    <div key={idx} className="bg-gray-50 p-6 rounded-tl-3xl rounded-br-3xl">
                        <p className="text-gray-700 italic mb-4 font-serif text-justify">"{quote.text}"</p>
                        <div className="font-bold text-xs text-[#013220] uppercase">{quote.author}</div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center gap-8 mt-16 opacity-40 grayscale">
                 {/* Mock Logos for Diplomatic Validation */}
                 <div className="h-8 w-24 bg-gray-300 rounded"></div>
                 <div className="h-8 w-24 bg-gray-300 rounded"></div>
                 <div className="h-8 w-24 bg-gray-300 rounded"></div>
                 <div className="h-8 w-24 bg-gray-300 rounded"></div>
            </div>
        </div>
      </section>

      {/* Invitation CTA */}
      <section className="py-20 bg-[#F4F7F6] border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-[#C5A059]">
            <p className="text-lg text-[#013220] mb-6 font-serif italic text-justify">
              {CONTENT.home.background.invitation_cta.text}
            </p>
            <div className="font-bold text-[#C5A059] text-xl mb-2">{CONTENT.home.background.invitation_cta.closing_line}</div>
            <a
              href={CONTENT.home.background.invitation_cta.linkedin_support.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-[#0A66C2] text-white px-6 py-3 font-bold rounded-sm hover:bg-[#004182] transition uppercase tracking-widest text-xs"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.447 20.452H17.21V14.86c0-1.334-.027-3.051-1.86-3.051-1.86 0-2.144 1.45-2.144 2.95v5.693H9.07V9h3.112v1.561h.044c.434-.82 1.494-1.683 3.073-1.683 3.286 0 3.89 2.164 3.89 4.977v6.597zM5.337 7.433c-1.004 0-1.816-.814-1.816-1.817 0-1.003.812-1.816 1.816-1.816 1.003 0 1.816.813 1.816 1.816 0 1.003-.813 1.817-1.816 1.817zM6.956 20.452H3.72V9h3.237v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
              </svg>
              {CONTENT.home.background.invitation_cta.linkedin_support.label}
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-[#013220] text-white">
         <div className="container mx-auto px-6">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-3xl font-bold mb-4">Engage with the Candidature Coordination Office</h2>
                     <p className="text-gray-300 mb-8 max-w-md">For high-level consultations, media inquiries, or official dossier requests, please use our secure diplomatic channel.</p>
                     <ul className="space-y-4">
                         <li className="flex items-center gap-4">
                             <div className="bg-[#C5A059] p-2 rounded-full text-[#013220]"><Mail size={16} /></div>
                             <span>campaign@kezias4atusg.africa</span>
                         </li>
                         <li className="flex items-center gap-4">
                             <div className="bg-[#C5A059] p-2 rounded-full text-[#013220]"><Globe size={16} /></div>
                             <span>Nairobi, Kenya (HQ)</span>
                         </li>
                     </ul>
                 </div>
                 <ContactForm config={CONTENT.home.contact_form} />
             </div>
         </div>
      </section>
    </div>
  );
};

const CVPage = () => (
  <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in">
    <div className="max-w-4xl mx-auto">
        <SectionTitle dark={false}>Curriculum Vitae</SectionTitle>
        
        {/* Profile */}
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12 border-t-4 border-[#013220]">
            <h3 className="text-xl font-bold text-[#013220] mb-6 flex items-center gap-2">
                <Users className="text-[#C5A059]" /> Profile in Brief
            </h3>
            <div className="prose prose-lg text-gray-700 whitespace-pre-line text-sm leading-relaxed text-justify mb-4 font-bold text-[#013220]">
               {CONTENT.home.background.profile_summary}
            </div>
            <div className="prose prose-lg text-gray-700 whitespace-pre-line text-sm leading-relaxed text-justify">
                {CONTENT.cv.profile}
            </div>
        </div>

        {/* Qualifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-[#013220] mb-6 flex items-center gap-2">
                    <Award className="text-[#C5A059]" /> Qualifications
                </h3>
                <ul className="space-y-6">
                    {CONTENT.cv.degrees.map((deg, idx) => (
                        <li key={idx} className="border-l-2 border-gray-200 pl-4">
                            <div className="text-[#C5A059] font-bold text-sm">{deg.year}</div>
                            <div className="font-bold text-[#013220]">{deg.title}</div>
                            <div className="text-xs text-gray-500 uppercase">{deg.inst}</div>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
                 <h3 className="text-xl font-bold text-[#013220] mb-6 flex items-center gap-2">
                    <Briefcase className="text-[#C5A059]" /> Career Ladder
                </h3>
                <ul className="space-y-6">
                    {CONTENT.cv.career.map((job, idx) => (
                        <li key={idx} className="flex gap-4 items-start">
                             <div className="min-w-[80px] text-xs font-bold text-[#C5A059] bg-[#013220]/5 py-1 px-2 rounded">{job.period}</div>
                             <div className="text-sm font-medium text-gray-800">{job.role}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Impact */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-[#013220] mb-8">Real, Significant Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CONTENT.cv.impact.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                        <CheckCircle className="text-[#C5A059] shrink-0" size={20} />
                        <div>
                            <span className="font-bold text-[#013220]">{item.title}</span>
                            <span className="text-gray-600 text-sm block mt-1">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </div>
);

const VisionPage = () => (
  <div className="pt-32 pb-20 container mx-auto px-6 animate-fade-in">
    <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-lg shadow-lg">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#013220] mb-2">My Commitment & Vision</h2>
            <div className="h-1 w-24 bg-[#C5A059] mx-auto"></div>
        </div>
        <div className="prose prose-lg text-gray-800 text-justify leading-loose whitespace-pre-line font-serif">
            {CONTENT.vision.intro}
        </div>
        <div className="mt-16 p-8 bg-[#F4F7F6] border-l-4 border-[#C5A059] rounded-r-lg">
            <h3 className="font-bold text-[#013220] mb-4">Invitation for Support</h3>
            <p className="text-sm text-gray-700 leading-relaxed italic text-justify">
               "{CONTENT.home.background.invitation_cta.text}"
            </p>
             <p className="text-sm text-gray-700 leading-relaxed italic mt-2 font-bold text-justify">
               {CONTENT.home.background.invitation_cta.closing_line}
            </p>
            <div className="mt-4 text-right font-bold text-[#013220] font-sans">© Eng. Kezias Kazuba MWALE</div>
        </div>
    </div>
  </div>
);

const FocusPage = () => {
    const [activeTab, setActiveTab] = useState("ms");
    const activeContent = CONTENT.focus.find(f => f.id === activeTab);

    return (
        <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen animate-fade-in">
            <div className="text-center mb-12">
                <SectionTitle dark={false}>Stakeholder-Centred Agenda</SectionTitle>
                <p className="text-gray-300 max-w-2xl mx-auto mt-4">Delivering real, tangible value to all ATU stakeholders.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Tabs */}
                <div className="lg:w-1/4">
                    <div className="bg-white shadow rounded-lg overflow-hidden sticky top-32">
                        {CONTENT.focus.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setActiveTab(item.id)}
                                className={`w-full text-left px-6 py-4 border-b border-gray-100 flex justify-between items-center transition duration-200 ${
                                    activeTab === item.id 
                                    ? 'bg-[#013220] text-white font-bold pl-8' 
                                    : 'text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                {item.title}
                                {activeTab === item.id && <ChevronRight size={16} className="text-[#C5A059]" />}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-3/4">
                    <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg min-h-[500px]">
                        <div className="flex items-baseline gap-4 mb-6 border-b pb-4">
                             <h2 className="text-3xl font-bold text-[#013220]">{activeContent.title}</h2>
                        </div>
                        
                        <div className="mb-8 text-lg text-gray-700 leading-relaxed font-light text-justify">
                            {activeContent.intro}
                        </div>

                        <div className="bg-[#F4F7F6] p-6 rounded-lg border-t-2 border-[#C5A059]">
                            <h4 className="font-bold text-[#013220] uppercase tracking-wider mb-4 text-sm flex items-center gap-2">
                                <Award size={16} /> Under My Leadership
                            </h4>
                            <ul className="space-y-4">
                                {activeContent.points.map((point, idx) => (
                                    <li key={idx} className="flex gap-3 text-gray-700">
                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-[#C5A059] shrink-0"></div>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* --- MAIN LAYOUT --- */

export default function App() {
  const [page, setPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      window.scrollTo(0,0);
      setMobileMenuOpen(false);
  }, [page]);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'cv', label: 'CV' },
    { id: 'vision', label: 'Vision' },
    { id: 'focus', label: 'Focus Areas' },
  ];

  return (
    <div className={`min-h-screen ${COLORS.bg} font-sans text-gray-900 selection:bg-[#C5A059] selection:text-white`}>
      <SpectrumBackground />
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="font-bold text-2xl tracking-tighter text-[#013220] cursor-pointer flex flex-col leading-none"
            onClick={() => setPage('home')}
          >
            <span className={scrolled ? "" : "text-white"}>Kesias Mwale</span>
            <span className="text-[11px] tracking-widest text-[#C5A059] uppercase">SG ATU 2026</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#C5A059] ${page === link.id ? 'text-[#C5A059]' : (scrolled ? 'text-[#013220]' : 'text-white')}`}
              >
                {link.label}
              </button>
            ))}
            <button 
                onClick={() => {
                    if(page !== 'home') setPage('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);
                }} 
                className="bg-[#C5A059] text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-[#b08d4b] transition"
            >
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className={scrolled ? 'text-[#013220]' : 'text-white'} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden border-t">
            {navLinks.map(link => (
              <button 
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-left text-lg font-bold uppercase ${page === link.id ? 'text-[#C5A059]' : 'text-[#013220]'}`}
              >
                {link.label}
              </button>
            ))}
             <button 
                onClick={() => {
                    if(page !== 'home') setPage('home');
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100);
                }} 
                className="bg-[#013220] text-white px-6 py-3 rounded text-center font-bold"
            >
              Contact Office
            </button>
          </div>
        )}
      </nav>

      {/* Main Content Router */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {page === 'home' && <HomePage onNavigate={setPage} />}
        {page === 'cv' && <CVPage />}
        {page === 'vision' && <VisionPage />}
        {page === 'focus' && <FocusPage />}
      </main>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-gray-500 py-12 border-t border-gray-800 relative z-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Mwale for ATU SG</h4>
            <p>Advancing ATU Transformation.<br/>Deepening contribution to Digital Transformation Agendas.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-white font-bold uppercase tracking-widest mb-4">Quick Links</h4>
            <button onClick={() => setPage('cv')} className="text-left hover:text-[#C5A059]">Curriculum Vitae</button>
            <button onClick={() => setPage('vision')} className="text-left hover:text-[#C5A059]">Strategic Vision</button>
            <button onClick={() => setPage('focus')} className="text-left hover:text-[#C5A059]">Stakeholder Focus</button>
          </div>
          <div>
             <h4 className="text-white font-bold uppercase tracking-widest mb-4">Official Hashtag</h4>
             <span className="text-[#C5A059] text-xl font-bold">#kezias4atusg</span>
             <p className="mt-4 text-xs">© 2026 Eng. Kezias Kazuba MWALE.<br/>All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Global CSS for utilities */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;800&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;1,400&family=Playfair+Display:ital@1&display=swap');
        
        .font-sans { font-family: 'Montserrat', sans-serif; }
        .prose, p, li { font-family: 'Source Sans Pro', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}