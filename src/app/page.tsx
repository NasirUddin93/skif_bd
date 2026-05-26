import { HeroSlider } from "@/components/sections/HeroSlider";
import { Ticker } from "@/components/ui/Ticker";
import { PresidentWelcome } from "@/components/sections/PresidentWelcome";
import { LatestNews } from "@/components/sections/LatestNews";
import { FeaturedEvent } from "@/components/sections/FeaturedEvent";
import { DojoFinder } from "@/components/sections/DojoFinder";
import { LogoWall } from "@/components/ui/LogoWall";
import { VideoHighlights } from "@/components/sections/VideoHighlights";
import { partners } from "@/data/partners";

const tickerItems = [
  { text: "Registration open for 15th National SKIF Championship 2026", href: "/events", tag: "LIVE" },
  { text: "New dojo branch opened in Sylhet division", href: "/news/new-dojo-opens-sylhet-division" },
  { text: "Congratulations to our new Dan grading successful candidates", href: "/news/dan-grading-examination-chittagong", tag: "NEWS" },
];

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Ticker items={tickerItems} />
      <PresidentWelcome />
      <LatestNews />
      <FeaturedEvent />
      <DojoFinder />
      <LogoWall partners={partners} />
      <VideoHighlights />
    </>
  );
}
