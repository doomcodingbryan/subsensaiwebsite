import { Card, CardContent } from "@/components/ui/card";
import { Youtube } from "lucide-react";

export const SocialsDemo = async () => {
    let videos = [
        {
            id: "sJ6e_y8F2XQ",
            title: "SubmissionSensAI Feature Spotlight - Journaling",
            link: "https://www.youtube.com/watch?v=sJ6e_y8F2XQ",
            imgSrc: "https://i.ytimg.com/vi/sJ6e_y8F2XQ/hqdefault.jpg"
        },
        {
            id: "7l8D_F83Ue0",
            title: "Submission Sensai Feature Spotlight - Daily Prompts",
            link: "https://www.youtube.com/watch?v=7l8D_F83Ue0",
            imgSrc: "https://i.ytimg.com/vi/7l8D_F83Ue0/hqdefault.jpg"
        },
        {
            id: "V1lB1c7e9aI",
            title: "Understanding BJJ the way AI does - Relational Data",
            link: "https://www.youtube.com/watch?v=V1lB1c7e9aI",
            imgSrc: "https://i.ytimg.com/vi/V1lB1c7e9aI/hqdefault.jpg"
        }
    ];

    try {
        const res = await fetch('https://www.youtube.com/feeds/videos.xml?channel_id=UC29tATlLM-H1-jo8a3WD_Nw', {
            next: { revalidate: 3600 }
        });
        const text = await res.text();
        
        const fetchedVideos = [];
        const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
        let match;
        while ((match = entryRegex.exec(text)) !== null && fetchedVideos.length < 3) {
            const entry = match[1];
            const idMatch = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/);
            const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
            if (idMatch && titleMatch) {
                fetchedVideos.push({
                    id: idMatch[1],
                    title: titleMatch[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
                    link: `https://www.youtube.com/watch?v=${idMatch[1]}`,
                    imgSrc: `https://i.ytimg.com/vi/${idMatch[1]}/hqdefault.jpg`
                });
            }
        }
        
        if (fetchedVideos.length === 3) {
            videos = fetchedVideos;
        } else if (fetchedVideos.length > 0) {
            videos = [...fetchedVideos, ...videos.slice(fetchedVideos.length, 3)];
        }
    } catch (error) {
        console.error("Failed to fetch YouTube videos:", error);
    }

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
