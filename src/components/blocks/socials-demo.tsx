import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from "lucide-react";

export const SocialsDemo = () => {
    // We are using fallback images as we don't have an API key at our disposal.
    // In production, these should be replaced with actual YouTube thumbnail links or dynamically fetched.
    const videos = [
        {
            id: 1,
            title: "SubmissionSensAI Feature Spotlight - Daily Prompts",
            link: "https://www.youtube.com/watch?v=a3rndO5AYaU",
            imgSrc: "https://i.ytimg.com/vi/a3rndO5AYaU/hqdefault.jpg"
        },
        {
            id: 2,
            title: "How to use the PGF Dashboard",
            link: "https://www.youtube.com/@SubmissionSensAI",
            imgSrc: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "BJJ Breakdown with SubmissionSensAI",
            link: "https://www.youtube.com/@SubmissionSensAI",
            imgSrc: "https://images.unsplash.com/photo-1599058917212-97d142f31f90?q=80&w=2669&auto=format&fit=crop"
        }
    ]

    return (
        <section className="w-full bg-background py-16 sm:py-24">
            <div className="container mx-auto max-w-6xl px-4 text-center">
                <div className="flex flex-col items-center justify-center gap-4 mb-12">
                    <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center">
                        <Youtube className="h-8 w-8 text-red-500" />
                    </div>
                    <h2 className="text-3xl font-normal tracking-tight text-foreground sm:text-4xl">
                        Follow us on YouTube
                    </h2>
                    <p className="max-w-2xl text-lg text-muted-foreground">
                        Catch the latest breakdowns, feature updates, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {videos.map((video) => (
                        <a href={video.link} target="_blank" rel="noreferrer" key={video.id}>
                            <Card className="overflow-hidden bg-card hover:bg-muted/50 transition-colors border-0 shadow-md h-full">
                                <CardContent className="p-0 flex flex-col h-full">
                                    <div className="relative aspect-video overflow-hidden">
                                        <div className="absolute inset-0 bg-muted">
                                            <img src={video.imgSrc} alt={video.title} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="p-6 text-left flex-1">
                                        <h3 className="font-semibold line-clamp-2">{video.title}</h3>
                                        <p className="mt-2 text-sm text-red-500 font-medium">Watch on YouTube →</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};
