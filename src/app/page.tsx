import { PricingSectionDemo } from "@/components/blocks/pricing-demo";
import { TestimonialSectionDemo } from "@/components/blocks/testimonials-demo";
import { SocialsDemo } from "@/components/blocks/socials-demo";
import { ReviewsSection } from "@/components/blocks/reviews-section";

export default function Home() {
  return (
    <>
      <nav id="top-nav" className="navbar">
        <div className="navbar-container">
          <a href="/" className="brand-logo">
            <span className="brand-text">SubmissionSensAI</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-item">About</a>
            <a href="#partners" className="nav-item">Partners</a>
            <a href="#contact" className="nav-item btn-primary">Get in Contact</a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <section className="hero">
          <div className="hero-container">
            <div className="hero-text">
              <h1 className="hero-title">Your personal Jiu Jitsu AI coach</h1>
              <p className="hero-subtext">Search Questions. Track Progress. Win More.</p>
              <a href="#" className="btn-primary hero-btn">Download on iOS</a>
            </div>
            <div className="hero-visual">
              <img src="/images/image.png" alt="SubmissionSensAI Platform" className="hero-image" />
            </div>
          </div>
        </section>

        <TestimonialSectionDemo />

        <section className="app-showcase-section">
          <div className="app-showcase-container">
            <div className="app-showcase-text">
              <h2>Ask Any Question</h2>
              <p className="app-showcase-description">SubmissionSensAI answers any BJJ question as a rolling GIF. No more 8 hour long instructionals, get an answer and visual in seconds.</p>
            </div>
            <div className="app-showcase-visual">
              <div className="iphone-mockup">
                <div className="iphone-screen relative bg-black overflow-hidden">
                  <video
                    src="/video/ScreenRecording_03-09-2026 23-40-10_1.mov"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="app-showcase-section">
          <div className="app-showcase-container reverse">
            <div className="app-showcase-text">
              <h2>Log Your Training</h2>
              <p className="app-showcase-description">After a roll, log your training to track your progress and identify areas for improvement. SubmissionSensAI analyzes your daily sessions, notes your wins and losses, and builds a customized study plan to drill your weaknesses.</p>
            </div>
            <div className="app-showcase-visual">
              <div className="iphone-mockup">
                <div className="iphone-screen relative bg-black overflow-hidden">
                  <video
                    src="/video/logtrain.mov"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="app-showcase-section">
          <div className="app-showcase-container">
            <div className="app-showcase-text">
              <h2>Improve Your Game</h2>
              <p className="app-showcase-description">Get personalized study plans you can save and view any time. Also get video feedback and ratings on your rolls.</p>
            </div>
            <div className="app-showcase-visual">
              <div className="iphone-mockup">
                <div className="iphone-screen relative bg-black overflow-hidden">
                  <video
                    src="/video/studyplan.mov"
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Reviews Section from App Stores */}
        <ReviewsSection />

        {/* Three Phone Showcase */}
        <section className="relative w-full overflow-hidden pb-32 pt-20 flex justify-center items-center -mt-10 z-10">
          <div className="flex justify-center items-center w-full max-w-6xl mx-auto px-4 perspective-[1000px]">
            {/* Left Phone */}
            <div className="iphone-mockup transform rotate-[-8deg] scale-[0.8] translate-x-24 translate-y-12 opacity-95 transition-transform duration-500 hover:scale-[0.85] hover:rotate-[-5deg] hover:z-40 z-20">
              <div className="iphone-screen relative bg-black overflow-hidden">
              </div>
            </div>

            {/* Center Phone */}
            <div className="iphone-mockup transform scale-[1.05] z-30 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.1]">
              <div className="iphone-screen relative bg-black overflow-hidden">
              </div>
            </div>

            {/* Right Phone */}
            <div className="iphone-mockup transform rotate-[8deg] scale-[0.8] -translate-x-24 translate-y-12 opacity-95 transition-transform duration-500 hover:scale-[0.85] hover:rotate-[5deg] hover:z-40 z-20">
              <div className="iphone-screen relative bg-black overflow-hidden">
              </div>
            </div>
          </div>
        </section>

        {/* The new Shadcn Pricing Section */}
        <section id="pricing">
          <PricingSectionDemo />
        </section>

        {/* The new Socials Section */}
        <section id="socials">
          <SocialsDemo />
        </section>
      </main>
    </>
  );
}
