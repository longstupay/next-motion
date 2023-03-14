import { Footer, NavBar } from '@/components';
import Collaboration from '@/sections/Collaboration';
import Features from '@/sections/Features';
import Hero from '@/sections/Hero';
import MoreFeatures from '@/sections/MoreFeatures';
import { NoLockin } from '@/sections/NoLockin';
import SamePage from '@/sections/SamePage';
import StreamlinedExperience from '@/sections/StreamlinedExperience';

export default function Home() {
    return (
        <div className="">
            <NavBar />
            <main className="px-8 pt-8 md:px-36 md:pt-16">
                <Hero />
                <div className="relative z-10 w-full overflow-x-clip">
                    <Collaboration />
                    <SamePage />
                    <StreamlinedExperience />
                    <Features />
                    <MoreFeatures />
                </div>
            </main>
            <NoLockin />
            <Footer />
        </div>
    );
}
