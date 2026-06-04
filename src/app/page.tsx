import { Hero } from "@/components/home/hero";
import { MarqueeBand } from "@/components/home/marquee-band";
import { ProblemSolution } from "@/components/home/problem-solution";
import { ServicesIndex } from "@/components/home/services-index";
import { SelectedWork } from "@/components/home/selected-work";
import { Process } from "@/components/home/process";
import { ClientsStrip } from "@/components/home/clients-strip";
import { NumbersBand } from "@/components/home/numbers-band";
import { BigCta } from "@/components/home/big-cta";
import { ScrollProgress } from "@/components/home/scroll-progress";
import { LiveCampaigns } from "@/components/work/live-campaigns";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      <div id="hero">
        <Hero />
      </div>

      <MarqueeBand />

      <div id="why">
        <ProblemSolution />
      </div>

      <div id="services">
        <ServicesIndex />
      </div>

      <div id="work">
        <SelectedWork />
      </div>

      <div id="process">
        <Process />
      </div>

      <div id="proof">
        <ClientsStrip />
        <LiveCampaigns limit={6} />
        <NumbersBand />
      </div>

      <div id="contact">
        <BigCta />
      </div>
    </>
  );
}
