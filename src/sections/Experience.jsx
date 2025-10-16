import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const resumeExperience = [
  {
    title: "Senior Software Engineer",
    company: "Coforge",
    date: "Aug 2025 – Present",
    logoPath:
      "https://www.coforge.com/hubfs/Coforge-logo-black-background..jpg",
    imgPath: "/images/openbanking.png",
    responsibilities: [
      "Worked on OpenBanking Project, integrating financial data from 5+ aggregators including Plaid, MX, Finicity, Akoya, and Yodlee.",
      "Built 15+ backend APIs and data pipelines to ingest and normalize user financial data, improving processing efficiency by 35%.",
      "Integrated ChatGPT API on the backend to generate real-time insights, increasing decision-making speed for lenders by 40%.",
      "Developed a responsive frontend dashboard to visualize AI-driven insights and creditworthiness scores, enhancing lender UX and reducing manual review time by 30%.",
      "Implemented a modular architecture, reducing aggregator onboarding time by 40% and boosting overall system scalability and maintainability.",
    ],
  },
  {
    title: "Software Developer Engineer",
    company: "Incedo Inc.",
    date: "Jan 2024 – Aug 2025",
    logoPath: "https://www.incedoinc.com/wp-content/uploads/incedo-logo.png",
    imgPath: "/images/incedo-project.png",
    responsibilities: [
      "Worked on Mastercard ICCP, implementing multitenancy architecture to support multiple clients seamlessly and reducing onboarding time by 25%.",
      "Developed 10+ backend endpoints for Mastercard API integrations, improving API efficiency by 30%.",
      "Reduced card creation failures by 40% through validation endpoint enhancements, improving reliability.",
      "Optimized API calls to Mastercard, reducing redundant requests by 35%, increasing system performance.",
      "Contributed to the Proof of Concept (PoC) for Mastercard ICCP, defining feasibility and architecture for scalability.",
      "Implemented a Customer Identification Process, improving user authentication accuracy by 50% by evaluating name matching with Mastercard card owners.",
    ],
  },
  {
    title: "Institute Management System",
    company: "Takshila Education",
    date: "May 2024 – Aug 2024",
    logoPath: "/images/takshila-logo.png",
    imgPath: "/images/takshila-project.png",
    responsibilities: [
      "Developed an educational ERP platform with a microservices architecture to manage student, faculty, and administrative operations.",

      "Implemented inter-service communication using RabbitMQ to efficiently process events and notify users.",
      "Built responsive user portals with React and a robust backend using .NET Core for real-time access to academic data.",
      "Designed modular services for student data management, course enrollment, and attendance tracking, improving system scalability and maintainability.",

      "Integrated real-time notifications and automated confirmations for homework deadlines, fee payments, and grade postings, enhancing the parent and student experience while reducing manual administrative tasks.",

      "Integrated Takshu AI for intelligent analytics and recommendations, enabling predictive insights on student performance and administrative efficiency.",
    ],
  },
];

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 80%" },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", { scaleY: 1 - self.progress });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: text, start: "top 60%" },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {resumeExperience.map((exp) => (
              <div key={exp.title} className="exp-card-wrapper timeline-card">
                <div className="xl:w-2/6">
                  <GlowCard card={exp}>
                    <div>
                      <img src={exp.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={exp.logoPath} alt={`${exp.company} logo`} />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">
                          {exp.title} @ {exp.company}
                        </h1>
                        <p className="my-5 text-white-50">🗓️ {exp.date}</p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {exp.responsibilities.map((res, idx) => (
                            <li key={idx} className="text-lg">
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
