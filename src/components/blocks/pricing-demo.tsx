import { PricingSection } from "@/components/blocks/pricing-section"

export const PAYMENT_FREQUENCIES = ["monthly", "yearly"]

export const TIERS = [
    {
        id: "individuals",
        name: "Free Version",
        price: {
            monthly: "$0 / month",
            yearly: "$0 / month",
        },
        description: "",
        features: [
            "Free 3 chat responses a day",
            "Save techniques",
            "Drill recommendations",
            "Limited access to new features",
        ],
        cta: "Get started",
    },
    {
        id: "teams",
        name: "Premium",
        price: {
            monthly: "$4.99 / month",
            yearly: "$49.99 / year",
        },
        description: "",
        features: [
            "Interactive chat mode",
            "Unlimited chat responses",
            "Personalized study plans",
            "Early access to Beta features",
            "Priority support",
        ],
        cta: "Get started",
        popular: true,
    },
]

export function PricingSectionDemo() {
    return (
        <div className="relative flex justify-center items-center w-full mt-20 scale-90">
            <div className="absolute inset-0 -z-10">
                <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_35px] opacity-30 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>
            <PricingSection
                title="Become a Member"
                subtitle="Choose the best plan for your needs"
                frequencies={PAYMENT_FREQUENCIES}
                tiers={TIERS}
            />
        </div>
    );
}
