import { TestimonialSection } from "@/components/ui/testimonials";

// Sample data for the testimonials
const testimonialsData = [
    {
        id: 1,
        quote:
            "I’m excited about where the future of Jiu-Jitsu learning is headed, and SubmissionSensAI is a big part of that. The tools they’re developing have the potential to completely change how students study and understand Jiu-Jitsu.",
        name: "Brandon Mccaghren",
        role: "Endorsed 10th Planet Black Belt, PGF Founder",
        imageSrc: "/images/BMAC.png",
    },
    {
        id: 2,
        quote:
            "If you want to keep improving your Jiu-Jitsu, this is the perfect way to study and stay sharp when you're off the mats.",
        name: "Austin Oranday",
        role: "#8 rank IBJJF No Gi Black Belt",
        imageSrc: "/images/oranday.png",
    },
    {
        id: 3,
        quote:
            "A seamless experience from start to finish. Josh made our app design and experience really impressive.",
        name: "Nick Albin",
        role: "Creator of Chew Jitsu",
        imageSrc: "/images/chewjitsu.png",
    },
];

export const TestimonialSectionDemo = () => {
    return (
        <TestimonialSection
            title="See what our partners say"
            subtitle=""
            testimonials={testimonialsData}
        />
    );
};
