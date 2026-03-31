import { Apple, Star } from "lucide-react";

export function ReviewsSection() {
    return (
        <section
            className="w-screen relative left-[calc(-50vw+50%)] bg-gray-100 pt-32 pb-32 sm:pt-40 sm:pb-40 -mt-16 z-20"
            style={{ clipPath: "polygon(0 0, 100% 6vw, 100% 100%, 0 calc(100% - 6vw))" }}
        >
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row min-h-[500px] shadow-2xl overflow-hidden rounded-xl">
                {/* Left Column (Dark Blue) */}
                <div className="md:w-5/12 bg-[#0b1b3d] p-10 md:p-14 flex flex-col justify-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">Reviews from<br />users</h2>

                    <div className="space-y-10">
                        {/* Apple Store */}
                        <div>
                            <div className="flex items-center gap-2 mb-3 text-lg font-semibold">
                                <Apple className="w-6 h-6 fill-current" />
                                <span>Apple App Store</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex gap-1 relative">
                                    {[1, 2, 3, 4].map(i => (
                                        <Star key={i} className="w-8 h-8 fill-white text-white" />
                                    ))}
                                    {/* Partial Star implementation */}
                                    <div className="relative w-8 h-8">
                                        <Star className="w-8 h-8 text-white" />
                                        <div className="absolute inset-0 overflow-hidden w-[80%]">
                                            <Star className="w-8 h-8 fill-white text-white" />
                                        </div>
                                    </div>
                                </div>
                                <span className="text-4xl font-bold">4.8</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column (Dark) */}
                <div className="md:w-7/12 bg-black p-10 md:p-14 text-gray-300 relative flex flex-col justify-center">
                    {/* Vertical line indicator */}
                    <div className="absolute left-10 md:left-14 top-16 bottom-16 w-px bg-gray-600 hidden md:block"></div>

                    <div className="space-y-12 md:pl-10">
                        <div className="space-y-6">
                            <p className="text-xl italic leading-relaxed text-gray-200">
                                "SubmissionSensAI has completely changed my attitude to training and my approach. I now roll with intent. My positional control, escapes, and submissions have improved massively since I started using the app. Couldn't do without it."
                            </p>
                            <p className="font-bold text-white text-lg">Thabo</p>
                        </div>

                        <div className="space-y-6">
                            <p className="text-xl italic leading-relaxed text-gray-200">
                                "If you're looking for a high-quality, structured Jiu-Jitsu app without the hefty price tag of a personal coach, SubmissionSensAI is a game-changer."
                            </p>
                            <p className="font-bold text-white text-lg">Jenn</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
